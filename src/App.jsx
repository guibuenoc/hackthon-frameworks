import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import NovaDoacao from './pages/NovaDoacao'
import ListaDoacoes from './pages/ListaDoacoes'
import DetalheDoacao from './pages/DetalheDoacao'
import MinhasReservas from './pages/MinhasReservas'
import PainelImpacto from './pages/PainelImpacto'
import Historico from './pages/Historico'
import NaoEncontrada from './pages/Naoencontrada'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/nova-doacao" element={<NovaDoacao />} />
        <Route path="/doacoes" element={<ListaDoacoes />} />
        <Route path="/doacoes/:id" element={<DetalheDoacao />} />
        <Route path="/reservas" element={<MinhasReservas />} />
        <Route path="/impacto" element={<PainelImpacto />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </div>
  )
}