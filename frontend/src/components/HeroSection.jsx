import { Link } from "react-router"

export default function HeroSection(){
    return(
        <section className="bg-background px-6 py-12 md:py-20 space-y-4 max-w-3xl mx-auto">
            <h1 className="text-ink-primary text-3xl md:text-4xl font-bold leading-tight">Seu próximo jogo favorito começa aqui</h1>
            <p className="text-ink-secondary">Explore jogos, descubra novas aventuras e encontre sua próxima experiência.</p>
            <Link to="/games" className="bg-primary text-white px-6 py-3 rounded-[10px] inline-block hover:bg-primary-hover transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Explorar jogos</Link>
        </section>
    )
}