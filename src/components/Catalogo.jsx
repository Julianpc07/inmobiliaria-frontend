import { useEffect, useState } from 'react'
import { listarInmuebles } from '../api'
import TarjetaInmueble from './TarjetaInmueble'

const TIPOS = [
  { valor: '', texto: 'Todos' },
  { valor: 'casa', texto: 'Casa' },
  { valor: 'apartamento', texto: 'Apartamento' },
  { valor: 'local', texto: 'Local' },
]

export default function Catalogo() {
  const [tipo, setTipo] = useState('')
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const [inmuebles, setInmuebles] = useState([])

  useEffect(() => {
    let activo = true
    setCargando(true)
    setError(false)
    const filtros = tipo ? { tipo } : {}
    listarInmuebles(filtros)
      .then((datos) => {
        if (!activo) return
        setInmuebles(datos)
        setCargando(false)
      })
      .catch(() => {
        if (!activo) return
        setError(true)
        setCargando(false)
      })
    return () => {
      activo = false
    }
  }, [tipo])

  return (
    <section>
      <div className="mb-4">
        <label htmlFor="tipo-inmueble" className="mb-1 block text-sm font-medium text-slate-700">
          Tipo de inmueble
        </label>
        <select
          id="tipo-inmueble"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full rounded border border-slate-300 bg-white p-2 lg:w-64"
        >
          {TIPOS.map((t) => (
            <option key={t.valor} value={t.valor}>
              {t.texto}
            </option>
          ))}
        </select>
      </div>

      {cargando && <p>Cargando inmuebles…</p>}
      {!cargando && error && <p>No pudimos cargar los inmuebles. Intenta de nuevo.</p>}
      {!cargando && !error && inmuebles.length === 0 && (
        <p>No hay inmuebles con esos filtros</p>
      )}
      {!cargando && !error && inmuebles.length > 0 && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {inmuebles.map((inmueble) => (
            <TarjetaInmueble key={inmueble.id} inmueble={inmueble} />
          ))}
        </div>
      )}
    </section>
  )
}
