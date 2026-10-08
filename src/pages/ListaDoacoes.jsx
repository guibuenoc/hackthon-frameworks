import { useState } from 'react'
import { db } from '../services/storage'
import CardDoacao from '../components/CardDoacao'
import DadosExemplo from '../components/DadosExemplo'

const tipos = ['Todos', 'Frutas e verduras', 'Padaria', 'Refeições prontas', 'Não perecíveis', 'Bebidas']

export default function ListaDoacoes() {
  const [busca, setBusca] = useState('')
  const [status, setStatus] = useState('disponivel')
  const [tipo, setTipo] = useState('Todos')

  const doacoes = db.doacoes()
    .filter((d) =>
      d.status === status &&
      d.alimento.toLowerCase().includes(busca.toLowerCase()) &&
      (tipo === 'Todos' || d.tipo === tipo)
    )
    .sort((a, b) => (a.validade || '').localeCompare(b.validade || ''))

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-green-800">Doações disponíveis</h1>
      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Buscar alimento..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2"
        >
          <option value="disponivel">Disponíveis</option>
          <option value="reservada">Reservadas</option>
          <option value="coletada">Coletadas</option>
        </select>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2"
        >
          {tipos.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {doacoes.length === 0 && (
          <p className="text-gray-500">Nenhuma doação encontrada.</p>
        )}
        {doacoes.map((d) => (
          <CardDoacao key={d.id} doacao={d} />
        ))}
      </div>
      <DadosExemplo />
    </div>
  )
}