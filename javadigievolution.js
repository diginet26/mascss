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

                imagen: "https://raw.githubusercontent.com/BSoD38/time-stranger-tree/refs/heads/main/data/icons/patamon.png",

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

                imagen: "https://raw.githubusercontent.com/BSoD38/time-stranger-tree/refs/heads/main/data/icons/angemon.png",


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
