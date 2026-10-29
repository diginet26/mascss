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
                digitama: {
                    nombre: "DIGITAMA",
                    etapa: "Digitama",
                    atributo: "Sin atributo",
                    imagen: "https://wikimon.net/images/c/c6/Digitama_ver1_vpet_dmc.gif",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["botamon", "yuramon", "yukimibotamon", "poyomon", "zuromon", "bubbmon", "pyonmon", "choromon", "tsubumon", "mokumon", "punimon", "popomon", "pitchmon", "nyokimon", "cocomon", "puwamon", "petitmon", "curimon", "jyarimon", "pururumon", "keemon", "yolkmon", "puyomon", "leafmon", "dokimon", "paomon", "relemon", "ketomon", "sunamon", "zerimon", "chicomon", "pusumon"]
                },
                botamon: {
                    nombre: "BOTAMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/g13Skzq.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["koromon", "pagumon", "wanyamon", "pinamon"]
                },
                yuramon: {
                    nombre: "YURAMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/IYUscJb.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["koromon", "budmon", "tanemon"]
                },
                yukimibotamon: {
                    nombre: "YUKIMIBOTAMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/29GlERp.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["nyaromon", "tunomon", "moonmon", "hiyarimon"]
                },
                poyomon: {
                    nombre: "POYOMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/6q8JD6d.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["nyaromon", "tokomon", "pukamon", "gummymon"]
                },
                zuromon: {
                    nombre: "ZURUMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/cLnJuKL.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["pagumon"]
                },
                bubbmon: {
                    nombre: "BUBBMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/mvUHZNJ.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["tanemon", "mochimon", "pyocomon"]
                },
                pyonmon: {
                    nombre: "PYONMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/2Vg8wxR.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["bosamon"]
                },
                choromon: {
                    nombre: "CHOROMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/31sWMgB.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["mochimon", "caprimon"]
                },
                tsubumon: {
                    nombre: "TSUBUMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/BVbyFSf.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["upamon", "tokomon"]
                },
                mokumon: {
                    nombre: "MOKUMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/t5wtXMa.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["petimeramon", "caprimon", "sunmon", "yarmon"]
                },
                punimon: {
                    nombre: "PUNIMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/T3i4olB.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["petimeramon", "tunomon"]
                },
                popomon: {
                    nombre: "POPOMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/yvfGHOS.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["wanyamon", "frimon"]
                },
                pitchmon: {
                    nombre: "PITCHMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/ZWlXKBk.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["pukamon"]
                },
                nyokimon: {
                    nombre: "NYOKIMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/iuluQ3p.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["pyocomon", "budmon"]
                },
                cocomon: {
                    nombre: "COCOMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/LxsADdV.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["chocomon"]
                },
                puwamon: {
                    nombre: "PUWAMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/gSZqOGc.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["pinamon"]
                },
                petitmon: {
                    nombre: "PETITMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/wxdatJX.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["babydmon"]
                },
                curimon: {
                    nombre: "CURIMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/yhDfLUT.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["gurimon"]
                },
                jyarimon: {
                    nombre: "JYARIMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/5u0Mprh.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["gigimon"]
                },
                pururumon: {
                    nombre: "PURURUMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/SeA855e.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["poromon"]
                },
                keemon: {
                    nombre: "KEEMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/u3qprzU.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["yarmon"]
                },
                yolkmon: {
                    nombre: "YOLKMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/H4y0uZG.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["chicchimon"]
                },
                puyomon: {
                    nombre: "PUYOMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/G5FmafP.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["puyoyomon"]
                },
                leafmon: {
                    nombre: "LEAFMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/3Catezj.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["minomon"]
                },
                dokimon: {
                    nombre: "DOKIMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/LiQG3ng.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["bibimon"]
                },
                paomon: {
                    nombre: "PAOMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/5DGvExc.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["xiaomon"]
                },
                relemon: {
                    nombre: "RELEMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/ZxT8GkC.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["moonmon", "pokomon"]
                },
                ketomon: {
                    nombre: "KETOMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/Y7YE3wX.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["hopmon"]
                },
                sunamon: {
                    nombre: "SUNAMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/edjT6h3.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["goromon"]
                },
                zerimon: {
                    nombre: "ZERIMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/0oGOok5.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["gummymon"]
                },
                chicomon: {
                    nombre: "CHICOMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/ONkQx3S.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["chibimon"]
                },
                pusumon: {
                    nombre: "PUSUMON",
                    etapa: "Fresh",
                    atributo: "Sin atributo",
                    imagen: "https://imgur.com/Itc1Klh.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: ["pusurimon"]
                },
                koromon: {
                    nombre: "KOROMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/uAhKb28.png",
                    datos: ["dracomon", "huckmon"],
                    vacuna: ["agumon", "toyagumon", "vmon", "yukiagumon"],
                    virus: ["betamon", "guilmon"],
                    sinatributo: []
                },
                nyaromon: {
                    nombre: "NYAROMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/49hdzgJ.png",
                    datos: ["gabumon", "gottsumon", "lunamon"],
                    vacuna: ["agumon", "bearmon", "plotmon", "terriermon"],
                    virus: ["tinkermon"],
                    sinatributo: []
                },
                plotmon: {
                    nombre: "PLOTMON",
                    etapa: "Rookie",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/HzldLAO.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                pagumon: {
                    nombre: "PAGUMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/hiGeyhx.png",
                    datos: ["lopmon"],
                    vacuna: [],
                    virus: ["blackagumon", "gazimon", "goburimon", "gizamon", "impmon", "picodevimon", "tukaimon"],
                    sinatributo: []
                },
                tanemon: {
                    nombre: "TANEMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/PyM6Ek8.png",
                    datos: ["alraumon", "floramon", "lalamon", "palmon", "renamon"],
                    vacuna: ["piyomon"],
                    virus: ["mushmon"],
                    sinatributo: []
                },
                bosamon: {
                    nombre: "BOSAMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/K9GZol5.png",
                    datos: [],
                    vacuna: ["angoramon"],
                    virus: [],
                    sinatributo: []
                },
                mochimon: {
                    nombre: "MOCHIMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/obg32d8.png",
                    datos: ["gottsumon", "huckmon"],
                    vacuna: ["angoramon", "solarmon", "tentomon"],
                    virus: ["hagurumon", "kunemon", "otamamon"],
                    sinatributo: []
                },
                upamon: {
                    nombre: "UPAMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/WLZmRkc.png",
                    datos: ["sangomon", "patamon"],
                    vacuna: ["armadimon"],
                    virus: [],
                    sinatributo: []
                },
                tokomon: {
                    nombre: "TOKOMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/muDvQxC,png",
                    datos: ["hawkmon", "patamon"],
                    vacuna: ["armadimon", "bakumon", "falcomon", "sistermonblanc"],
                    virus: ["kunemon", "tukaimon"],
                    sinatributo: []
                },
                petimeramon: {
                    nombre: "PETIMERAMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/l6sYprZ.png",
                    datos: ["candmon"],
                    vacuna: ["bakumon", "coronamon"],
                    virus: ["picodevimon"],
                    sinatributo: []
                },
                wanyamon: {
                    nombre: "WANYAMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/TAFCtC7.png",
                    datos: ["gaomon"],
                    vacuna: ["bearmon", "kudamon", "plotmon"],
                    virus: [],
                    sinatributo: []
                },
                pukamon: {
                    nombre: "PUKAMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/oheyX4u.png",
                    datos: ["jellymon", "sangomon"],
                    vacuna: ["gomamon", "penmon"],
                    virus: ["betamon", "otamamon", "shakomon"],
                    sinatributo: []
                },
                pyocomon: {
                    nombre: "PYOCOMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/ecqmKOR.png",
                    datos: ["elecmon", "floramon", "palmon"],
                    vacuna: ["piyomon", "cutemon", "hyokomon"],
                    virus: ["wormmon","mushmon"],
                    sinatributo: []
                },
                caprimon: {
                    nombre: "CAPRIMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/7b6dqWG.png",
                    datos: ["kokuwamon", "kotemon"],
                    vacuna: ["toyagumon"],
                    virus: ["hagurumon"],
                    sinatributo: []
                },
                budmon: {
                    nombre: "BUDMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/O5rUwOn.png",
                    datos: ["kotemon", "lalamon"],
                    vacuna: ["gomamon"],
                    virus: [],
                    sinatributo: []
                },
                chocomon: {
                    nombre: "CHOCOMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/SlpKQ3e.png",
                    datos: ["lopmon"],
                    vacuna: [],
                    virus: ["blacktoyagumon", "shamamon"],
                    sinatributo: []
                },
                pinamon: {
                    nombre: "PINAMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/gK2wira.png",
                    datos: ["candmon"],
                    vacuna: ["falcomon"],
                    virus: [],
                    sinatributo: []
                },
                sunmon: {
                    nombre: "SUNMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/bw2i9f5.png",
                    datos: [],
                    vacuna: ["coronamon"],
                    virus: [],
                    sinatributo: []
                },
                babydmon: {
                    nombre: "BABYDMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/JsUpGDv.png",
                    datos: ["dracomon"],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                tunomon: {
                    nombre: "TUNOMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/kIIwBh0.png",
                    datos: ["elecmon", "gabumon", "gaomon", "psychemon"],
                    vacuna: ["gumdramon", "monodramon"],
                    virus: ["blackgabumon", "goburimon"],
                    sinatributo: []
                },
                gurimon: {
                    nombre: "GURIMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/fWQSD7h.png",
                    datos: [],
                    vacuna: [],
                    virus: ["gammamon"],
                    sinatributo: []
                },
                gigimon: {
                    nombre: "GIGIMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/x7SoXhW.png",
                    datos: [],
                    vacuna: ["solarmon"],
                    virus: ["guilmon"],
                    sinatributo: []
                },
                poromon: {
                    nombre: "POROMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/QKyPqTX.png",
                    datos: ["hawkmon"],
                    vacuna: [],
                    virus: ["tinkermon"],
                    sinatributo: []
                },
                pusurimon: {
                    nombre: "PUSURIMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/cuKknqU.png",
                    datos: ["herissmon"],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                yarmon: {
                    nombre: "YARMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/orxbTvD.png",
                    datos: ["herissmon"],
                    vacuna: [],
                    virus: ["impmon"],
                    sinatributo: []
                },
                chicchimon: {
                    nombre: "CHICCHIMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/dFyGaDA.png",
                    datos: [],
                    vacuna: ["hyokomon"],
                    virus: [],
                    sinatributo: []
                },
                puyoyomon: {
                    nombre: "PUYOYOMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/xwfuf1f.png",
                    datos: ["jellymon"],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                minomon: {
                    nombre: "MINOMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/YeUrpbW.png",
                    datos: ["kokuwamon"],
                    vacuna: ["tentomon"],
                    virus: ["wormmon"],
                    sinatributo: []
                },
                bibimon: {
                    nombre: "BIBIMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/SjthmQM.png",
                    datos: [],
                    vacuna: ["kudamon", "pulsemon"],
                    virus: [],
                    sinatributo: []
                },
                xiaomon: {
                    nombre: "XIAOMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/1vm7eVO.png",
                    datos: [],
                    vacuna: ["labramon"],
                    virus: [],
                    sinatributo: []
                },
                frimon: {
                    nombre: "FRIMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/HnKqNc7.png",
                    datos: [],
                    vacuna: ["liollmon"],
                    virus: [],
                    sinatributo: []
                },
                moonmon: {
                    nombre: "MOONMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/erxHoql.png",
                    datos: ["lunamon"],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                hopmon: {
                    nombre: "HOPMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/jVyOnyi.png",
                    datos: [],
                    vacuna: ["monodramon"],
                    virus: [],
                    sinatributo: []
                },
                hiyarimon: {
                    nombre: "HIYARIMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/WcudMsS.png",
                    datos: [],
                    vacuna: ["penmon"],
                    virus: ["snowgoburimon"],
                    sinatributo: []
                },
                pokomon: {
                    nombre: "POKOMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/qI11ef5.png",
                    datos: ["renamon"],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                goromon: {
                    nombre: "GOROMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/jO83Vsz.png",
                    datos: [],
                    vacuna: [],
                    virus: ["sunarizamon"],
                    sinatributo: []
                },
                gummymon: {
                    nombre: "GUMMYMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/mH86WxO.png",
                    datos: [],
                    vacuna: ["terriermon"],
                    virus: [],
                    sinatributo: []
                },
                chibimon: {
                    nombre: "CHIBIMON",
                    etapa: "Baby",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/J1YeSmA.png",
                    datos: [],
                    vacuna: ["vmon"],
                    virus: [],
                    sinatributo: []
                },
                agumon: {
                    nombre: "AGUMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/ec0mDwU.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                blackagumon: {
                    nombre: "BLACKAGUMON",
                    etapa: "Rookie",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/fQKpKdf.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                alraumon: {
                    nombre: "ALRAUMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/kpYtmri.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                angoramon: {
                    nombre: "ANGORAMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/WkxSHvE.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                armadimon: {
                    nombre: "ARMADIMON",
                    etapa: "Rookie",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/ChZ2uSV.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                bakumon: {
                    nombre: "BAKUMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/CEwOcHU.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                bearmon: {
                    nombre: "BEARMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/qv4c5YH.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                betamon: {
                    nombre: "BETAMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/2DRru0c.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                piyomon: {
                    nombre: "PIYOMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/lwWiGYa.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                blacktoyagumon: {
                    nombre: "BLACKTOYAGUMON",
                    etapa: "Rookie",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/RRznHLG.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                candmon: {
                    nombre: "CANDMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/nv5F94h.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                coronamon: {
                    nombre: "CORONAMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/JnjwiRj.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                cutemon: {
                    nombre: "CUTEMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/fFkTnk8.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                dracomon: {
                    nombre: "DRACOMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/1fzodlu.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                elecmon: {
                    nombre: "ELECMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/LYF1IZi.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                falcomon: {
                    nombre: "FALCOMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/IeTvgh5.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                floramon: {
                    nombre: "FLORAMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/yUFhQgY.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                gabumon: {
                    nombre: "GABUMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/FILoVqY.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                blackgabumon: {
                    nombre: "BLACKGABUMON",
                    etapa: "Rookie",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/wb0G4G0.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                gammamon: {
                    nombre: "GAMMAMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/EvPvi7h.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                gaomon: {
                    nombre: "GAOMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/xJL42uB.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                gazimon: {
                    nombre: "GAZIMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/WmIEkSV.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                gizamon: {
                    nombre: "GIZAMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/EtJmjhb.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                goburimon: {
                    nombre: "GOBURIMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/zpJcsiE.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                gomamon: {
                    nombre: "GOMAMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/V8M7zg5.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                gottsumon: {
                    nombre: "GOTTSUMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/6KKwp9V.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                guilmon: {
                    nombre: "GUILMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/AwHkS9G.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                gumdramon: {
                    nombre: "GUMDRAMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/lXr5M8J.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                hagurumon: {
                    nombre: "HAGURUMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/PGiLYua.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                hawkmon: {
                    nombre: "HAWKMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/XJeOxfu.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                herissmon: {
                    nombre: "HERISSMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/Hd301XP.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                huckmon: {
                    nombre: "HUCKMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/GClFPPC.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                hyokomon: {
                    nombre: "HYOKOMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/37sYd4m.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                impmon: {
                    nombre: "IMPMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/UKi4sDo.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                jellymon: {
                    nombre: "JELLYMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/Xu5pamI.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                kokuwamon: {
                    nombre: "KOKUWAMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/q5rQZkX.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                kotemon: {
                    nombre: "KOTEMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/qayhKam.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                kudamon: {
                    nombre: "KUDAMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/Z319Wut.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                kunemon: {
                    nombre: "KUNEMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/fuzPsaf.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                labramon: {
                    nombre: "LABRAMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/IaRNl8r.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                lalamon: {
                    nombre: "LALAMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/sxqh1Ac.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                liollmon: {
                    nombre: "LIOLLMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/37CFIQF.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                lopmon: {
                    nombre: "LOPMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/9N9cR4L.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                lunamon: {
                    nombre: "LUNAMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/mdkQlxF.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                monodramon: {
                    nombre: "MONODRAMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/dgatNSU.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                otamamon: {
                    nombre: "OTAMAMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/YxQ21Pw.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                palmon: {
                    nombre: "PALMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/Ktc9mfR.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                patamon: {
                    nombre: "PATAMON",
                    etapa: "Rookie",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/eP1SBVY.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                penmon: {
                    nombre: "PENMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/lJWbFFH.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                picodevimon: {
                    nombre: "PICODEVIMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/ocg4MXy.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                psychemon: {
                    nombre: "PSYCHEMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/6cjjos9.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                pulsemon: {
                    nombre: "PULSEMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/fAJoiFG.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                renamon: {
                    nombre: "RENAMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/5tA37lY.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                Plotmon: {
                    nombre: "PLOTMON",
                    etapa: "Rookie",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/piyC4fR.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                sangomon: {
                    nombre: "SANGOMON",
                    etapa: "Rookie",
                    atributo: "Datos",
                    imagen: "https://imgur.com/FbGSy1T.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                shakomon: {
                    nombre: "SHAKOMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/SPzDYxE.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                shamamon: {
                    nombre: "SHAMAMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/CI3E3w0.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                sistermonblanc: {
                    nombre: "SISTERMON BLANC",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/YNfRzn4.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                snowgoburimon: {
                    nombre: "SNOWGOBURIMON",
                    etapa: "Rookie",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/dfjUm2X.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                solarmon: {
                    nombre: "SOLARMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/4J2FoxH.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                sunarizamon: {
                    nombre: "SUNARIZAMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/pe7PyW3.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                tentomon: {
                    nombre: "TENTOMON",
                    etapa: "Rookie",
                    atributo: "Sin definir",
                    imagen: "https://imgur.com/hiQYwFE.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                terriermon: {
                    nombre: "TERRIERMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/hU1nwnW.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                tinkermon: {
                    nombre: "TINKERMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/JUDrAWf.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                toyagumon: {
                    nombre: "TOYAGUMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/WlrORzz.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                tukaimon: {
                    nombre: "TUKAIMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/RSwECDR.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                vmon: {
                    nombre: "V-MON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/Ms3bWvy.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                wormmon: {
                    nombre: "WORMMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/LFfEaZB.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                yukiagumon: {
                    nombre: "YUKIAGUMON",
                    etapa: "Rookie",
                    atributo: "Vacuna",
                    imagen: "https://imgur.com/VT3WCi7.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
                mushmon: {
                    nombre: "MUSHMON",
                    etapa: "Rookie",
                    atributo: "Virus",
                    imagen: "https://imgur.com/L2yxnHV.png",
                    datos: [],
                    vacuna: [],
                    virus: [],
                    sinatributo: []
                },
            };
            const TYPE_INFO = {
                datos: {
                    nombre: "DATOS",
                    descripcion: "Ruta de evolución asociada al atributo <strong>Datos</strong>."
                },
                vacuna: {
                    nombre: "VACUNA",
                    descripcion: "Ruta de evolución asociada al atributo <strong>Vacuna</strong>."
                },
                virus: {
                    nombre: "VIRUS",
                    descripcion: "Ruta de evolución asociada al atributo <strong>Virus</strong>."
                },
                sinatributo: {
                    nombre: "SIN ATRIBUTO",
                    descripcion: "Ruta de evolución para Digimon <strong>sin atributo</strong>."
                }
            };
            /* =========================================================
               ESTADO
            ========================================================= */
            let currentDigimon = "digitama";
            let currentType = "datos";
            let history = [];
            /* =========================================================
               ELEMENTOS HTML
            ========================================================= */
            const selectedName = document.getElementById("selectedName");
            const selectedImage = document.getElementById("selectedImage");
            const selectedPlaceholder = document.getElementById("selectedPlaceholder");
            const selectedMeta = document.getElementById("selectedMeta");
            const evolutionGrid = document.getElementById("evolutionGrid");
            const indievolutionGrid = document.getElementById("indievolutionGrid");
            const indievolutionTarget = document.getElementById("indievolutionTarget");
            const typeDescription = document.getElementById("typeDescription");
            const mainSearch = document.getElementById("mainSearch");
            const suggestions = document.getElementById("suggestions");
            const historyElement = document.getElementById("history");
            const searchModal = document.getElementById("searchModal");
            const modalSearch = document.getElementById("modalSearch");
            const modalResults = document.getElementById("modalResults");
            const toast = document.getElementById("toast");
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
               rutas: Datos, Vacuna, Virus o Sin atributo.
            ========================================================= */
            function getIndievolutions(slug) {
                const previousDigimon = [];
                Object.entries(DIGIMON_DATABASE).forEach(([sourceSlug, digimon]) => {
                    const routes = [
                        ...(digimon.datos || []),
                        ...(digimon.vacuna || []),
                        ...(digimon.virus || []),
                        ...(digimon.sinatributo || []),
                        ...(digimon.evoluciones || [])
                    ];
                    if (routes.includes(slug) &&
                        sourceSlug !== slug) {
                        previousDigimon.push({
                            slug: sourceSlug,
                            ...digimon
                        });
                    }
                });
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
                            loading="lazy"
                            onerror="this.onerror=null; this.src='https://wikimon.net/Special:Redirect/file/${encodeURIComponent(digimon.nombre.replace(/ /g, '_'))}.png';"
                        >
                    `;
            }
            /* =========================================================
               SELECCIONAR DIGIMON
            ========================================================= */
            function selectDigimon(slug, addToHistory = true) {
                const digimon = getDigimon(slug);
                if (!digimon) {
                    showToast("Ese Digimon no existe en la base de datos.");
                    return;
                }
                if (addToHistory) {
                    if (currentDigimon &&
                        currentDigimon !== slug) {
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
                const digimon = getDigimon(currentDigimon);
                if (!digimon) {
                    return;
                }
                selectedName.textContent =
                    digimon.nombre;
                selectedMeta.innerHTML = `

                        <div class="badge">
                            ETAPA: ${digimon.etapa}
                        </div>

                        <div class="badge">
                            ATRIBUTO: ${digimon.atributo}
                        </div>

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
                }
                else {
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
                document
                    .querySelectorAll(".type-tab")
                    .forEach(button => {
                    button.classList.toggle("active", button.dataset.type === currentType);
                });
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
               RENDER EVOLUCIONES
            ========================================================= */
            function renderEvolutions() {
                const digimon = getDigimon(currentDigimon);
                if (!digimon) {
                    return;
                }
                typeDescription.innerHTML =
                    TYPE_INFO[currentType].descripcion;
                const evolutionList = digimon[currentType] || [];
                evolutionGrid.innerHTML = "";
                /*
                   Los Rookie mantienen siempre 4 huecos por atributo,
                   incluso cuando todavía no tienen evoluciones configuradas.
                   Las etapas anteriores muestran todas las rutas disponibles.
                */
                const evolutionSlots = digimon.etapa === "Rookie"
                    ? 4
                    : evolutionList.length;
                for (let i = 0; i < evolutionSlots; i++) {
                    const evolutionSlug = evolutionList[i];
                    if (evolutionSlug &&
                        getDigimon(evolutionSlug)) {
                        const evolution = getDigimon(evolutionSlug);
                        const card = document.createElement("article");
                        card.className =
                            "evolution-card";
                        card.dataset.slug =
                            evolutionSlug;
                        card.innerHTML = `

                                <div class="evolution-number">
                                    EVOLUCIÓN ${String(i + 1).padStart(2, "0")}
                                </div>

                                <div class="evolution-image">
                                </div>

                                <div class="evolution-name">
                                    ${evolution.nombre}
                                </div>

                                <div class="evolution-stage">
                                    ${evolution.etapa}
                                </div>

                            `;
                        const imageContainer = card.querySelector(".evolution-image");
                        createImage(imageContainer, evolution);
                        card.addEventListener("click", () => {
                            selectDigimon(evolutionSlug);
                        });
                        evolutionGrid.appendChild(card);
                    }
                    else {
                        const card = document.createElement("article");
                        card.className =
                            "evolution-card empty";
                        card.innerHTML = `

                                <div class="evolution-number">
                                    EVOLUCIÓN ${String(i + 1).padStart(2, "0")}
                                </div>

                                <div class="evolution-image">
                                    <div class="empty-icon">
                                        +
                                    </div>
                                </div>

                                <div class="evolution-name">
                                    Espacio disponible
                                </div>

                                <div class="evolution-stage">
                                    Sin evolución configurada
                                </div>

                            `;
                        evolutionGrid.appendChild(card);
                    }
                }
            }
            /* =========================================================
               RENDER INDIGIEVOLUCIONES
            ========================================================= */
            function renderIndievolutions() {
                const digimon = getDigimon(currentDigimon);
                if (!digimon) {
                    return;
                }
                indievolutionGrid.innerHTML = "";
                indievolutionTarget.textContent =
                    digimon.nombre;
                const previousList = getIndievolutions(currentDigimon);
                if (previousList.length === 0) {
                    const empty = document.createElement("div");
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
                    indievolutionGrid.appendChild(empty);
                    return;
                }
                previousList.forEach((previous, index) => {
                    const card = document.createElement("article");
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
                    const imageContainer = card.querySelector(".evolution-image");
                    createImage(imageContainer, previous);
                    card.addEventListener("click", () => {
                        selectDigimon(previous.slug);
                    });
                    indievolutionGrid.appendChild(card);
                });
            }
            /* =========================================================
               HISTORIAL
            ========================================================= */
            function renderHistory() {
                historyElement.innerHTML = "";
                const label = document.createElement("span");
                label.className =
                    "history-label";
                label.textContent =
                    "RUTA:";
                historyElement.appendChild(label);
                history.forEach((slug, index) => {
                    const digimon = getDigimon(slug);
                    if (!digimon) {
                        return;
                    }
                    if (index > 0) {
                        const arrow = document.createElement("span");
                        arrow.className =
                            "history-arrow";
                        arrow.textContent =
                            "›";
                        historyElement.appendChild(arrow);
                    }
                    const item = document.createElement("button");
                    item.className =
                        "history-item";
                    item.textContent =
                        digimon.nombre;
                    item.addEventListener("click", () => {
                        const historyIndex = history.indexOf(slug);
                        if (historyIndex >= 0) {
                            history =
                                history.slice(0, historyIndex);
                        }
                        selectDigimon(slug, false);
                    });
                    historyElement.appendChild(item);
                });
                const current = getDigimon(currentDigimon);
                if (history.length > 0) {
                    const arrow = document.createElement("span");
                    arrow.className =
                        "history-arrow";
                    arrow.textContent =
                        "›";
                    historyElement.appendChild(arrow);
                }
                const currentItem = document.createElement("span");
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
                historyElement.appendChild(currentItem);
            }
            /* =========================================================
               SUGERENCIAS
            ========================================================= */
            function showSuggestions(query) {
                const cleanQuery = query
                    .trim()
                    .toLowerCase();
                if (!cleanQuery) {
                    suggestions.classList.remove("active");
                    return;
                }
                const results = getAllDigimon()
                    .filter(digimon => digimon.nombre
                    .toLowerCase()
                    .includes(cleanQuery))
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
                    suggestions.classList.add("active");
                    return;
                }
                results.forEach(digimon => {
                    const item = document.createElement("div");
                    item.className =
                        "suggestion";
                    item.innerHTML = `

                                <div class="suggestion-image">

                                    ${digimon.imagen
                        ?
                            `<img
                                            src="${digimon.imagen}"
                                            alt="${digimon.nombre}"
                                            style="width:100%;height:100%;object-fit:contain;"
                                        >`
                        :
                            `◈`}

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
                    item.addEventListener("click", () => {
                        selectDigimon(digimon.slug);
                    });
                    suggestions.appendChild(item);
                });
                suggestions.classList.add("active");
            }
            /* =========================================================
               BUSCAR DESDE INPUT PRINCIPAL
            ========================================================= */
            function performMainSearch() {
                const query = mainSearch.value
                    .trim()
                    .toLowerCase();
                if (!query) {
                    showToast("Escribe el nombre de un Digimon.");
                    return;
                }
                const result = getAllDigimon().find(digimon => digimon.nombre
                    .toLowerCase() === query);
                if (result) {
                    selectDigimon(result.slug);
                    return;
                }
                const partial = getAllDigimon().find(digimon => digimon.nombre
                    .toLowerCase()
                    .includes(query));
                if (partial) {
                    selectDigimon(partial.slug);
                    return;
                }
                showToast("No se encontró ese Digimon.");
            }
            /* =========================================================
               MODAL DE BÚSQUEDA
            ========================================================= */
            function openSearchModal() {
                searchModal.classList.add("active");
                modalSearch.value =
                    "";
                renderModalResults("");
                setTimeout(() => {
                    modalSearch.focus();
                }, 50);
            }
            function closeSearchModal() {
                searchModal.classList.remove("active");
            }
            /* =========================================================
               RESULTADOS DEL MODAL
            ========================================================= */
            function renderModalResults(query) {
                const cleanQuery = query
                    .trim()
                    .toLowerCase();
                let results = getAllDigimon();
                if (cleanQuery) {
                    results =
                        results.filter(digimon => digimon.nombre
                            .toLowerCase()
                            .includes(cleanQuery));
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
                results.forEach(digimon => {
                    const item = document.createElement("div");
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
                                        ${digimon.etapa}
                                        ·
                                        ${digimon.atributo}
                                    </div>

                                </div>

                            `;
                    item.addEventListener("click", () => {
                        selectDigimon(digimon.slug);
                        closeSearchModal();
                    });
                    modalResults.appendChild(item);
                });
            }
            /* =========================================================
               TOAST
            ========================================================= */
            let toastTimer;
            function showToast(message) {
                toast.textContent =
                    message;
                toast.classList.add("show");
                clearTimeout(toastTimer);
                toastTimer =
                    setTimeout(() => {
                        toast.classList.remove("show");
                    }, 2500);
            }
            /* =========================================================
               EVENTOS
            ========================================================= */
            document
                .querySelectorAll(".type-tab")
                .forEach(button => {
                button.addEventListener("click", () => {
                    setType(button.dataset.type);
                });
            });
            mainSearch.addEventListener("input", () => {
                showSuggestions(mainSearch.value);
            });
            mainSearch.addEventListener("keydown", event => {
                if (event.key === "Enter") {
                    performMainSearch();
                }
                if (event.key === "Escape") {
                    suggestions.classList.remove("active");
                }
            });
            document
                .getElementById("mainSearchButton")
                .addEventListener("click", performMainSearch);
            document
                .getElementById("openSearch")
                .addEventListener("click", openSearchModal);
            document
                .getElementById("closeSearch")
                .addEventListener("click", closeSearchModal);
            modalSearch.addEventListener("input", () => {
                renderModalResults(modalSearch.value);
            });
            searchModal.addEventListener("click", event => {
                if (event.target === searchModal) {
                    closeSearchModal();
                }
            });
            document.addEventListener("keydown", event => {
                /** Pulsar "/" abre el buscador*/
                if (event.key === "/" &&
                    document.activeElement.tagName !== "INPUT") {
                    event.preventDefault();
                    openSearchModal();
                }
                /*
                 * ESC cierra ventanas
                 */
                if (event.key === "Escape") {
                    closeSearchModal();
                    suggestions.classList.remove("active");
                }
            });
            document.addEventListener("click", event => {
                if (!event.target.closest(".search-box")) {
                    suggestions.classList.remove("active");
                }
            });
            /* =========================================================
               INICIALIZACIÓN
            ========================================================= */
            selectDigimon("digitama", false);
