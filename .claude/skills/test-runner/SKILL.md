---
name: test-runner
description: Ejecuta el suite de tests del proyecto Evangelio, muestra el resultado en terminal y genera el reporte HTML visual en tests/report/index.html.
---

# Test Runner — Evangelio

Cuando el usuario invoque esta skill, ejecuta los tests del proyecto y abre el reporte visual.

## Pasos

1. Ejecuta el siguiente comando desde la raíz del proyecto:

```bash
cd "C:\Users\corey\Documents\GitHub\evangelio" && npm run test:report
```

2. Muestra al usuario un resumen legible del resultado:
   - Número de suites pasadas / fallidas
   - Número de tests pasados / fallidos
   - Si hay fallos, lista cada test fallido con su mensaje de error

3. Abre el reporte HTML en el navegador con:

```bash
start "C:\Users\corey\Documents\GitHub\evangelio\tests\report\index.html"
```

4. Informa al usuario que el reporte visual está disponible en `tests/report/index.html`.

## Qué testea cada suite

| Suite | Descripción |
|---|---|
| `utils.test.js` | `esDomingo` (detección de domingos) y `agregarCeros` (padding de fechas) |
| `pascua.test.js` | Cálculo de Pascua, Jueves Santo, Viernes Santo y Sábado Santo con fechas reales |
| `reflexion.test.js` | Regex de extracción de reflexión para domingos (`/pautas/`), días de semana y estado "pendiente" |

## Comandos disponibles

- `npm test` — tests en terminal (verbose)
- `npm run test:report` — tests + genera `tests/report/index.html`
- `npm run test:coverage` — tests + reporte de cobertura
