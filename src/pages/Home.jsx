import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <section className="text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">
          Conecta Sobras
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Todo ano toneladas de comida boa vão pro lixo enquanto tem gente
          passando fome. A gente conecta quem tem comida sobrando a quem
          precisa dela, na hora certa.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/nova-doacao"
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800"
          >
            Quero doar
          </Link>
          <Link
            to="/doacoes"
            className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50"
          >
            Preciso receber
          </Link>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-green-800">ODS 2: Fome Zero</h3>
          <p className="mt-2 text-gray-600">
            Comida que seria descartada vira refeição pra quem precisa.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-green-800">ODS 12: Consumo Responsável</h3>
          <p className="mt-2 text-gray-600">
            Menos desperdício, mais aproveitamento do que já foi produzido.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-green-800">Impacto real</h3>
          <p className="mt-2 text-gray-600">
            Cada quilo salvo equivale a cerca de 2 refeições completas.
          </p>
        </div>
      </section>
    </div>
  )
}