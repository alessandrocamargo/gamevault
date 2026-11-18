const RAWG_API_KEY = process.env.RAWG_API_KEY;

export async function getGamesFromRawg(search, ordering = null) {
    let url = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`
    if(search){
        url += `&search=${encodeURIComponent(search)}`
    }
    if(ordering){
        url += `&ordering=${encodeURIComponent(ordering)}`
    }
    const response = await fetch(url) 
    if(!response.ok) {
        throw new Error("Erro ao consultar a RAWG")
    }
    const data = await response.json()
    return data
}

export async function getGameDetailsFromRawg(slug){
    const url = `https://api.rawg.io/api/games/${encodeURIComponent(slug)}?key=${RAWG_API_KEY}`
    const response = await fetch(url)
    if(!response.ok){
        if(response.status === 404){
            const error = new Error("Jogo não encontrado")
            error.status = 404
            throw error
        }
        else{
            throw new Error("Erro ao consultar os detalhes do jogo")
        }
    }
    const data = await response.json()

    return data
}