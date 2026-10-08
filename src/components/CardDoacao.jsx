import { Link } from 'react-router-dom'
import formataData from './FormataData'

const cores = {
  disponivel: 'bg-green-100 text-green-800',
  reservada: 'bg-yellow-100 text-yellow-800',
  coletada: 'bg-gray-200 text-gray-600',
}

export default function CardDoacao({ doacao }) {
  return (
    <Link
      to={`/doacoes/${doacao.id}`}
      className="block bg-white p-5 rounded-xl shadow hover:shadow-md"
    >
      <div className="flex justify-between items-start gap-2">
        <h3 className="font-bold text-green-800 text-lg">{doacao.alimento}</h3>
        <span className={`text-xs px-2 py-1 rounded capitalize whitespace-nowrap ${cores[doacao.status] || cores.coletada}`}>
          {doacao.status}
        </span>
      </div>
      <p className="text-gray-600 mt-1">Quantidade: {doacao.quantidade}</p>
      <p className="text-gray-600">Validade: {formataData(doacao.validade)}</p>
      <p className="text-gray-500 text-sm mt-2">Doador: {doacao.doador}</p>
    </Link>
  )
}