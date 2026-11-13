import {Link} from "react-router"

export default function NotFoundPage(){
    return(
        <main className="min-h-[80vh] flex flex-col items-center justify-center gap-4 px-4 text-center">
            <img src="/images/page-not-found.png" alt="Astronauta do GameVault explorando uma zona não mapeada" className="w-full max-w-xl h-auto object-contain" />
            <span className="text-accent text-7xl font-bold">404</span>
            <h1 className="text-ink-primary text-3xl font-bold">Zona não mapeada</h1>
            <p className="text-ink-muted text-base max-w-md text-ink-secondary">Parece que você entrou em uma área fora do mapa.</p>
            <Link to="/" className="bg-primary hover:bg-primary-hover text-ink-primary font-medium px-6 py-3 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                Voltar ao início
            </Link>
        </main>
    )
}