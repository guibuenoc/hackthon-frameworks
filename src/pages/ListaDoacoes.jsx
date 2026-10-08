import { useState } from 'react'
import { db } from '../services/storage'
import CardDoacao from '../components/CardDoacao'

export default function ListaDoacoes() {
  const [busca, setBusca] = useState('')
  const doacoes = db.doacoes().filter((d) =>
    d.alimento.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-green-800">Doações disponíveis</h1>
      <input
        type="text"
        placeholder="Buscar alimento..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="mt-4 w-full border border-gray-300 rounded-lg px-3 py-2"
      />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {doacoes.length === 0 && (
          <p className="text-gray-500">Nenhuma doação encontrada.</p>
        )}
        {doacoes.map((d) => (
          <CardDoacao key={d.id} doacao={d} />
        ))}
      </div>
    </div>
  )
}