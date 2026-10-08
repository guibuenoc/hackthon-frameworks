import { db } from '../services/storage'

export default function Historico() {
  const doacoes = db.doacoes()

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-green-800">Histórico de doações</h1>
      <div className="mt-6 bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-3">Alimento</th>
              <th className="p-3">Quantidade</th>
              <th className="p-3">Doador</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {doacoes.map((d) => (
              <tr key={d.id} className="border-b">
                <td className="p-3">{d.alimento}</td>
                <td className="p-3">{d.quantidade}</td>
                <td className="p-3">{d.doador}</td>
                <td className="p-3">{d.status}</td>
              </tr>
            ))}
            {doacoes.length === 0 && (
              <tr>
                <td className="p-3 text-gray-500" colSpan="4">
                  Nenhuma doação registrada ainda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}