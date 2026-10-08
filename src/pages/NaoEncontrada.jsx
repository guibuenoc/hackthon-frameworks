import { Link } from 'react-router-dom'

export default function NaoEncontrada() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center mt-10">
      <h1 className="text-5xl font-bold text-green-800">404</h1>
      <p className="mt-4 text-gray-600">Essa página não existe.</p>
      <Link to="/" className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
        Voltar pra home
      </Link>
    </div>
  )
}