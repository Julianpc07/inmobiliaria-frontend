"""Hook PreToolUse: rechaza Edit/Write fuera de las rutas permitidas del agente.

Uso: python .claude/hooks/limitar_rutas.py --permitir "app/*" [--negar "*.test.jsx"]
Claude Code manda por stdin el JSON de la herramienta. Exit 2 = bloquear.
"""
import json, sys, os, fnmatch

def main():
    args = sys.argv[1:]
    permitir, negar = [], []
    for i, a in enumerate(args):
        if a == "--permitir": permitir.append(args[i + 1])
        if a == "--negar": negar.append(args[i + 1])

    datos = json.load(sys.stdin)
    ruta = datos.get("tool_input", {}).get("file_path", "")
    raiz = datos.get("cwd") or os.getcwd()
    rel = os.path.relpath(ruta, raiz).replace("\\", "/")

    if rel.startswith(".."):
        print(f"Bloqueado: {rel} está fuera del repositorio.", file=sys.stderr)
        sys.exit(2)
    if any(fnmatch.fnmatch(rel, n) for n in negar):
        print(f"Bloqueado: este agente no puede editar {rel}.", file=sys.stderr)
        sys.exit(2)
    if not any(fnmatch.fnmatch(rel, p) for p in permitir):
        print(f"Bloqueado: {rel} no está en las carpetas de este agente ({', '.join(permitir)}).", file=sys.stderr)
        sys.exit(2)
    sys.exit(0)

if __name__ == "__main__":
    main()
