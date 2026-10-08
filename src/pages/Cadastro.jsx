import { useState } from 'react'
import { db } from '../services/storage'
import FormCampo from '../components/FormCampo'
import Botao from '../components/Botao'
import validaTelefone from '../components/ValidaTelefone'

export default function Cadastro() {
    const [form, setForm] = useState({ nome: '', tipo: 'doador', email: '', telefone: '' })
    const [salvo, setSalvo] = useState(false)
    const [erro, setErro] = useState('')

    const mudar = (campo) => (e) => setForm({ ...form, [campo]: e.target.value })

    const enviar = (e) => {
        e.preventDefault()
        if (form.telefone && !validaTelefone(form.telefone)) {
            setErro('Telefone inválido. Use DDD + número, ex: 11999999999')
            return
        }
        setErro('')
        db.salvarUsuario(form)
        setSalvo(true)
        setForm({ nome: '', tipo: 'doador', email: '', telefone: '' })
    }

    return (
        <div className="max-w-lg mx-auto p-8">
            <h1 className="text-3xl font-bold text-green-800">Cadastro</h1>
            {salvo && (
                <p className="mt-4 bg-green-100 text-green-800 p-3 rounded-lg">
                    Cadastro realizado com sucesso!
                </p>
            )}
            {erro && (
                <p className="mt-4 bg-red-100 text-red-700 p-3 rounded-lg">{erro}</p>
            )}
            <form onSubmit={enviar} className="mt-6 bg-white p-6 rounded-xl shadow">
                <FormCampo label="Nome" valor={form.nome} aoMudar={mudar('nome')} />
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Tipo</label>
                    <select
                        value={form.tipo}
                        onChange={mudar('tipo')}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    >
                        <option value="doador">Doador (restaurante, mercado, pessoa)</option>
                        <option value="coletor">Coletor (ONG, cozinha comunitária)</option>
                    </select>
                </div>
                <FormCampo label="E-mail" tipo="email" valor={form.email} aoMudar={mudar('email')} />
                <FormCampo label="Telefone" valor={form.telefone} aoMudar={mudar('telefone')} obrigatorio={false} />
                <Botao>Cadastrar</Botao>
            </form>
        </div>
    )
}