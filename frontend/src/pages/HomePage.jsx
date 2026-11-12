import HeroSection from "../components/HeroSection"
import GameCard from "../components/GameCard"
import { featuredGames } from "../data/games"

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <section className="max-w-6xl mx-auto px-6">
                <h2 className="text-ink-primary text-2xl mb-6">Jogos em destaque</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        featuredGames.map((game) => {
                            return <GameCard key={game.id} game={game} />
                    })
                }
                </div>
            </section>
        </main>
    )
}