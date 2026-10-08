import { db } from '../services/storage'
import Botao from '../components/Botao'

export default function MinhasReservas() {
  const reservadas = db.doacoes().filter((d) => d.status === 'reservada')

  const coletar = (id) => {
    db.coletarDoacao(id)
    window.location.reload()
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-green-800">Minhas reservas</h1>
      <div className="mt-6 space-y-4">
        {reservadas.length === 0 && (
          <p className="text-gray-500">Nenhuma reserva ainda.</p>
        )}
        {reservadas.map((d) => (
          <div key={d.id} className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
            <div>
              <h3 className="font-bold text-green-800">{d.alimento}</h3>
              <p className="text-gray-600">{d.quantidade}, retirada às {d.retirada}</p>
            </div>
            <Botao cor="bg-blue-600" tipo="button">
              <span onClick={() => coletar(d.id)}>Marcar como coletada</span>
            </Botao>
          </div>
        ))}
      </div>
    </div>
  )
}