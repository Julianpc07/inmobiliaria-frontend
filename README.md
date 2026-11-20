# inmobiliaria-frontend

Interfaz web de la **Plataforma Inmobiliaria con IA**, el proyecto integrador del Diplomado en Ingeniería de Software con IA y Sistemas Agénticos (FET).

**Autor:** Julián Andrés Pobre Campuzano (trabajo individual)
**Herramienta:** Claude Code · **Stack:** React 18, Vite, Tailwind CSS v4, Vitest + Testing Library
**Backend:** [inmobiliaria-backend](https://github.com/Julianpc07/inmobiliaria-backend). Ahí está el README principal del arnés, con las specs 001 a 004.

```
npm install
npm test -- --run
npm run dev   # http://localhost:5173 (con el backend corriendo en :8000)
```

## El arnés

| Pieza | Dónde está | Qué hace |
| --- | --- | --- |
| Memoria | [`CLAUDE.md`](CLAUDE.md) | Comandos, organización, convenciones y lo que el agente no debe hacer |
| Rules | [`.claude/rules/`](.claude/rules) | `componentes.md` para `src/**/*.jsx` y `pruebas-ui.md` para `*.test.jsx` |
| Skills | [`.claude/skills/`](.claude/skills) | `pruebas-componentes` y `componente-react` |
| Agentes | [`.claude/agents/`](.claude/agents) | Orquestador + 4 subagentes |
| Permisos y hook | [`.claude/settings.json`](.claude/settings.json), [`.claude/hooks/`](.claude/hooks) | Prohíben commit, push y `npm install`; el hook limita las carpetas de cada agente |
| Specs | [`specs/`](specs) | Spec 005 |
| CI | [`.github/workflows/ci.yml`](.github/workflows/ci.yml) | `fetch` solo en `api.js`, pruebas con cobertura de 80 % y build |

### Skills

| Skill | Qué problema resuelve | Cuándo se invoca | La usa |
| --- | --- | --- | --- |
| [`pruebas-componentes`](.claude/skills/pruebas-componentes/SKILL.md) | Pruebas por lo que ve el usuario, simulando solo `api.js` | Paso Red | probador-ui |
| [`componente-react`](.claude/skills/componente-react/SKILL.md) | Componentes con estados de carga, error y vacío, primero celular y accesibles | Paso Green | desarrollador-ui |

## Sistema de agentes

| Agente | Rol | Modelo | Puede editar |
| --- | --- | --- | --- |
| [`orquestador-ui`](.claude/agents/orquestador-ui.md) | Coordina y delega | sonnet | nada |
| [`probador-ui`](.claude/agents/probador-ui.md) | Pruebas primero (Red) | sonnet | `src/**/*.test.jsx` |
| [`desarrollador-ui`](.claude/agents/desarrollador-ui.md) | Componentes y `api.js` (Green) | sonnet | `src/**` menos pruebas, y `tasks.md` |
| [`verificador-visual`](.claude/agents/verificador-visual.md) | Capturas a 360 px y 1280 px y teclado con Playwright | sonnet | nada |
| [`revisor-ui`](.claude/agents/revisor-ui.md) | Revisión y contrato con el backend | opus | nada |

Uso: `git checkout -b 005-catalogo-inmuebles`, `claude --agent orquestador-ui` y «Implementa la spec specs/005-catalogo-inmuebles». El flujo es el mismo del backend: plan aprobado → commit de pruebas → commit de código → verificación visual → revisión → PR.

### Qué cambió respecto del taller y por qué

| Cambio | Por qué |
| --- | --- |
| Pausa después de cada paso para que yo haga el commit | TDD visible en el historial |
| `verificador-visual` ya no usa la skill de terceros `web-design-guidelines`; la lista de revisión está en el mismo agente | No quería instalar una skill de terceros sin revisarla, y para una pantalla bastaba con una lista corta |
| `permissionMode: plan` fuera del orquestador | En modo plan no puede delegar; el plan se aprueba escribiendo «aprobado» |
| `desarrollador-ui` puede marcar `specs/*/tasks.md` | Las tareas deben quedar marcadas |
| Hook con `uv run --no-project python` | Python está instalado con uv |
| En la spec 005 el `verificador-visual` no se ejecutó | Por tiempo. El orquestador no dio el CA7 por cumplido sin evidencia, así que lo verifiqué a mano con DevTools a 360 px y 1280 px; las capturas están en el [PR #1](https://github.com/Julianpc07/inmobiliaria-frontend/pull/1) |

## Calidad

| Mecanismo | Evidencia |
| --- | --- |
| CI: `fetch` solo en `api.js`, Vitest con 80 % de líneas y build | [GitHub Actions](https://github.com/Julianpc07/inmobiliaria-frontend/actions) |
| TDD visible (commit de pruebas antes que el de código) | Historial del [PR](https://github.com/Julianpc07/inmobiliaria-frontend/pulls?q=is%3Apr) |
| Verificación visual y revisión del revisor-ui | Capturas e informe como comentario en el PR |
