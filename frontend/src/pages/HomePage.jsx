import HeroSection from "../components/HeroSection"
import GameCard from "../components/GameCard"
import { useState, useEffect } from "react"
import { getGames } from "../services/gameService"
import Loading from "../components/Loading"
import ErrorMessage from "../components/ErrorMessage"


export default function HomePage() {
    const [featuredGames, setFeaturedGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadFeaturedGames() {
            try {
                const result = await getGames("-added")
                const featuredGames = result.slice(0,6)
                setFeaturedGames(featuredGames)

            } catch (err) {
                setError("Desculpe mais o noob bangunçou tudo aqui e estamos arrumando. Tente novamente mais tarde")
            } finally {
                setIsLoading(false)
            }
        }
        loadFeaturedGames()
    }, [])
    return (
        <main>
            <HeroSection />
            <section className="max-w-6xl mx-auto px-6">
                <h2 className="text-ink-primary text-2xl mb-6">Jogos em destaque</h2>
                {
                    isLoading ? (<Loading />) : error ? (<ErrorMessage message={error} />)
                        : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {
                                    featuredGames.map((game) => {
                                        return <GameCard key={game.id} game={game} />
                                    })
                                }
                            </div>
                        )
                }
            </section>
        </main>
    )
}