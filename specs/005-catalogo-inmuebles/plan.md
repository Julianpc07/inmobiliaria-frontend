# Plan 005 · Catálogo de inmuebles

## Decisiones técnicas
- `src/api.js` exporta `listarInmuebles({ tipo })`, que arma la URL con `URLSearchParams` y lanza un error si `response.ok` es falso.
- `Catalogo` maneja el estado (cargando, error, datos) y el filtro; `TarjetaInmueble` solo muestra un inmueble por props.
- Grid de Tailwind: `grid grid-cols-1 gap-4 lg:grid-cols-3`.
- El precio se formatea con `Intl.NumberFormat('es-CO', ...)`. En las pruebas se busca con una expresión regular (`/320\.000\.000/`) porque el espacio que pone `Intl` no es un espacio normal.

## Archivos que se tocan
| Archivo | Cambio |
| --- | --- |
| `src/api.js` | nuevo: `listarInmuebles` |
| `src/components/TarjetaInmueble.jsx` | nuevo |
| `src/components/Catalogo.jsx` | nuevo |
| `src/App.jsx` | muestra `Catalogo` |
| `src/api.test.jsx`, `src/components/Catalogo.test.jsx` | nuevos |

## Pruebas
| Criterio | Prueba |
| --- | --- |
| CA1 | `CA1: muestra cargando mientras llegan los datos` |
| CA2 | `CA2: una tarjeta por inmueble con precio en pesos` |
| CA3 | `CA3: el filtro por tipo llama a la API con tipo=casa` |
| CA4 | `CA4: mensaje cuando no hay inmuebles` |
| CA5 | `CA5: mensaje cuando la API falla` |
| CA6 | `CA6: listarInmuebles arma la URL` (2 casos) |
| CA7 | verificación visual a 360 px y 1280 px |
