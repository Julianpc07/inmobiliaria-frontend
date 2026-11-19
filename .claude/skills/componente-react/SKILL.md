---
name: componente-react
description: Pasos para crear un componente React del proyecto (props, estados de carga, error y vacío, Tailwind primero celular y accesibilidad). La usa el desarrollador-ui.
---

# Crear un componente

1. Archivo `src/components/Nombre.jsx` con `export default function Nombre(props)`.
2. Si pide datos: `useEffect` que llama a la función de `src/api.js` y tres estados: cargando, error y datos.
3. Estilos Tailwind primero para celular; `lg:` para escritorio.
4. Accesibilidad: `<label>` en cada campo, textos alternativos y botones reales.
5. Corre `npm test -- --run` y `npm run build` hasta que pasen, sin tocar `*.test.jsx`.
6. Deja `npm run dev` corriendo y avisa la URL para la verificación visual.
7. Marca las tareas hechas en `specs/NNN-*/tasks.md`.
