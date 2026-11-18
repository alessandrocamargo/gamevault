import { games, featuredGames } from "../data/games"

export async function getGames(ordering = null) {
   let url = "/api/games"
   if(ordering){
    url += `?ordering=${encodeURIComponent(ordering)}`
   }
   const response = await fetch(url)
   const data = await response.json()

   const normalizedGames = data.results.map((game) => {
    return {
        id: game.id,
        title: game.name,
        slug: game.slug,
        cover: game.background_image,
        genre: game.genres?.[0]?.name ?? "Não informado",
        platforms: (game.platforms ?? []).map((item) => {
            return item.platform.name
        })
    }
   })
   


   return normalizedGames
}

export async function getGameBySlug(slug) {
    const response = await fetch(`/api/games/${encodeURIComponent(slug)}`)
    if(!response.ok){
        if(response.status === 404){
            return null
        }
        else{
            throw new Error("Erro ao consultar os detalhes do jogo")
        }
    }
    const data = await response.json()
    const normalizedGame = {
        title: data.name,
        cover: data.background_image,
        description: data.description_raw,
        genre: data.genres?.[0]?.name ?? "Não informado",
        platforms: (data.platforms ?? []).map((item) => {
            return item.platform.name
        })
    }
    return normalizedGame
}

export function getFeaturedGames(){
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(featuredGames)
        },2000)
    })
}