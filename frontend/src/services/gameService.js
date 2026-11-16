import { games, featuredGames } from "../data/games"

export function getGames() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(games)
        },2000)
    })
}

export function getGameBySlug(slug) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const game = games.find((item) => {
                return item.slug === slug
            })
            resolve(game)
        }, 2000)
    })
}

export function getFeaturedGames(){
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(featuredGames)
        },2000)
    })
}