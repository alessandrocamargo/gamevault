export default function ErrorMessage({message}) {
    return (
        <section role="alert" className="border border-primary rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-ink-primary">Ops! Algo deu errado.</h2>
            <p className="text-ink-secondary mt-2">{message}</p>
        </section>
    )
}