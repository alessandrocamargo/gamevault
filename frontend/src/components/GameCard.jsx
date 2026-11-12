import { Link } from "react-router"

export default function GameCard({game}){
    return(
        <Link to={`/games/${game.slug}`} className="bg-surface rounded-2xl overflow-hidden flex flex-col h-full hover:bg-surface-elevated transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            <img src={game.cover} alt={`Capa de ${game.title}`} className="w-full aspect-3/4 object-cover" />
            <div className="p-6 flex flex-col flex-1 gap-2">
                <h3 className="text-ink-primary text-xl font-semibold">{game.title}</h3>
                <p className="text-ink-secondary text-sm mt-auto">{game.genre}</p>
            </div>
        </Link>
    )
}