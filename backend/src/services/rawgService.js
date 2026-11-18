const RAWG_API_KEY = process.env.RAWG_API_KEY;

export async function getGamesFromRawg(search) {
    let url = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`
    if(search){
        url += `&search=${encodeURIComponent(search)}`
    }
    const response = await fetch(url) 
    if(!response.ok) {
        throw new Error("Erro ao consultar a RAWG")
    }
    const data = await response.json()
    return data
}