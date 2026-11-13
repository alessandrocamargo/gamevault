import { useParams, Link } from "react-router"
import { featuredGames } from "../data/games"
import NotFoundPage from "./NotFoundPage"


export default function GameDetailsPage() {

    const { slug } = useParams()
    const game = featuredGames.find((item) => {
        return item.slug === slug
    })

    if (!game) {
        return <NotFoundPage />
    }

    return (
        <main className="max-w-6xl mx-auto px-6 py-12">
            <Link to={"/games"} className="text-accent hover:text-ink-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">← Voltar ao catálogo</Link>
            <div className="grid grid-cols-1 md:grid-cols-[384px_1fr] gap-8 mt-6">
                <img src={game.cover} alt={`Capa de ${game.title}`} className="w-full max-w-sm rounded-2xl object-cover" />
                <div className="flex flex-col gap-4">
                    <h1 className="text-ink-primary text-3xl font-bold">{game.title}</h1>
                    <p className="text-ink-secondary">{game.description}</p>
                    <p className="text-accent text-sm font-medium">Gênero: {game.genre}</p>
                    <div className="flex flex-wrap gap-2">
                        {
                            game.platforms.map((platform) => {
                                return <span key={platform} className="bg-surface-elevated text-ink-secondary text-sm px-3 py-1 rounded-lg">{platform}</span>
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}