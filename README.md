# inmobiliaria-frontend

Interfaz web de la **Plataforma Inmobiliaria con IA** (proyecto del Diplomado en Ingeniería de Software con IA y Sistemas Agénticos, FET).

Autor: Julián Andrés Pobre Campuzano

Backend: [inmobiliaria-backend](https://github.com/Julianpc07/inmobiliaria-backend)

## Stack

React 18 · Vite · Tailwind CSS v4 · Vitest + Testing Library

## Sistema de agentes (Claude Code)

| Agente | Rol | Modelo | Puede editar |
| --- | --- | --- | --- |
| `orquestador-ui` | Coordina, arma el plan y delega. No escribe código | sonnet | nada |
| `probador-ui` | Pruebas de componentes primero (Red) | sonnet | `src/**/*.test.jsx` |
| `desarrollador-ui` | Componentes y `api.js` (Green) | sonnet | `src/**` menos pruebas |
| `verificador-visual` | Revisa en el navegador a 360 px y 1280 px, teclado y accesibilidad | sonnet | nada |
| `revisor-ui` | Revisa diff, cobertura y contrato con el backend | opus | nada |

Cómo se inicia:

```
set CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=1
claude --agent orquestador-ui
```

El `verificador-visual` necesita el MCP de Playwright (`claude mcp add playwright npx @playwright/mcp@latest`) y la skill `web-design-guidelines`.

## Estado

Por ahora el repositorio tiene la configuración de los agentes, `CLAUDE.md` y el CI. Los componentes se van a ir construyendo con este flujo.
