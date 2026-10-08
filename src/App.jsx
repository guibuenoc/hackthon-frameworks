import { Routes, Route } from 'react-router-dom'
import Navbar from './src/components/NavBar'
import Footer from './src/components/Footer'
import Home from './src/pages/Home'
import Cadastro from './src/pages/Cadastro'
import NovaDoacao from './src/pages/NovaDoacao'
import ListaDoacoes from './src/pages/ListaDoacoes'
import DetalheDoacao from './src/pages/DetalheDoacao'
import MinhasReservas from './src/pages/MinhasReservas'
import PainelImpacto from './src/pages/PainelImpacto'
import Historico from './src/pages/Historico'
import NaoEncontrada from './src/pages/Naoencontrada'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
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
      </main>
      <Footer />
    </div>
  )
}