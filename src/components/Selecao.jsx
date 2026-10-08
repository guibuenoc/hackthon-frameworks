export default function Selecao({ label, valor, aoMudar, opcoes }) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
            <select
                value={valor}
                onChange={aoMudar}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
                {opcoes.map((o) => (
                    <option key={o} value={o}>{o}</option>
                ))}
            </select>
        </div>
    )
}