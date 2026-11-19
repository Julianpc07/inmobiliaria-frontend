# CLAUDE.md · inmobiliaria-frontend

## Proyecto
Interfaz de la plataforma inmobiliaria: catálogo con filtros, detalle del inmueble y, más adelante, el asistente con IA y el panel de la inmobiliaria. La mayoría de visitantes entra desde el celular. Consume la API del repo `inmobiliaria-backend`.

## Comandos
- Instalar: `npm install`
- Pruebas: `npm test -- --run` · Cobertura: `npm test -- --run --coverage` (mínimo 80 % de líneas)
- Desarrollo: `npm run dev` (http://localhost:5173) · Build: `npm run build`
- Backend: `uv run uvicorn app.main:app` en `inmobiliaria-backend` (http://localhost:8000). Contrato: http://localhost:8000/openapi.json

## Organización
- `src/api.js`: el **único** archivo que hace `fetch`. URL base `http://localhost:8000`.
- `src/components/`: un componente por archivo, con su prueba al lado (`Nombre.test.jsx`).
- `src/App.jsx`: arma las pantallas.
- `specs/NNN-nombre/`: spec.md, plan.md y tasks.md.

## Convenciones
- Componentes en PascalCase y en español (`TarjetaInmueble`). Estilos con clases de Tailwind, sin CSS aparte.
- Precios en pesos colombianos con `Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })`.
- Primero celular (360 px): 1 columna; desde `lg`, 3 columnas.

## Lo que el agente NO debe hacer
- Modificar una prueba para que pase.
- Hacer `fetch` fuera de `src/api.js`.
- Tocar `package.json` o `vite.config.js`, o instalar paquetes.
- Hacer commit o push.
