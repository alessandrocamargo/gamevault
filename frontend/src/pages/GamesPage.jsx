import { useState } from "react"
import { featuredGames } from "../data/games"
import GameCard from "../components/GameCard"

export default function GamesPage(){

    //States
    const [search, setSearch] = useState("")
    const [genre, setGenre] = useState("")
    const [platform, setPlatform] = useState("")

    
    const hasActiveFilters = search!== "" || genre!== "" || platform!== ""


    //funções
    function handleClearFilters(){
        setGenre("")
        setSearch("")
        setPlatform("")  
    }

    //Filtros
    const filteredGames = featuredGames.filter((game) => {
        const matchesGenre = genre === "" || game.genre === genre
        const matchesSearch = game.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        const matchesPlatform = platform === "" || game.platforms.includes(platform)
        return matchesSearch && matchesGenre && matchesPlatform
    })

    return(
        <main className="max-w-6xl mx-auto px-6 py-12">
            <section className="space-y-4">
                <h1 className="text-3xl font-bold text-ink-primary">Explorar jogos</h1>
                <p className="text-ink-secondary">Descubra sua próxima aventura.</p>
                <input type="search" placeholder="Buscar jogos..." aria-label="Buscar jogos" className="w-full bg-surface border border-border rounded-[10px] px-4 py-3 text-ink-primary placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" value={search} onChange={(event) => setSearch(event.target.value)} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select className="w-full bg-surface border border-border rounded-[10px] px-4 py-3 text-ink-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" aria-label="Filtrar por gênero" value={genre} onChange={(event) => setGenre(event.target.value)}>
                    <option value="">Todos os gêneros</option>
                    <option value="RPG">RPG</option>
                    <option value="Aventura">Aventura</option>
                    <option value="Ação e Aventura">Ação e Aventura</option>
                </select>
                <select className="w-full bg-surface border border-border rounded-[10px] px-4 py-3 text-ink-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" aria-label="Filtrar por plataforma" value={platform} onChange={(event) => setPlatform(event.target.value)}>
                    <option value="">Todas as plataformas</option>
                    <option value="PC">PC</option>
                    <option value="PlayStation 5">PlayStation 5</option>
                    <option value="Xbox Series X|S">Xbox Series X|S</option>
                    <option value="Nintendo Switch">Nintendo Switch</option>
                </select>
                </div>
                {
                    hasActiveFilters && (<button type="button" onClick={handleClearFilters} className="text-accent hover:text-ink-primary transition-colors cursor-pointer">Limpar Filtros</button>)
                }
            </section>
            <section className="space-y-5 mt-4">
                <p className="text-ink-secondary"> Jogos encontrados: {filteredGames.length} </p>
                {
                    filteredGames.length === 0 
                    ? (
                        <div className="border border-border rounded-2xl p-8 text-center">
                            <h2 className="text-ink-primary text-xl font-semibold">Nenhum jogo encontrado</h2>
                            <p className="text-ink-secondary mt-2">Tente procurar com outro nome ou colocar uma parte dele.</p>
                        </div>
                    )
                    : <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            filteredGames.map((game) => {
                               return <GameCard key={game.id} game={game} />
                            })
                        }
                    </div>
                }
            </section>
        </main>
    )
}