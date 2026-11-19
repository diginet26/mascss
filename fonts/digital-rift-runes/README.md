# Digital Rift Runes

Fuente de símbolos geométricos para las inscripciones, pistas y misterios publicados por la administración de Digital Rift.

## Archivos
- `Digital-Rift-Runes.woff2`: fuente web, recomendada para el foro.
- `Digital-Rift-Runes.css`: declaración de la fuente y clase de uso.

## Integración en Foroactivo
Añade esta importación al CSS del foro:

```css
@import url("https://diginet26.github.io/mascss/fonts/digital-rift-runes/Digital-Rift-Runes.css");
```

Después, envuelve únicamente el texto que quieras escribir con el alfabeto rúnico:

```html
<span class="dr-runes">DIGITAL RIFT</span>
```

## Mapeo
- Las letras A-Z y a-z muestran el mismo símbolo.
- Las vocales acentuadas usan el glifo de su vocal base.
- Ñ/ñ usa el glifo N.
- Espacios, números y signos de puntuación conservan una tipografía normal de reserva.

La clase `.dr-runes` es una elección visual; no es un sistema de permisos ni de cifrado. El archivo de fuente es público y cualquier visitante podría descargarlo.
