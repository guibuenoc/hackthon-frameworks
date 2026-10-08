import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex gap-6 font-semibold">
      <Link to="/">Conecta Sobras</Link>
      <Link to="/doacoes">Doações</Link>
      <Link to="/nova-doacao">Doar</Link>
      <Link to="/reservas">Reservas</Link>
      <Link to="/impacto">Impacto</Link>
      <Link to="/cadastro" className="ml-auto">Entrar</Link>
    </nav>
  )
}