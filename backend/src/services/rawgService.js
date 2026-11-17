const RAWG_API_KEY = process.env.RAWG_API_KEY;

export async function getGamesFromRawg() {
    const response = await fetch(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}`) 
    if(!response.ok) {
        throw new Error("Erro ao consultar a RAWG")
    }
    const data = await response.json()
    return data
}