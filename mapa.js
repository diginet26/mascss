/* ============================================================
   DIGITAL RIFT — MAP ENGINE
   ============================================================ */

(function(){

    const mapArea = document.getElementById("dr-map-area");
    const canvas = document.getElementById("dr-map-canvas");

    const locations =
        Array.from(document.querySelectorAll(".dr-location"));

    const territories =
        Array.from(document.querySelectorAll(".dr-territory"));

    const waterFeatures =
        Array.from(document.querySelectorAll(".dr-river, .dr-lake"));

    const allEntities =
        [...locations, ...territories, ...waterFeatures];

    const search =
        document.getElementById("dr-search");

    const filters =
        document.querySelectorAll(".dr-filter");

    const empty =
        document.getElementById("dr-empty");

    const place =
        document.getElementById("dr-place");

    const title =
        document.getElementById("dr-place-title");

    const type =
        document.getElementById("dr-place-type");

    const description =
        document.getElementById("dr-place-description");

    const region =
        document.getElementById("dr-region");

    const status =
        document.getElementById("dr-status");

    const danger =
        document.getElementById("dr-danger");


    /* ========================================================
       DISTRIBUCIÓN AUTOMÁTICA DE ETIQUETAS
       Solo mueve los rótulos de las localizaciones; nunca los
       marcadores, los territorios ni las coordenadas cartográficas.
       ======================================================== */

    const locationLabelItems = locations
        .map((location, index) => ({
            location,
            label: location.querySelector(".dr-location-label"),
            index
        }))
        .filter(item => item.label);

    function rectangleOverlapArea(a, b){
        const width = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        const height = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return width > 0 && height > 0 ? width * height : 0;
    }

    function layoutLocationLabels(){
        const canvasWidth = canvas.offsetWidth || 1500;
        const canvasHeight = canvas.offsetHeight || 900;
        const visibleItems = locationLabelItems.filter(item =>
            !item.location.classList.contains("hidden") &&
            getComputedStyle(item.location).display !== "none"
        );

        if(!visibleItems.length) return;

        /*
         * Todas las posiciones se calculan en coordenadas internas del
         * lienzo. Por eso el diseño sigue funcionando con cualquier zoom.
         */
        const markers = visibleItems.map(item => {
            const el = item.location;
            const centerX = parseFloat(el.style.left) || 0;
            const centerY = parseFloat(el.style.top) || 0;
            const width = el.offsetWidth || 30;
            const height = el.offsetHeight || 30;
            const scale = el.classList.contains("selected") ? 1.35 : 1;
            const visualWidth = width * scale;
            const visualHeight = height * scale;
            return {
                ...item,
                centerX,
                centerY,
                box: {
                    left: centerX - visualWidth / 2,
                    top: centerY - visualHeight / 2,
                    right: centerX + visualWidth / 2,
                    bottom: centerY + visualHeight / 2
                },
                width,
                height,
                labelWidth: item.label.offsetWidth || 80,
                labelHeight: item.label.offsetHeight || 20
            };
        });

        /* Etiquetas de territorios y agua actúan como obstáculos estáticos. */
        const canvasRect = canvas.getBoundingClientRect();
        const canvasScale = canvasRect.width / canvasWidth || 1;
        const fixedObstacles = Array.from(canvas.querySelectorAll(
            ".dr-territory-label-svg, .dr-territory-code-svg, .dr-water-label"
        )).map(el => {
            const rect = el.getBoundingClientRect();
            if(rect.width < 1 || rect.height < 1) return null;
            return {
                left: (rect.left - canvasRect.left) / canvasScale,
                top: (rect.top - canvasRect.top) / canvasScale,
                right: (rect.right - canvasRect.left) / canvasScale,
                bottom: (rect.bottom - canvasRect.top) / canvasScale
            };
        }).filter(Boolean);

        /* Las etiquetas de las zonas más apiñadas se colocan primero. */
        markers.forEach(marker => {
            marker.neighbours = markers.reduce((count, other) => {
                if(other === marker) return count;
                const dx = Math.abs(marker.centerX - other.centerX);
                const dy = Math.abs(marker.centerY - other.centerY);
                return count + (dx < 190 && dy < 105 ? 1 : 0);
            }, 0);
        });
        markers.sort((a, b) =>
            b.neighbours - a.neighbours || b.labelWidth - a.labelWidth || a.index - b.index
        );

        const placedLabels = [];
        const gap = 8;

        markers.forEach(marker => {
            const mw = marker.width;
            const mh = marker.height;
            const lw = marker.labelWidth;
            const lh = marker.labelHeight;
            const markerLeft = marker.centerX - 14;
            const markerTop = marker.centerY - 14;

            const candidates = [
                {name:"right",       left:mw + gap,  top:(mh - lh) / 2,       preference:0},
                {name:"left",        left:-lw-gap,  top:(mh - lh) / 2,       preference:1},
                {name:"right-below", left:mw + gap,  top:mh - lh + 5,         preference:2},
                {name:"right-above", left:mw + gap,  top:5 - lh,              preference:3},
                {name:"left-below",  left:-lw-gap,  top:mh - lh + 5,          preference:4},
                {name:"left-above",  left:-lw-gap,  top:5 - lh,               preference:5},
                {name:"below",       left:(mw-lw)/2, top:mh + gap,             preference:6},
                {name:"above",       left:(mw-lw)/2, top:-lh - gap,            preference:7}
            ];

            let best = null;
            candidates.forEach(candidate => {
                const box = {
                    left: markerLeft + candidate.left,
                    top: markerTop + candidate.top,
                    right: markerLeft + candidate.left + lw,
                    bottom: markerTop + candidate.top + lh
                };
                let score = candidate.preference * 18;

                /* Penaliza rótulos fuera de los límites laterales del lienzo. */
                if(box.left < 0) score += Math.abs(box.left) * 60;
                if(box.right > canvasWidth) score += (box.right - canvasWidth) * 60;
                if(box.top < -150) score += (-150 - box.top) * 35;
                if(box.bottom > canvasHeight + 500) score += (box.bottom - canvasHeight - 500) * 35;

                fixedObstacles.forEach(obstacle => {
                    const area = rectangleOverlapArea(box, obstacle);
                    if(area) score += 30000 + area * 12;
                });

                markers.forEach(other => {
                    if(other === marker) return;
                    const area = rectangleOverlapArea(box, other.box);
                    if(area) score += 50000 + area * 18;
                });

                placedLabels.forEach(obstacle => {
                    const area = rectangleOverlapArea(box, obstacle);
                    if(area) score += 100000 + area * 24;
                });

                if(!best || score < best.score){
                    best = {...candidate, box, score};
                }
            });

            marker.label.style.left = best.left + "px";
            marker.label.style.top = best.top + "px";
            marker.label.dataset.autoPosition = best.name;
            placedLabels.push(best.box);
        });
    }


    /* ========================================================
       SELECCIÓN DE CUALQUIER ELEMENTO DEL MAPA
       ======================================================== */

    function clearSelection(){
        allEntities.forEach(x =>
            x.classList.remove("selected")
        );
    }

    function openEntity(entity){

        clearSelection();
        entity.classList.add("selected");

        empty.style.display = "none";
        place.classList.add("active");

        title.textContent =
            entity.dataset.title || entity.dataset.name || "—";

        type.textContent =
            entity.dataset.type || "ELEMENTO";

        description.textContent =
            entity.dataset.description || "Sin descripción registrada.";

        region.textContent =
            entity.dataset.region || "—";

        /* Enlace de navegación individual: data-url, data-href o data-link. */
        const destinationUrl =
            (entity.dataset.url || entity.dataset.href || entity.dataset.link || "").trim();
        const goLink = document.getElementById("dr-go-link");
        const entityName = entity.dataset.title || entity.dataset.name || "destino";
        if(destinationUrl){
            goLink.href = destinationUrl;
            goLink.removeAttribute("aria-disabled");
            goLink.tabIndex = 0;
            goLink.classList.remove("is-disabled");
            goLink.setAttribute("aria-label", "Abrir " + entityName + " en una nueva pestaña");
            goLink.setAttribute("title", "Abrir " + entityName + " en una nueva pestaña");
        }else{
            goLink.removeAttribute("href");
            goLink.setAttribute("aria-disabled", "true");
            goLink.tabIndex = -1;
            goLink.classList.add("is-disabled");
            goLink.setAttribute("aria-label", "Falta configurar el enlace de " + entityName);
            goLink.setAttribute("title", "Añade data-url a este punto para configurar su enlace");
        }

        /* Enlace adicional individual: data-more-url (o alias data-info-url / data-details-url). */
        const moreInfoUrl =
            (entity.dataset.moreUrl || entity.dataset.infoUrl || entity.dataset.detailsUrl || "").trim();
        const moreLink = document.getElementById("dr-more-link");
        if(moreInfoUrl){
            moreLink.href = moreInfoUrl;
            moreLink.removeAttribute("aria-disabled");
            moreLink.tabIndex = 0;
            moreLink.classList.remove("is-disabled");
            moreLink.setAttribute("aria-label", "Más información sobre " + entityName + " en una nueva pestaña");
            moreLink.setAttribute("title", "Más información sobre " + entityName);
        }else{
            moreLink.removeAttribute("href");
            moreLink.setAttribute("aria-disabled", "true");
            moreLink.tabIndex = -1;
            moreLink.classList.add("is-disabled");
            moreLink.setAttribute("aria-label", "Falta configurar el enlace de más información de " + entityName);
            moreLink.setAttribute("title", "Añade data-more-url a este punto para configurar su enlace");
        }

        /* Estado independiente por punto: data-status="Disponible" o "No disponible". */
        const rawStatus = (entity.dataset.status || "Disponible").trim().toLowerCase();
        const unavailable = ["no disponible", "no-disponible", "no_disponible"].includes(rawStatus);
        status.textContent = unavailable ? "NO DISPONIBLE" : "DISPONIBLE";
        status.classList.toggle("is-available", !unavailable);
        status.classList.toggle("is-unavailable", unavailable);

        /* Cartel de peligro dinámico: verde=bajo, amarillo=medio, rojo=alto.
           Desconocido/Extremo se trata con prudencia: desconocido queda neutro y extremo se muestra como alto. */
        const rawDanger = (entity.dataset.danger || "").trim().toLowerCase();
        danger.classList.remove("level-low", "level-medium", "level-high");
        if(["bajo", "low"].includes(rawDanger)){
            danger.classList.add("level-low");
            danger.textContent = "NIVEL DE PELIGRO: BAJO";
        }else if(["medio", "moderado", "medium"].includes(rawDanger)){
            danger.classList.add("level-medium");
            danger.textContent = "NIVEL DE PELIGRO: MEDIO";
        }else if(["alto", "extremo", "high"].includes(rawDanger)){
            danger.classList.add("level-high");
            danger.textContent = "NIVEL DE PELIGRO: ALTO";
        }else{
            danger.textContent = "NIVEL DE PELIGRO: SIN CLASIFICAR";
        }

        requestAnimationFrame(layoutLocationLabels);
    }


    allEntities.forEach(entity => {

        entity.addEventListener("click",function(e){
            e.stopPropagation();
            openEntity(this);
        });

    });


    /* ========================================================
       FILTROS + BUSCADOR
       Territorios y agua también forman parte del buscador.
       ======================================================== */

    let currentFilter = "all";

    filters.forEach(button => {

        button.addEventListener("click",function(){

            filters.forEach(x =>
                x.classList.remove("active")
            );

            this.classList.add("active");
            currentFilter = this.dataset.filter;
            filterEntities();

        });

    });

    search.addEventListener("input",filterEntities);


    function filterEntities(){

        const text =
            search.value.toLowerCase().trim();

        allEntities.forEach(entity => {

            const name =
                (entity.dataset.name || "").toLowerCase();

            const type =
                (entity.dataset.type || "").toLowerCase();

            const mapType =
                entity.dataset.mapType || "location";

            const matchesText =
                !text || name.includes(text);

            let matchesFilter = true;

            if(currentFilter === "territory"){
                matchesFilter = mapType === "territory";
            }else if(currentFilter === "water"){
                matchesFilter = mapType === "water";
            }else if(currentFilter !== "all"){
                matchesFilter = type === currentFilter.toLowerCase();
            }

            if(matchesText && matchesFilter){
                entity.classList.remove("hidden");
            }else{
                entity.classList.add("hidden");
            }

        });

        layoutLocationLabels();
    }


    /* ========================================================
       ZOOM
       ======================================================== */

    /* La escala base encaja el lienzo en el área visible.
       El zoom del usuario se aplica encima de esa escala automática. */
    let fitScale = 1;
    let zoom = 1;
    let posX = 0;
    let posY = 0;

    function calculateFitScale(){
        const areaWidth = mapArea.clientWidth;
        const areaHeight = mapArea.clientHeight;
        const canvasWidth = canvas.offsetWidth || 1500;
        const canvasHeight = canvas.offsetHeight || 900;

        if(!areaWidth || !areaHeight) return;

        /* Un pequeño margen evita que el terreno roce los bordes. */
        fitScale = Math.min(
            (areaWidth * 0.96) / canvasWidth,
            (areaHeight * 0.96) / canvasHeight
        );

        /* Evita que el mapa resulte diminuto en pantallas muy estrechas. */
        fitScale = Math.max(0.25, Math.min(fitScale, 1.5));
        updateMap();
    }

    function updateMap(){
        const effectiveScale = fitScale * zoom;
        canvas.style.transform =
            "translate(calc(-50% + " + posX + "px),calc(-50% + " + posY + "px)) scale(" + effectiveScale + ")";
    }

    document.getElementById("dr-plus")
        .addEventListener("click",function(){
            zoom = Math.min(3,zoom + .15);
            updateMap();
        });

    document.getElementById("dr-minus")
        .addEventListener("click",function(){
            zoom = Math.max(.5,zoom - .15);
            updateMap();
        });

    document.getElementById("dr-reset")
        .addEventListener("click",function(){
            zoom = 1;
            posX = 0;
            posY = 0;
            calculateFitScale();
        });

    /* Recalcula el encaje al cambiar el tamaño de ventana o del panel. */
    if("ResizeObserver" in window){
        const mapResizeObserver = new ResizeObserver(calculateFitScale);
        mapResizeObserver.observe(mapArea);
    }else{
        window.addEventListener("resize",calculateFitScale);
    }

    window.addEventListener("load",calculateFitScale);
    requestAnimationFrame(layoutLocationLabels);
    requestAnimationFrame(calculateFitScale);


    /* ========================================================
       ARRASTRAR MAPA
       ======================================================== */

    let dragging = false;
    let startX = 0;
    let startY = 0;

    mapArea.addEventListener("mousedown",function(e){

        if(e.target.closest(".dr-location, .dr-territory, .dr-river, .dr-lake"))
            return;

        dragging = true;
        mapArea.classList.add("dragging");

        startX = e.clientX - posX;
        startY = e.clientY - posY;

    });


    window.addEventListener("mousemove",function(e){

        if(!dragging)
            return;

        posX = e.clientX - startX;
        posY = e.clientY - startY;

        updateMap();

    });


    window.addEventListener("mouseup",function(){

        dragging = false;
        mapArea.classList.remove("dragging");

    });


    /* ========================================================
       RUEDA DEL RATÓN
       ======================================================== */

    mapArea.addEventListener("wheel",function(e){

        e.preventDefault();

        if(e.deltaY < 0){
            zoom = Math.min(3,zoom + .08);
        }else{
            zoom = Math.max(.5,zoom - .08);
        }

        updateMap();

    },{passive:false});


    /* ========================================================
       CLIC FUERA DE UNA LOCALIZACIÓN
       ======================================================== */

    mapArea.addEventListener("click",function(e){

        if(e.target.closest(".dr-location, .dr-territory, .dr-river, .dr-lake"))
            return;

        locations.forEach(x =>
            x.classList.remove("selected")
        );

        requestAnimationFrame(layoutLocationLabels);
    });


})();
