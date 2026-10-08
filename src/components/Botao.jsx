export default function Botao({ children, tipo = 'submit', cor = 'bg-green-700' }) {
    return (
        <button
            type={tipo}
            className={`${cor} text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90`}
        >
            {children}
        </button>
    )
}