export default function FormCampo({ label, tipo = 'text', valor, aoMudar, obrigatorio = true }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label} {obrigatorio && <span className="text-red-500">*</span>}
      </label>
      <input
        type={tipo}
        value={valor}
        onChange={aoMudar}
        required={obrigatorio}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
    </div>
  )
}