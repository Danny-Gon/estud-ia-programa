# Estud-IA · Qué es el programa

Sitio estático de una sola página que explica el programa Estud-IA 2026 en
lenguaje sencillo: las tres capas, las seis líneas, quién puede participar y
cómo se obtiene el certificado. Pensado para estudiantes, docentes y cualquier
persona que quiera entenderlo sin leer el Anexo Técnico.

Sin frameworks: HTML, CSS y JavaScript vanilla. No usa `localStorage` ni cookies.

**Sitio hermano:** el catálogo detallado de los 36 cursos está en
<https://estud-iacursos.vercel.app> y se mantiene en su propio repositorio.

## Archivos

| Archivo | Para qué |
|---|---|
| `index.html` | La página. La estructura; los textos no están aquí. |
| `programa.js` | **Todo el contenido editable.** Ver abajo. |
| `styles.css` | Estilos. Misma identidad gráfica que el catálogo. |
| `cursos.json` | Copia del catálogo, solo para **contar** cursos por línea. |
| `cursos.js` | Espejo de `cursos.json`, para que funcione con doble clic. |
| `img/` | Logotipo de Estud-IA y sello de la Alcaldía. |

## Cambiar los textos

Todo lo que se lee en la página sale de `programa.js`. Para corregir una frase,
una cifra o un requisito **se edita ese archivo y nada más**: no hay que tocar
el HTML.

Está organizado en bloques con nombres claros:

```js
window.PROGRAMA = {
  resumen:        '…',   // la frase del encabezado
  metas:          [ … ], // las tres cifras grandes
  requisitos:     { … }, // quién puede participar
  capas:          [ … ], // las tres capas, con sus datos
  transversales:  [ … ], // inglés, habilidades blandas, acompañamiento…
  certificacion:  { … }, // cómo se obtiene el certificado
  catalogo:       { … }, // el enlace al sitio hermano
  lineas:         { … }  // nombre y descripción de cada línea
};
```

Las cifras de cursos **no se escriben a mano**: se cuentan desde `cursos.json`,
para que esta página no pueda contradecir al catálogo.

## Actualizar los cursos

Cuando cambie el catálogo, se copian sus dos archivos de datos:

```bash
copy "..\..\Estud-IA_Catalogo_Cursos\estud-ia\cursos.json" .
```

```bash
copy "..\..\Estud-IA_Catalogo_Cursos\estud-ia\cursos.js" .
```

Si el conteo de cursos no cambió, no hace falta.

## Publicar

Esta carpeta es un repositorio conectado a GitHub, y GitHub a Vercel. **Cada
`git push` a `main` republica el sitio**, sin build ni comandos extra.

```bash
git add -A ; git commit -m "Actualiza textos" ; git push
```

## Decisiones que conviene conocer

- **La fuente de los textos es el Anexo Técnico.** Las cifras (3.500, 1.180,
  30 %), los requisitos de ingreso, la regla del 80 % y la descripción de las
  tres capas salen de ese documento, no de una redacción libre.
- **Capa 3 no tiene cursos** y la página lo dice explícitamente: es el voucher
  del examen de certificación más su preparación.
- **Capa 2 son 90 horas**: 60 técnicas + 20 de inglés técnico + 10 de
  habilidades blandas. El `Capa 2.xlsx` decía 80 horas y omitía las
  habilidades blandas; se corrigió en el Excel, que es el origen, y el
  catálogo se regeneró desde ahí. Los dos sitios dicen ya lo mismo.
- **El logotipo de Estud-IA lleva "Estud-" en blanco**, así que solo puede ir
  sobre fondo oscuro.
- **El sello de la Alcaldía es institucional:** se usa tal cual, sin
  recolorear ni deformar.

## Ver el sitio en local

Doble clic en `index.html` funciona. Si prefieres servirlo:

```bash
python -m http.server 8000
```
