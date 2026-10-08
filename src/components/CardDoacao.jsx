import { Link } from 'react-router-dom'

export default function CardDoacao({ doacao }) {
  return (
    <Link
      to={`/doacoes/${doacao.id}`}
      className="block bg-white p-5 rounded-xl shadow hover:shadow-md"
    >
      <h3 className="font-bold text-green-800 text-lg">{doacao.alimento}</h3>
      <p className="text-gray-600">Quantidade: {doacao.quantidade}</p>
      <p className="text-gray-600">Validade: {doacao.validade}</p>
      <p className="text-gray-500 text-sm mt-2">Doador: {doacao.doador}</p>
      <span className="inline-block mt-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
        {doacao.status}
      </span>
    </Link>
  )
}