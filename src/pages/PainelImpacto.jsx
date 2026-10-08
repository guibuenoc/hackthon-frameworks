import { db } from '../services/storage'

export default function PainelImpacto() {
  const doacoes = db.doacoes()
  const coletadas = doacoes.filter((d) => d.status === 'coletada')
  const totalKg = coletadas.reduce((soma, d) => soma + (Number(d.quantidade) || 0), 0)
  const refeicoes = Math.round(totalKg * 2)
  const disponiveis = doacoes.filter((d) => d.status === 'disponivel').length

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-green-800">Painel de impacto</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-4xl font-bold text-green-700">{coletadas.length}</p>
          <p className="text-gray-600 mt-2">Doações coletadas</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-4xl font-bold text-green-700">{totalKg} kg</p>
          <p className="text-gray-600 mt-2">Comida salva do lixo</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-4xl font-bold text-green-700">{refeicoes}</p>
          <p className="text-gray-600 mt-2">Refeições geradas (1 kg = 2 refeições)</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-4xl font-bold text-green-700">{disponiveis}</p>
          <p className="text-gray-600 mt-2">Doações disponíveis agora</p>
        </div>
      </div>
    </div>
  )
}