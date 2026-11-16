import { games } from "../data/games"

export function getGames() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(games)
        },2000)
    })
}