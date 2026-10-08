import { db } from '../services/storage'

export default function DadosExemplo() {
  const popular = () => {
    const exemplos = [
      { alimento: 'Pães artesanais', tipo: 'Padaria', quantidade: '5 kg', validade: '2026-10-10', retirada: '18h às 20h', doador: 'Padaria Central' },
      { alimento: 'Frutas variadas', tipo: 'Frutas e verduras', quantidade: '12 kg', validade: '2026-10-09', retirada: '14h às 16h', doador: 'Mercearia Bom Preço' },
      { alimento: 'Marmitas prontas', tipo: 'Refeições prontas', quantidade: '30 unidades', validade: '2026-10-08', retirada: '21h às 22h', doador: 'Restaurante Sabor Caseiro' },
    ]
    exemplos.forEach((e) => db.salvarDoacao(e))
    window.location.reload()
  }

  return (
    <button onClick={popular} className="text-sm text-green-700 underline mt-6">
      Carregar doações de exemplo (para demonstração)
    </button>
  )
}