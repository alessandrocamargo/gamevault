import { useParams, Link } from "react-router"
import NotFoundPage from "./NotFoundPage"
import { useState, useEffect } from "react"
import { getGameBySlug } from "../services/gameService"
import Loading from "../components/Loading"
import ErrorMessage from "../components/ErrorMessage"

export default function GameDetailsPage() {

    const { slug } = useParams()


    const [game,setGame] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
            let ignore = false
            async function loadDetails() {
                setIsLoading(true)
                setError(null)
                setGame(null)
                try {
                    const result = await getGameBySlug(slug)
                    if(!ignore){
                        setGame(result)
                    }
                } catch (err) {
                    if(!ignore){
                        setError("Algum Cheater bagunçou os dados. Tente novamente mais tarde")
                    }
                } finally {
                    if(!ignore){
                        setIsLoading(false)
                    }
                }
            }
            loadDetails()
            return () => {
                ignore = true
            }
        }, [slug])


    if(isLoading) {
        return <Loading />
    }

    if (error) {
        return <ErrorMessage message={error} />
    }

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