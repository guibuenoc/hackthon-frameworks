export default function validaTelefone(telefone) {
    const limpo = telefone.replace(/\D/g, '')
    return limpo.length >= 10 && limpo.length <= 11
}