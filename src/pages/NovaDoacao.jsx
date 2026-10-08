import { useState } from 'react'
import { db } from '../services/storage'
import FormCampo from '../components/FormCampo'
import Botao from '../components/Botao'

export default function NovaDoacao() {
    const [form, setForm] = useState({
        alimento: '', quantidade: '', validade: '', retirada: '', doador: '',
    })
    const [salvo, setSalvo] = useState(false)

    const mudar = (campo) => (e) => setForm({ ...form, [campo]: e.target.value })

    const enviar = (e) => {
        e.preventDefault()
        if (new Date(form.validade) < new Date()) {
            alert('A validade não pode ser no passado')
            return
        }
        db.salvarDoacao(form)
        setSalvo(true)
        setForm({ alimento: '', quantidade: '', validade: '', retirada: '', doador: '' })
    }

    return (
        <div className="max-w-lg mx-auto p-8">
            <h1 className="text-3xl font-bold text-green-800">Nova doação</h1>
            {salvo && (
                <p className="mt-4 bg-green-100 text-green-800 p-3 rounded-lg">
                    Doação publicada! Ela já aparece na lista de doações.
                </p>
            )}
            <form onSubmit={enviar} className="mt-6 bg-white p-6 rounded-xl shadow">
                <FormCampo label="Alimento" valor={form.alimento} aoMudar={mudar('alimento')} />
                <FormCampo label="Quantidade (kg ou unidades)" valor={form.quantidade} aoMudar={mudar('quantidade')} />
                <FormCampo label="Validade" tipo="date" valor={form.validade} aoMudar={mudar('validade')} />
                <FormCampo label="Horário de retirada" valor={form.retirada} aoMudar={mudar('retirada')} />
                <FormCampo label="Seu nome ou do local" valor={form.doador} aoMudar={mudar('doador')} />
                <Botao>Publicar doação</Botao>
            </form>
        </div>
    )
}