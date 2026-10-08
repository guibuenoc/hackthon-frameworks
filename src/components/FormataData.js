export default function formataData(data) {
    if (!data) return ''
    const partes = data.split('-')
    if (partes.length !== 3) return data
    const [ano, mes, dia] = partes
    return `${dia}/${mes}/${ano}`
}