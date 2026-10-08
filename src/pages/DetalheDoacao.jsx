import { useParams, useNavigate } from 'react-router-dom'
import { db } from '../services/storage'
import Botao from '../components/Botao'

export default function DetalheDoacao() {
  const { id } = useParams()
  const navegar = useNavigate()
  const doacao = db.doacoes().find((d) => d.id === Number(id))

  if (!doacao) {
    return <p className="p-8 text-gray-500">Doação não encontrada.</p>
  }

  const reservar = () => {
    db.reservarDoacao(doacao.id, 'Coletor demo')
    navegar('/reservas')
  }

  return (
    <div className="max-w-lg mx-auto p-8">
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-green-800">{doacao.alimento}</h1>
        <p className="mt-2 text-gray-600">Tipo: {doacao.tipo}</p>
        <p className="text-gray-600">Quantidade: {doacao.quantidade}</p>
        <p className="text-gray-600">Validade: {doacao.validade}</p>
        <p className="text-gray-600">Retirada: {doacao.retirada}</p>
        <p className="text-gray-600">Doador: {doacao.doador}</p>
        <p className="mt-2 text-sm text-gray-500">Status: {doacao.status}</p>
        {doacao.status === 'disponivel' && (
          <div className="mt-4">
            <Botao cor="bg-green-700" tipo="button">
              <span onClick={reservar}>Reservar doação</span>
            </Botao>
          </div>
        )}
        {doacao.status === 'reservada' && (
          <p className="mt-4 bg-yellow-100 text-yellow-800 p-3 rounded-lg">
            Essa doação já foi reservada por outro coletor.
          </p>
        )}
      </div>
    </div>
  )
}