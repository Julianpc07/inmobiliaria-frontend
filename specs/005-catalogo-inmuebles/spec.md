# Spec 005 · Catálogo de inmuebles

## Qué y por qué
Es la primera pantalla que ve el visitante: las tarjetas de los inmuebles que trae `GET /inmuebles` (spec 001 del backend) y un filtro por tipo que usa el parámetro `tipo` (spec 002). La numeración sigue la del backend porque las 5 specs son del mismo proyecto.

## Criterios de aceptación
- **CA1:** Mientras llegan los datos se ve el texto «Cargando inmuebles…».
- **CA2:** Cuando llegan, se ve una tarjeta por inmueble con el título, la ciudad, «Venta» o «Arriendo» y el precio en pesos (por ejemplo «$ 320.000.000»).
- **CA3:** Hay un select con la etiqueta «Tipo de inmueble» y las opciones Todos, Casa, Apartamento y Local. Al elegir «Casa», se llama a la API con `tipo=casa`.
- **CA4:** Si la API no trae nada, se ve «No hay inmuebles con esos filtros».
- **CA5:** Si la API falla, se ve «No pudimos cargar los inmuebles. Intenta de nuevo.».
- **CA6:** `listarInmuebles({ tipo: 'casa' })` de `src/api.js` llama a `http://localhost:8000/inmuebles?tipo=casa`, y sin tipo llama a `http://localhost:8000/inmuebles`.
- **CA7:** En 360 px las tarjetas van en 1 columna y en 1280 px en 3 columnas (lo comprueba el verificador visual).

## Fuera de alcance
Filtros de ciudad y precio en la interfaz, detalle del inmueble y fotos.
