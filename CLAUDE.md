# CLAUDE.md · inmobiliaria-frontend

## Proyecto
Interfaz de la plataforma inmobiliaria: catálogo con filtros (tipo, venta o arriendo, ciudad, precio), detalle del inmueble, asistente con IA y panel para la inmobiliaria. La mayoría de visitantes entra desde el celular.

## Stack y comandos
- React 18 + Vite + Tailwind CSS v4.
- `npm test` (Vitest + Testing Library), `npm run build`, `npm run dev` (puerto 5173).
- Backend en `http://localhost:8000` (repo inmobiliaria-backend). Contrato: `http://localhost:8000/openapi.json`.

## Arquitectura
- `src/api.js`: el **único** archivo que hace `fetch` al backend. El CI falla si aparece `fetch(` en otro archivo.
- `src/components/`: un componente por archivo, con su prueba al lado (`Nombre.test.jsx`).
- `src/pages/`: pantallas que arman los componentes.

## Reglas
- Primero la prueba, después el componente. Las pruebas revisan lo que ve el usuario, y solo se simula `api.js`.
- Cobertura mínima 80 % de líneas.
- Diseño primero para celular (360 px) y que funcione con teclado.
- Nada de dependencias nuevas sin que yo lo apruebe. Los agentes no hacen commit ni push. Máximo 2 vueltas por punto de control.
