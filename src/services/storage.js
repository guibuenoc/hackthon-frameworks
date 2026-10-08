const ler = (chave) => JSON.parse(localStorage.getItem(chave)) || []
const salvar = (chave, dados) => localStorage.setItem(chave, JSON.stringify(dados))

export const db = {
  usuarios: () => ler('cs_usuarios'),
  salvarUsuario: (u) => { const l = ler('cs_usuarios'); l.push({ id: Date.now(), ...u }); salvar('cs_usuarios', l) },
  doacoes: () => ler('cs_doacoes'),
  salvarDoacao: (d) => { const l = ler('cs_doacoes'); l.push({ id: Date.now(), status: 'disponivel', ...d }); salvar('cs_doacoes', l) },
  reservarDoacao: (id, coletor) => {
    const l = ler('cs_doacoes').map(d => d.id === id ? { ...d, status: 'reservada', coletor } : d)
    salvar('cs_doacoes', l)
  },
  coletarDoacao: (id) => {
    const l = ler('cs_doacoes').map(d => d.id === id ? { ...d, status: 'coletada' } : d)
    salvar('cs_doacoes', l)
  },
}