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

===================================================== */
            /* =====================================================
               BOTAMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            botamon: {

                nombre: "Botamon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "koromon",
                    "pagumon",
                    "wanyamon",
                    "pinamon"
                ],

                                       datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               YURAMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            yuramon: {

                nombre: "Yuramon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "koromon",
                    "budmon",
                    "tanemon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               YUKIMIBOTAMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            yukimibotamon: {

                nombre: "Yukimibotamon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "nyaromon",
                    "tunomon",
                    "moonmon",
                    "hiyarimon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               POYOMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            poyomon: {

                nombre: "Poyomon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "nyaromon",
                    "tokomon",
                    "pukamon",
                    "gummymon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               ZUROMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            zuromon: {

                nombre: "Zuromon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "pagumon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               BUBBMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            bubbmon: {

                nombre: "Bubbmon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "tanemon",
                    "mochimon",
                    "pyocomon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PYONMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            pyonmon: {

                nombre: "Pyonmon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "bosamon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               CHOROMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            choromon: {

                nombre: "Choromon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "mochimon",
                    "caprimon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               TSUBUMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            tsubumon: {

                nombre: "Tsubumon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "upamon",
                    "tokomon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               MOKUMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            mokumon: {

                nombre: "Mokumon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "petimeramon",
                    "caprimon",
                    "sunmon",
                    "yarmon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PUNIMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            punimon: {

                nombre: "Punimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [  
                    "petimeramon",
                    "tunomon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               POPOMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            popomon: {

                nombre: "Popomon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "wanyamon",
                    "frimon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PITCHMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            pitchmon: {

                nombre: "Pitchmon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "pukamon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               NYOKIMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            nyokimon: {

                nombre: "Nyokimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "pyocomon",
                    "budmon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               COCOMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            cocomon: {

                nombre: "Cocomon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "chocomon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PUWAMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            puwamon: {

                nombre: "Puwamon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "pinamon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PETITMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            petitmon: {

                nombre: "Petitmon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "babidmon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               CURIMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            curimon: {

                nombre: "Curimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "gurimon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               JYARIMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            jyarimon: {

                nombre: "Jyarimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "gigimon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PURURUMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            pururumon: {

                nombre: "Pururumon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "poromon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               KEEMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            keemon: {

                nombre: "Keemon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "yarmon"
                ],

                datos: [],

                                     vacuna: [],
                virus: []

            },

            /* =====================================================
               YOLKMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            yolkmon: {

                nombre: "Yolkmon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "chicchimon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PUYOMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            puyomon: {

                nombre: "Puyomon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "puyoyomon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               LEAFMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            leafmon: {

                nombre: "Leafmon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "minomon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               DOKIMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            dokimon: {

                nombre: "Dokimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "bibimon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PAOMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            paomon: {

                nombre: "Paomon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "xiaomon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               RELEMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            relemon: {

                nombre: "Relemon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "moonmon",
                    "pokomon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               KETOMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            ketomon: {

                nombre: "Ketomon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "hopmon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               SUNAMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            sunamon: {

                nombre: "Sunamon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "goromon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               ZERIMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            zerimon: {

                nombre: "Zerimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "gummymon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               CHICOMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */

            chicomon: {

                nombre: "Chicomon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "chibimon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PUSUMON
               RUTAS DE EVOLUCIÓN AÑADIDAS
            ===================================================== */
            pusumon: {

                nombre: "Pusumon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "pusurimon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               BABIDMON
               REGISTRO DE APOYO
            ===================================================== */

            babidmon: {

                nombre: "Babidmon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               BIBIMON
               REGISTRO DE APOYO
            ===================================================== */

            bibimon: {

                nombre: "Bibimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               BOSAMON
               REGISTRO DE APOYO
            ===================================================== */

            bosamon: {

                nombre: "Bosamon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               BUDMON
               REGISTRO DE APOYO
            ===================================================== */

            budmon: {

                nombre: "Budmon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               CAPRIMON
               REGISTRO DE APOYO
            ===================================================== */

            caprimon: {

                nombre: "Caprimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               CHIBIMON
               REGISTRO DE APOYO
            ===================================================== */

            chibimon: {

                nombre: "Chibimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               CHICCHIMON
               REGISTRO DE APOYO
            ===================================================== */

            chicchimon: {

                nombre: "Chicchimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               CHOCOMON
               REGISTRO DE APOYO
            ===================================================== */

            chocomon: {

                nombre: "Chocomon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               FRIMON
               REGISTRO DE APOYO
            ===================================================== */

            frimon: {

                nombre: "Frimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               GIGIMON
               REGISTRO DE APOYO
            ===================================================== */

            gigimon: {

                nombre: "Gigimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               GOROMON
               REGISTRO DE APOYO
            ===================================================== */

            goromon: {

                nombre: "Goromon",
                                       etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               GUMMYMON
               REGISTRO DE APOYO
            ===================================================== */

            gummymon: {

                nombre: "Gummymon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               GURIMON
               REGISTRO DE APOYO
            ===================================================== */

            gurimon: {

                nombre: "Gurimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               HIYARIMON
               REGISTRO DE APOYO
            ===================================================== */

            hiyarimon: {

                nombre: "Hiyarimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               HOPMON
               REGISTRO DE APOYO
            ===================================================== */

            hopmon: {

                nombre: "Hopmon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               KOROMON
               REGISTRO DE APOYO
            ===================================================== */

            koromon: {

                nombre: "Koromon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               MINOMON
               REGISTRO DE APOYO
            ===================================================== */

            minomon: {

                nombre: "Minomon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               MOCHIMON
               REGISTRO DE APOYO
            ===================================================== */

            mochimon: {

                nombre: "Mochimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               MOONMON
               REGISTRO DE APOYO
            ===================================================== */

            moonmon: {

                nombre: "Moonmon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               NYAROMON
               REGISTRO DE APOYO
            ===================================================== */

            nyaromon: {

                nombre: "Nyaromon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PAGUMON
               REGISTRO DE APOYO
            ===================================================== */

            pagumon: {

                nombre: "Pagumon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PETI MERAMON
               REGISTRO DE APOYO
            ===================================================== */

            petimeramon: {

                nombre: "Peti Meramon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                                       datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PINAMON
               REGISTRO DE APOYO
            ===================================================== */

            pinamon: {

                nombre: "Pinamon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               POKOMON
               REGISTRO DE APOYO
            ===================================================== */

            pokomon: {

                nombre: "Pokomon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               POROMON
               REGISTRO DE APOYO
            ===================================================== */

            poromon: {

                nombre: "Poromon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PUKAMON
               REGISTRO DE APOYO
            ===================================================== */

            pukamon: {

                nombre: "Pukamon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PUSURIMON
               REGISTRO DE APOYO
            ===================================================== */

            pusurimon: {

                nombre: "Pusurimon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PUYOYOMON
               REGISTRO DE APOYO
            ===================================================== */

            puyoyomon: {

                nombre: "Puyoyomon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PYOCOMON
               REGISTRO DE APOYO
            ===================================================== */

            pyocomon: {

                nombre: "Pyocomon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               SUNMON
               REGISTRO DE APOYO
            ===================================================== */

            sunmon: {

                nombre: "Sunmon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               TANEMON
               REGISTRO DE APOYO
            ===================================================== */

            tanemon: {

                nombre: "Tanemon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               TOKOMON
               REGISTRO DE APOYO
            ===================================================== */

            tokomon: {

                nombre: "Tokomon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               TUNOMON
               REGISTRO DE APOYO
            ===================================================== */

            tunomon: {

                nombre: "Tunomon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },
            /* =====================================================
               UPAMON
               REGISTRO DE APOYO
            ===================================================== */

            upamon: {

                nombre: "Upamon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               WANYAMON
               REGISTRO DE APOYO
            ===================================================== */

            wanyamon: {

                nombre: "Wanyamon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               XIAOMON
               REGISTRO DE APOYO
            ===================================================== */

            xiaomon: {

                nombre: "Xiaomon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               YARMON
               REGISTRO DE APOYO
            ===================================================== */

            yarmon: {

                nombre: "Yarmon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [],

                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PYOCOMOM
               REGISTRO DE APOYO
            ===================================================== */

            pyocomom: {

                nombre: "Pyocomom",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "piyomon",
                    "cutemon",
                    "elecmon",
                    "floramon",
                    "hyokomon",
                    "palmon",
                    "wormmon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },


            /* =====================================================
               BABYDMON
               REGISTRO DE APOYO
            ===================================================== */

            babydmon: {

                nombre: "Babydmon",

                etapa: "",

                atributo: "",

                imagen: "",

                evoluciones: [
                    "dracomon"
                ],

                datos: [],
                vacuna: [],
                virus: []

            },


            /* =====================================================
               CUTEMON
               REGISTRO DE APOYO
            ===================================================== */

            cutemon: {

                nombre: "Cutemon",
                etapa: "",
                atributo: "",
                imagen: "",
                evoluciones: [],
                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               DRACOMON
               REGISTRO DE APOYO
            ===================================================== */

            dracomon: {

                nombre: "Dracomon",
                etapa: "",
                atributo: "",
                imagen: "",
                evoluciones: [],
                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               ELECMON
               REGISTRO DE APOYO
            ===================================================== */

            elecmon: {

                nombre: "Elecmon",
                etapa: "",
                atributo: "",
                imagen: "",
                evoluciones: [],
                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               FLORAMON
               REGISTRO DE APOYO
            ===================================================== */

            floramon: {

                nombre: "Floramon",
                etapa: "",
                atributo: "",
                imagen: "",
                evoluciones: [],
                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               HYOKOMON
               REGISTRO DE APOYO
            ===================================================== */

            hyokomon: {

                nombre: "Hyokomon",
                etapa: "",
                atributo: "",
                imagen: "",
                evoluciones: [],
                datos: [],
                vacuna: [],
                virus: []

            },

                      /* =====================================================
               PALMON
               REGISTRO DE APOYO
            ===================================================== */

            palmon: {

                nombre: "Palmon",
                etapa: "",
                atributo: "",
                imagen: "",
                evoluciones: [],
                datos: [],
                vacuna: [],
                virus: []

            },

            /* =====================================================
               PIYOMON
               REGISTRO DE APOYO
            ===================================================== */

            piyomon: {

                nombre: "Piyomon",
                etapa: "",
                atributo: "",
                imagen: "",
                evoluciones: [],
                datos: [],
                vacuna: [],
                virus: []

            },
                   
            /* =====================================================
               WORMMON
               REGISTRO DE APOYO
            ===================================================== */

            wormmon: {

                nombre: "Wormmon",
                etapa: "",
                atributo: "",
                imagen: "",
                evoluciones: [],
                datos: [],
                vacuna: [],
                virus: []

            },

        };


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
           rutas: Datos, Vacuna, Virus o Evoluciones.
        ========================================================= */

        function getIndievolutions(slug) {

            const previousDigimon = [];


            Object.entries(DIGIMON_DATABASE).forEach(
                ([sourceSlug, digimon]) => {

                    const routes = [

                        ...(digimon.datos || []),

                        ...(digimon.vacuna || []),

                        ...(digimon.virus || []),

                        ...(digimon.evoluciones || [])

                    ];


                    if (
                        routes.includes(slug) &&
                        sourceSlug !== slug
                    ) {

                        previousDigimon.push({
                            slug: sourceSlug,
                            ...digimon
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

                ${digimon.etapa ? `
                    <div class="badge">
                        ETAPA: ${digimon.etapa}
                    </div>
                ` : ""}

                ${digimon.atributo ? `
                    <div class="badge">
                        ATRIBUTO: ${digimon.atributo}
                    </div>
                ` : ""}

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

            document
                .querySelectorAll(".type-tab")
                .forEach(button => {

                    button.classList.toggle(
                        "active",
                        button.dataset.type === currentType
                    );

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

            const digimon =
                getDigimon(currentDigimon);


            if (!digimon) {
                return;
            }


            typeDescription.innerHTML =
                Array.isArray(digimon.evoluciones)
                    ? "Rutas de evolución configuradas para este Digimon."
                    : TYPE_INFO[currentType].descripcion;


            const evolutionList =
                Array.isArray(digimon.evoluciones)
                    ? digimon.evoluciones
                    : (digimon[currentType] || []);


            evolutionGrid.innerHTML = "";


            evolutionList.forEach((evolutionSlug, i) => {

                if (
                    evolutionSlug &&
                    getDigimon(evolutionSlug)
                ) {

                    const evolution =
                        getDigimon(evolutionSlug);

                    const card =
                        document.createElement("article");

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
                            ${evolution.etapa || ""}
                        </div>

                    `;

                    createImage(
                        card.querySelector(".evolution-image"),
                        evolution
                    );

                    card.addEventListener(
                        "click",
                        () => selectDigimon(evolutionSlug)
                    );

                    evolutionGrid.appendChild(card);

                }

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


            currentItem.className =            currentItem.style.borderColor =
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

        }            searchModal.classList.remove(
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
                                ${digimon.etapa}
                                ·
                                ${digimon.atributo}
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
                                        ${digimon.etapa}
                                        ·
                                        ${digimon.atributo}
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
