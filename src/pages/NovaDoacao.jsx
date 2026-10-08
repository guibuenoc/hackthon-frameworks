import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../services/storage'
import FormCampo from '../components/FormCampo'
import Botao from '../components/Botao'
import Selecao from '../components/Selecao'

export default function NovaDoacao() {
  const navegar = useNavigate()
  const [form, setForm] = useState({
    alimento: '',
    tipo: 'Frutas e verduras',
    quantidade: '',
    validade: '',
    retirada: '',
    doador: '',
  })
  const [erro, setErro] = useState('')

  const mudar = (campo) => (e) => setForm({ ...form, [campo]: e.target.value })

  const enviar = (e) => {
    e.preventDefault()
    if (new Date(form.validade) < new Date()) {
      setErro('A validade não pode ser no passado')
      return
    }
    setErro('')
    db.salvarDoacao(form)
    navegar('/doacoes')
  }

  return (
    <div className="max-w-lg mx-auto p-8">
      <h1 className="text-3xl font-bold text-green-800">Nova doação</h1>
      {erro && <p className="mt-4 bg-red-100 text-red-700 p-3 rounded-lg">{erro}</p>}
      <form onSubmit={enviar} className="mt-6 bg-white p-6 rounded-xl shadow">
        <FormCampo label="Alimento" valor={form.alimento} aoMudar={mudar('alimento')} />
        <Selecao
          label="Tipo de alimento"
          valor={form.tipo}
          aoMudar={mudar('tipo')}
          opcoes={['Frutas e verduras', 'Padaria', 'Refeições prontas', 'Não perecíveis', 'Bebidas']}
        />
        <FormCampo label="Quantidade (kg ou unidades)" valor={form.quantidade} aoMudar={mudar('quantidade')} />
        <FormCampo label="Validade" tipo="date" valor={form.validade} aoMudar={mudar('validade')} />
        <FormCampo label="Horário de retirada" valor={form.retirada} aoMudar={mudar('retirada')} />
        <FormCampo label="Seu nome ou do local" valor={form.doador} aoMudar={mudar('doador')} />
        <Botao>Publicar doação</Botao>
      </form>
    </div>
  )
}