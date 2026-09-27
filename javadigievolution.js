/* =========================================================
       BASE DE DATOS DEL FORO

       =========================================================

       ESTA ES LA PARTE MÁS IMPORTANTE PARA EDITAR.

       Cada Digimon tiene:

       - nombre
       - etapa
       - atributo
       - imagen
       - datos
       - vacuna
       - virus

       Dentro de cada atributo puedes colocar HASTA 4
       Digimon diferentes.

       IMPORTANTE:

       El valor debe ser el ID/slug del Digimon.

       Ejemplo:

       datos: [
           "angemon",
           "unimon",
           "leomon",
           "kabuterimon"
       ]

       significa que desde ese Digimon, en la ruta DATOS,
       aparecen esas cuatro posibilidades.

    ========================================================= */


    const DIGIMON_DATABASE = {


        /* =====================================================
           PATAMON
        ===================================================== */

        patamon: {

            nombre: "Patamon",

            etapa: "Rookie",

            atributo: "Datos",

            imagen: "",

            datos: [
                "angemon",
                "unimon",
                "leomon",
                "kabuterimon"
            ],

            vacuna: [
                "angemon",
                "birdramon",
                "garurumon",
                "togemon"
            ],

            virus: [
                "devimon",
                "ogremon",
                "bakemon",
                "darktyrannomon"
            ]

        },


        /* =====================================================
           ANGEMON
        ===================================================== */

        angemon: {

            nombre: "Angemon",

            etapa: "Champion",

            atributo: "Vacuna",

            imagen: "",

            datos: [
                "magnaangemon",
                "garudamon",
                "andromon",
                "weregarurumon"
            ],

            vacuna: [
                "magnaangemon",
                "holyangemon",
                "seraphimon",
                "ophanimon"
            ],

            virus: [
                "myotismon",
                "skullsatamon",
                "phantomon",
                "ladydevimon"
            ]

        },


        /* =====================================================
           UNIMON
        ===================================================== */

        unimon: {

            nombre: "Unimon",

            etapa: "Champion",

            atributo: "Vacuna",

            imagen: "",

            datos: [
                "garudamon",
                "megadramon",
                "hippogriffomon",
                "aeroveedramon"
            ],

            vacuna: [
                "garudamon",
                "hippogriffomon",
                "silphymon",
                "gryphonmon"
            ],

            virus: [
                "megadramon",
                "gigadramon",
                "airdramon",
                "cyclomon"
            ]

        },


        /* =====================================================
           LEOMON
        ===================================================== */

        leomon: {

            nombre: "Leomon",

            etapa: "Champion",

            atributo: "Datos",

            imagen: "",

            datos: [
                "saberleomon",
                "leopardmon",
                "weregarurumon",
                "grapleomon"
            ],

            vacuna: [
                "saberleomon",
                "magnadramon",
                "craniummon",
                "dynasmon"
            ],

            virus: [
                "ogremon",
                "mamemon",
                "metaltyranomon",
                "piedmon"
            ]

        },


        /* =====================================================
           KABUTERIMON
        ===================================================== */

        kabuterimon: {

            nombre: "Kabuterimon",

            etapa: "Champion",

            atributo: "Virus",

            imagen: "",

            datos: [
                "atlurkabuterimon",
                "megakabuterimon",
                "heraklekabuterimon",
                "kuwagamon"
            ],

            vacuna: [
                "atlurkabuterimon",
                "rosemon",
                "lilamon",
                "granlocomon"
            ],

            virus: [
                "metalkuwagamon",
                "skullscorpionmon",
                "piedmon",
                "tyranomon"
            ]

        },


        /* =====================================================
           BIRDRAMON
        ===================================================== */

        birdramon: {

            nombre: "Birdramon",

            etapa: "Champion",

            atributo: "Vacuna",

            imagen: "",

            datos: [
                "garudamon",
                "phoenixmon",
                "aeroveedramon",
                "silphymon"
            ],

            vacuna: [
                "garudamon",
                "phoenixmon",
                "hououmon",
                "magnadramon"
            ],

            virus: [
                "megadramon",
                "gigadramon",
                "metalgreymon",
                "machinedramon"
            ]

        },


        /* =====================================================
           OGREMON
        ===================================================== */

        ogremon: {

            nombre: "Ogremon",

            etapa: "Champion",

            atributo: "Virus",

            imagen: "",

            datos: [
                "digitamamon",
                "mamemon",
                "ogremon",
                "skullmeramon"
            ],

            vacuna: [
                "mamemon",
                "monzaemon",
                "etemon",
                "superstarmon"
            ],

            virus: [
                "skullmeramon",
                "etemon",
                "metaletemon",
                "piedmon"
            ]

        },


        /* =====================================================
           BAKEMON
        ===================================================== */

        bakemon: {

            nombre: "Bakemon",

            etapa: "Champion",

            atributo: "Virus",

            imagen: "",

            datos: [
                "phantomon",
                "myotismon",
                "wisemon",
                "pumpkinmon"
            ],

            vacuna: [
                "wisemon",
                "monzaemon",
                "antylamon",
                "mistymon"
            ],

            virus: [
                "phantomon",
                "myotismon",
                "piedmon",
                "metalphantomon"
            ]

        },


        /* =====================================================
           TOGEMON
        ===================================================== */

        togemon: {

            nombre: "Togemon",

            etapa: "Champion",

            atributo: "Datos",

            imagen: "",

            datos: [
                "lilamon",
                "rosemon",
                "digitamamon",
                "sunflowmon"
            ],

            vacuna: [
                "lilamon",
                "rosemon",
                "lotusmon",
                "ophanimon"
            ],

            virus: [
                "woodmon",
                "cherrymon",
                "pumpkinmon",
                "mammon"
            ]

        },


        /* =====================================================
           DEVIMON
        ===================================================== */

        devimon: {

            nombre: "Devimon",

            etapa: "Champion",

            atributo: "Virus",

            imagen: "",

            datos: [
                "myotismon",
                "skullsatamon",
                "phantomon",
                "digitamamon"
            ],

            vacuna: [
                "myotismon",
                "piedmon",
                "metallseadramon",
                "blackwargraymon"
            ],

            virus: [
                "myotismon",
                "skullsatamon",
                "ladydevimon",
                "demidevimon"
            ]

        },


        /* =====================================================
           DARKTYRANNOMON
        ===================================================== */

        darktyrannomon: {

            nombre: "DarkTyrannomon",

            etapa: "Champion",

            atributo: "Virus",

            imagen: "",

            datos: [
                "metaltyranomon",
                "megadramon",
                "gigadramon",
                "rusttyranomon"
            ],

            vacuna: [
                "metalgreymon",
                "machinedramon",
                "wargraymon",
                "blitzgreymon"
            ],

            virus: [
                "metaltyranomon",
                "rusttyranomon",
                "machinedramon",
                "millenniummon"
            ]

        },


        /* =====================================================
           MAGNAANGEMON
        ===================================================== */

        magnaangemon: {

            nombre: "MagnaAngemon",

            etapa: "Ultimate",

            atributo: "Vacuna",

            imagen: "",

            datos: [
                "seraphimon",
                "ophanimon",
                "cherubimon",
                "holydramon"
            ],

            vacuna: [
                "seraphimon",
                "ophanimon",
                "magnadramon",
                "cherubimon"
            ],

            virus: [
                "myotismon",
                "piedmon",
                "beelzemon",
                "daemon"
            ]

        },


        /* =====================================================
           MYOTISMON
        ===================================================== */

        myotismon: {

            nombre: "Myotismon",

            etapa: "Ultimate",

            atributo: "Virus",

            imagen: "",

            datos: [
                "venommyotismon",
                "beelzemon",
                "barbamon",
                "darkdramon"
            ],

            vacuna: [
                "beelzemon",
                "belphemon",
                "daemon",
                "apocalymon"
            ],

            virus: [
                "venommyotismon",
                "beelzemon",
                "belphemon",
                "piedmon"
            ]

        },


        /* =====================================================
           GARUDAMON
        ===================================================== */

        garudamon: {

            nombre: "Garudamon",

            etapa: "Ultimate",

            atributo: "Vacuna",

            imagen: "",

            datos: [
                "phoenixmon",
                "hououmon",
                "valkyrimon",
                "griffomon"
            ],

            vacuna: [
                "phoenixmon",
                "hououmon",
                "valkyrimon",
                "magnadramon"
            ],

            virus: [
                "megadramon",
                "gigadramon",
                "machinedramon",
                "rusttyranomon"
            ]

        },


        /* =====================================================
           DEVOLUCIONES / EJEMPLOS DE MEGA
        ===================================================== */

        seraphimon: {

            nombre: "Seraphimon",

            etapa: "Mega",

            atributo: "Vacuna",

            imagen: "",

            datos: [],

            vacuna: [],

            virus: []

        },


        ophanimon: {

            nombre: "Ophanimon",

            etapa: "Mega",

            atributo: "Vacuna",

            imagen: "",

            datos: [],

            vacuna: [],

            virus: []

        },


        phoenixmon: {

            nombre: "Phoenixmon",

            etapa: "Mega",

            atributo: "Vacuna",

            imagen: "",

            datos: [],

            vacuna: [],

            virus: []

        },


        venommyotismon: {

            nombre: "VenomMyotismon",

            etapa: "Mega",

            atributo: "Virus",

            imagen: "",

            datos: [],

            vacuna: [],

            virus: []

        },


        beelzemon: {

            nombre: "Beelzemon",

            etapa: "Mega",

            atributo: "Virus",

            imagen: "",

            datos: [],

            vacuna: [],

            virus: []

        },


        piedmon: {

            nombre: "Piedmon",

            etapa: "Mega",

            atributo: "Virus",

            imagen: "",

            datos: [],

            vacuna: [],

            virus: []

        },


        metaltyranomon: {

            nombre: "MetalTyrannomon",

            etapa: "Ultimate",

            atributo: "Virus",

            imagen: "",

            datos: [],
            vacuna: [],
            virus: []

        },


        rusttyranomon: {

            nombre: "RustTyrannomon",

            etapa: "Mega",

            atributo: "Virus",

            imagen: "",

            datos: [],
            vacuna: [],
            virus: []

        },


        wargraymon: {

            nombre: "WarGreymon",

            etapa: "Mega",

            atributo: "Vacuna",

            imagen: "",

            datos: [],
            vacuna: [],
            virus: []

        },


        machinedramon: {

            nombre: "Machinedramon",

            etapa: "Mega",

            atributo: "Virus",

            imagen: "",

            datos: [],
            vacuna: [],
            virus: []

        }

    };


    /* =========================================================
       NORMALIZACIÓN DE LA BASE DE DATOS

       - indigevolucion: lista independiente de posibles
         indigevoluciones. NO depende de Datos/Vacuna/Virus.
       - evoluciones: lista usada únicamente por Bebe I y Bebe II,
         que no tienen atributo.

       Los campos se crean automáticamente si no existen para que
       la base de datos siga siendo fácil de editar.
    ========================================================= */

    Object.values(DIGIMON_DATABASE).forEach(digimon => {

        digimon.indigevolucion =
            Array.isArray(digimon.indigevolucion)
                ? digimon.indigevolucion
                : [];

        digimon.evoluciones =
            Array.isArray(digimon.evoluciones)
                ? digimon.evoluciones
                : [];

    });



    /* =========================================================
       CONFIGURACIÓN
    ========================================================= */

    const TYPE_INFO = {

        datos: {

            nombre: "DATOS",

            descripcion:
                "Ruta de evolución asociada al atributo <strong>Datos</strong>."

        },

        vacuna: {

            nombre: "VACUNA",

            descripcion:
                "Ruta de evolución asociada al atributo <strong>Vacuna</strong>."

        },

        virus: {

            nombre: "VIRUS",

            descripcion:
                "Ruta de evolución asociada al atributo <strong>Virus</strong>."

        }

    };



    /* =========================================================
       ESTADO
    ========================================================= */

    let currentDigimon = "patamon";

    let currentType = "datos";

    let history = [];



    /* =========================================================
       ELEMENTOS HTML
    ========================================================= */

    const selectedName =
        document.getElementById("selectedName");

    const selectedImage =
        document.getElementById("selectedImage");

    const selectedPlaceholder =
        document.getElementById("selectedPlaceholder");

    const selectedMeta =
        document.getElementById("selectedMeta");

    const evolutionGrid =
        document.getElementById("evolutionGrid");

    const indievolutionGrid =
        document.getElementById("indievolutionGrid");

    const indievolutionTarget =
        document.getElementById("indievolutionTarget");

    const typeDescription =
        document.getElementById("typeDescription");

    const mainSearch =
        document.getElementById("mainSearch");

    const suggestions =
        document.getElementById("suggestions");

    const historyElement =
        document.getElementById("history");

    const searchModal =
        document.getElementById("searchModal");

    const modalSearch =
        document.getElementById("modalSearch");

    const modalResults =
        document.getElementById("modalResults");

    const toast =
        document.getElementById("toast");



    /* =========================================================
       OBTENER DIGIMON
    ========================================================= */

    function getDigimon(slug) {

        return DIGIMON_DATABASE[slug] || null;

    }



    /* =========================================================
       OBTENER TODOS
    ========================================================= */

    function getAllDigimon() {

        return Object.entries(DIGIMON_DATABASE)
            .map(([slug, data]) => ({
                slug,
                ...data
            }));

    }



    /* =========================================================
       OBTENER INDIGIEVOLUCIONES

       Busca todos los Digimon que tienen al Digimon actual
       como posible evolución dentro de cualquiera de sus
       rutas: Datos, Vacuna o Virus.
    ========================================================= */

    function getIndievolutions(slug) {

        const digimon = getDigimon(slug);

        if (!digimon) {
            return [];
        }

        /*
         * La indigevolución es independiente de los atributos.
         * Si el campo está configurado, se respeta exactamente.
         * Como compatibilidad con la base antigua, si está vacío
         * se calcula también a partir de las rutas existentes.
         */
        if (digimon.indigevolucion.length) {

            return digimon.indigevolucion
                .map(getDigimon)
                .filter(Boolean)
                .map(previous => ({
                    slug: Object.keys(DIGIMON_DATABASE).find(
                        key => DIGIMON_DATABASE[key] === previous
                    ),
                    ...previous
                }));

        }

        const previousDigimon = [];

        Object.entries(DIGIMON_DATABASE).forEach(
            ([sourceSlug, source]) => {

                if (sourceSlug === slug) {
                    return;
                }

                const routes = [
                    ...(source.datos || []),
                    ...(source.vacuna || []),
                    ...(source.virus || []),
                    ...(source.evoluciones || [])
                ];

                if (routes.includes(slug)) {
                    previousDigimon.push({
                        slug: sourceSlug,
                        ...source
                    });
                }

            }
        );

        return previousDigimon;

    }



    /* =========================================================
       IMAGEN

       Si no existe imagen, se muestra el símbolo del
       Digivice en lugar de una imagen rota.
    ========================================================= */

    function createImage(container, digimon) {

        if (!digimon || !digimon.imagen) {

            container.innerHTML = `
                <div class="empty-icon">
                    ◈
                </div>
            `;

            return;

        }


        container.innerHTML = `
            <img
                src="${digimon.imagen}"
                alt="${digimon.nombre}"
            >
        `;

    }



    /* =========================================================
       SELECCIONAR DIGIMON
    ========================================================= */

    function selectDigimon(slug, addToHistory = true) {

        const digimon =
            getDigimon(slug);


        if (!digimon) {

            showToast(
                "Ese Digimon no existe en la base de datos."
            );

            return;

        }


        if (addToHistory) {

            if (
                currentDigimon &&
                currentDigimon !== slug
            ) {

                history.push(currentDigimon);

            }

        }


        currentDigimon =
            slug;


        currentType =
            "datos";


        renderSelectedDigimon();

        renderTypeTabs();

        renderEvolutions();

        renderIndievolutions();

        renderHistory();

        suggestions.classList.remove("active");

        mainSearch.value = "";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }



    /* =========================================================
       RENDER DIGIMON SELECCIONADO
    ========================================================= */

    function renderSelectedDigimon() {

        const digimon =
            getDigimon(currentDigimon);


        if (!digimon) {
            return;
        }


        selectedName.textContent =
            digimon.nombre;


        selectedMeta.innerHTML = `

            <div class="badge">
                ETAPA: ${digimon.etapa || '—'}
            </div>

            <div class="badge">
                ATRIBUTO: ${digimon.atributo || 'SIN ATRIBUTO'}
            </div>

            ${digimon.tipo ? `
                <div class="badge">
                    TIPO: ${digimon.tipo}
                </div>
            ` : ''}

        `;


        if (digimon.imagen) {

            selectedImage.src =
                digimon.imagen;

            selectedImage.alt =
                digimon.nombre;

            selectedImage.style.display =
                "block";

            selectedPlaceholder.style.display =
                "none";

        } else {

            selectedImage.style.display =
                "none";

            selectedPlaceholder.style.display =
                "block";

        }

    }



    /* =========================================================
       TABS
    ========================================================= */

    function renderTypeTabs() {

        const digimon = getDigimon(currentDigimon);
        const baby = isBaby(digimon);

        document
            .querySelectorAll('.type-tab')
            .forEach(button => {

                button.style.display = baby ? 'none' : '';

                button.classList.toggle(
                    'active',
                    !baby && button.dataset.type === currentType
                );

            });

        const title = document.querySelector(
            '.evolution-header .section-title'
        );

        if (title) {
            title.textContent = baby
                ? 'RUTA DE CRECIMIENTO'
                : 'RUTAS DE DIGIEVOLUCIÓN';
        }

    }



    /* =========================================================
       CAMBIAR TIPO
    ========================================================= */

    function setType(type) {

        if (!TYPE_INFO[type]) {
            return;
        }


        currentType =
            type;


        renderTypeTabs();

        renderEvolutions();

    }



    /* =========================================================
       OBTENER RUTA DE EVOLUCIÓN
    ========================================================= */

    function isBaby(digimon) {

        if (!digimon) {
            return false;
        }

        const stage = String(digimon.etapa || '')
            .toLowerCase()
            .trim();

        return stage === 'bebe i' ||
               stage === 'bebe ii' ||
               stage === 'baby i' ||
               stage === 'baby ii' ||
               stage === 'in-training i' ||
               stage === 'in-training ii';

    }


    function getEvolutionList(digimon) {

        if (isBaby(digimon)) {
            return digimon.evoluciones || [];
        }

        return digimon[currentType] || [];

    }



    /* =========================================================
       RENDER EVOLUCIONES
    ========================================================= */

    function renderEvolutions() {

        const digimon = getDigimon(currentDigimon);

        if (!digimon) {
            return;
        }

        const baby = isBaby(digimon);
        const evolutionList = getEvolutionList(digimon);

        typeDescription.innerHTML = baby
            ? 'Los Digimon Bebe I y Bebe II no tienen atributo. Su evolución utiliza una <strong>ruta de crecimiento independiente</strong>.'
            : TYPE_INFO[currentType].descripcion;

        evolutionGrid.innerHTML = '';

        if (!evolutionList.length) {

            const empty = document.createElement('div');
            empty.className = 'indievolution-empty';
            empty.innerHTML = `
                <div class="empty-icon">◈</div>
                <div>No hay evoluciones configuradas para ${digimon.nombre} en esta ruta.</div>
            `;
            evolutionGrid.appendChild(empty);
            return;

        }

        evolutionList.forEach((evolutionSlug, index) => {

            const evolution = getDigimon(evolutionSlug);

            if (!evolution) {
                return;
            }

            const card = document.createElement('article');
            card.className = 'evolution-card';
            card.dataset.slug = evolutionSlug;

            card.innerHTML = `
                <div class="evolution-number">
                    ${baby ? 'EVOLUCIÓN' : 'EVOLUCIÓN'} ${String(index + 1).padStart(2, '0')}
                </div>
                <div class="evolution-image"></div>
                <div class="evolution-name">${evolution.nombre}</div>
                <div class="evolution-stage">${evolution.etapa || 'Sin etapa'}</div>
            `;

            createImage(
                card.querySelector('.evolution-image'),
                evolution
            );

            card.addEventListener('click', () => {
                selectDigimon(evolutionSlug);
            });

            evolutionGrid.appendChild(card);

        });

    }


    /* =========================================================
       RENDER INDIGIEVOLUCIONES
    ========================================================= */

    function renderIndievolutions() {

        const digimon =
            getDigimon(currentDigimon);


        if (!digimon) {
            return;
        }


        indievolutionGrid.innerHTML = "";


        indievolutionTarget.textContent =
            digimon.nombre;


        const previousList =
            getIndievolutions(currentDigimon);


        if (previousList.length === 0) {

            const empty =
                document.createElement("div");


            empty.className =
                "indievolution-empty";


            empty.innerHTML = `

                <div class="empty-icon">
                    ◈
                </div>

                <div>
                    No hay indigievoluciones configuradas
                    para ${digimon.nombre}.
                </div>

            `;


            indievolutionGrid.appendChild(
                empty
            );


            return;

        }


        previousList.forEach(
            (previous, index) => {

                const card =
                    document.createElement("article");


                card.className =
                    "evolution-card indievolution-card";


                card.dataset.slug =
                    previous.slug;


                card.innerHTML = `

                    <div class="evolution-number">
                        INDIGIEVOLUCIÓN ${String(index + 1).padStart(2, "0")}
                    </div>

                    <div class="evolution-image">
                    </div>

                    <div class="evolution-name">
                        ${previous.nombre}
                    </div>

                    <div class="evolution-stage">
                        ${previous.etapa}
                    </div>

                `;


                const imageContainer =
                    card.querySelector(
                        ".evolution-image"
                    );


                createImage(
                    imageContainer,
                    previous
                );


                card.addEventListener(
                    "click",
                    () => {

                        selectDigimon(
                            previous.slug
                        );

                    }
                );


                indievolutionGrid.appendChild(
                    card
                );

            }
        );

    }



    /* =========================================================
       HISTORIAL
    ========================================================= */

    function renderHistory() {

        historyElement.innerHTML = "";


        const label =
            document.createElement("span");


        label.className =
            "history-label";


        label.textContent =
            "RUTA:";


        historyElement.appendChild(
            label
        );


        history.forEach(
            (slug, index) => {

                const digimon =
                    getDigimon(slug);


                if (!digimon) {
                    return;
                }


                if (index > 0) {

                    const arrow =
                        document.createElement("span");


                    arrow.className =
                        "history-arrow";


                    arrow.textContent =
                        "›";


                    historyElement.appendChild(
                        arrow
                    );

                }


                const item =
                    document.createElement("button");


                item.className =
                    "history-item";


                item.textContent =
                    digimon.nombre;


                item.addEventListener(
                    "click",
                    () => {

                        const historyIndex =
                            history.indexOf(slug);


                        if (
                            historyIndex >= 0
                        ) {

                            history =
                                history.slice(
                                    0,
                                    historyIndex
                                );

                        }


                        selectDigimon(
                            slug,
                            false
                        );

                    }
                );


                historyElement.appendChild(
                    item
                );

            }
        );


        const current =
            getDigimon(currentDigimon);


        if (history.length > 0) {

            const arrow =
                document.createElement("span");


            arrow.className =
                "history-arrow";


            arrow.textContent =
                "›";


            historyElement.appendChild(
                arrow
            );

        }


        const currentItem =
            document.createElement("span");


        currentItem.className =
            "history-item";


        currentItem.style.borderColor =
            "var(--cyan)";


        currentItem.style.color =
            "var(--cyan)";


        currentItem.textContent =
            current
                ? current.nombre
                : "-";


        historyElement.appendChild(
            currentItem
        );

    }



    /* =========================================================
       SUGERENCIAS
    ========================================================= */

    function showSuggestions(query) {

        const cleanQuery =
            query
                .trim()
                .toLowerCase();


        if (!cleanQuery) {

            suggestions.classList.remove(
                "active"
            );

            return;

        }


        const results =
            getAllDigimon()
                .filter(digimon =>
                    digimon.nombre
                        .toLowerCase()
                        .includes(cleanQuery)
                )
                .slice(0, 6);


        suggestions.innerHTML = "";


        if (!results.length) {

            suggestions.innerHTML = `

                <div class="suggestion">

                    <div>
                        No se encontró ningún Digimon.
                    </div>

                </div>

            `;

            suggestions.classList.add(
                "active"
            );

            return;

        }


        results.forEach(
            digimon => {

                const item =
                    document.createElement("div");


                item.className =
                    "suggestion";


                item.innerHTML = `

                    <div class="suggestion-image">

                        ${
                            digimon.imagen

                            ?

                            `<img
                                src="${digimon.imagen}"
                                alt="${digimon.nombre}"
                                style="width:100%;height:100%;object-fit:contain;"
                            >`

                            :

                            `◈`
                        }

                    </div>

                    <div>

                        <div class="suggestion-name">
                            ${digimon.nombre}
                        </div>

                        <div class="suggestion-stage">
                            ${digimon.etapa}
                        </div>

                    </div>

                `;


                item.addEventListener(
                    "click",
                    () => {

                        selectDigimon(
                            digimon.slug
                        );

                    }
                );


                suggestions.appendChild(
                    item
                );

            }
        );


        suggestions.classList.add(
            "active"
        );

    }



    /* =========================================================
       BUSCAR DESDE INPUT PRINCIPAL
    ========================================================= */

    function performMainSearch() {

        const query =
            mainSearch.value
                .trim()
                .toLowerCase();


        if (!query) {

            showToast(
                "Escribe el nombre de un Digimon."
            );

            return;

        }


        const result =
            getAllDigimon().find(
                digimon =>
                    digimon.nombre
                        .toLowerCase() === query
            );


        if (result) {

            selectDigimon(
                result.slug
            );

            return;

        }


        const partial =
            getAllDigimon().find(
                digimon =>
                    digimon.nombre
                        .toLowerCase()
                        .includes(query)
            );


        if (partial) {

            selectDigimon(
                partial.slug
            );

            return;

        }


        showToast(
            "No se encontró ese Digimon."
        );

    }



    /* =========================================================
       MODAL DE BÚSQUEDA
    ========================================================= */

    function openSearchModal() {

        searchModal.classList.add(
            "active"
        );


        modalSearch.value =
            "";


        renderModalResults("");


        setTimeout(
            () => {
                modalSearch.focus();
            },
            50
        );

    }



    function closeSearchModal() {

        searchModal.classList.remove(
            "active"
        );

    }



    /* =========================================================
       RESULTADOS DEL MODAL
    ========================================================= */

    function renderModalResults(query) {

        const cleanQuery =
            query
                .trim()
                .toLowerCase();


        let results =
            getAllDigimon();


        if (cleanQuery) {

            results =
                results.filter(
                    digimon =>
                        digimon.nombre
                            .toLowerCase()
                            .includes(cleanQuery)
                );

        }


        modalResults.innerHTML = "";


        if (!results.length) {

            modalResults.innerHTML = `

                <div class="modal-result">

                    <div>
                        No se encontraron resultados.
                    </div>

                </div>

            `;

            return;

        }


        results.forEach(
            digimon => {

                const item =
                    document.createElement("div");


                item.className =
                    "modal-result";


                item.innerHTML = `

                    <img
                        src="${digimon.imagen || ""}"
                        alt="${digimon.nombre}"
                        onerror="this.style.display='none'"
                    >

                    <div class="modal-result-info">

                        <div class="modal-result-name">
                            ${digimon.nombre}
                        </div>

                        <div class="modal-result-meta">
                            ${digimon.etapa || "—"}
                            ·
                            ${digimon.atributo || "Sin atributo"}
                        </div>

                    </div>

                `;


                item.addEventListener(
                    "click",
                    () => {

                        selectDigimon(
                            digimon.slug
                        );

                        closeSearchModal();

                    }
                );


                modalResults.appendChild(
                    item
                );

            }
        );

    }



    /* =========================================================
       TOAST
    ========================================================= */

    let toastTimer;


    function showToast(message) {

        toast.textContent =
            message;


        toast.classList.add(
            "show"
        );


        clearTimeout(
            toastTimer
        );


        toastTimer =
            setTimeout(
                () => {

                    toast.classList.remove(
                        "show"
                    );

                },
                2500
            );

    }



    /* =========================================================
       EVENTOS
    ========================================================= */


    document
        .querySelectorAll(".type-tab")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    setType(
                        button.dataset.type
                    );

                }
            );

        });



    mainSearch.addEventListener(
        "input",
        () => {

            showSuggestions(
                mainSearch.value
            );

        }
    );



    mainSearch.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                performMainSearch();

            }


            if (
                event.key === "Escape"
            ) {

                suggestions.classList.remove(
                    "active"
                );

            }

        }
    );



    document
        .getElementById("mainSearchButton")
        .addEventListener(
            "click",
            performMainSearch
        );



    document
        .getElementById("openSearch")
        .addEventListener(
            "click",
            openSearchModal
        );



    document
        .getElementById("closeSearch")
        .addEventListener(
            "click",
            closeSearchModal
        );



    modalSearch.addEventListener(
        "input",
        () => {

            renderModalResults(
                modalSearch.value
            );

        }
    );



    searchModal.addEventListener(
        "click",
        event => {

            if (
                event.target === searchModal
            ) {

                closeSearchModal();

            }

        }
    );



    document.addEventListener(
        "keydown",
        event => {

            /*
             * Pulsar "/" abre el buscador
             */

            if (
                event.key === "/" &&
                document.activeElement.tagName !== "INPUT"
            ) {

                event.preventDefault();

                openSearchModal();

            }


            /*
             * ESC cierra ventanas
             */

            if (
                event.key === "Escape"
            ) {

                closeSearchModal();

                suggestions.classList.remove(
                    "active"
                );

            }

        }
    );



    document.addEventListener(
        "click",
        event => {

            if (
                !event.target.closest(
                    ".search-box"
                )
            ) {

                suggestions.classList.remove(
                    "active"
                );

            }

        }
    );



    /* =========================================================
       INICIALIZACIÓN
    ========================================================= */

    selectDigimon(
        "patamon",
        false
    );
