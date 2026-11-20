const formatoPrecio = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
})

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}

export default function TarjetaInmueble({ inmueble }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-800">{inmueble.titulo}</h2>
      <p className="text-sm text-slate-600">{inmueble.ciudad}</p>
      <p className="text-sm text-slate-600">{capitalizar(inmueble.operacion)}</p>
      <p className="mt-2 text-xl font-bold text-slate-900">
        {formatoPrecio.format(inmueble.precio)}
      </p>
    </article>
  )
}
