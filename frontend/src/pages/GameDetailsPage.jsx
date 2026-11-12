import { useParams } from "react-router"
import { featuredGames } from "../data/games"
import NotFoundPage from "./NotFoundPage"

export default function GameDetailsPage(){

    const { slug } = useParams()
    const game = featuredGames.find((item) => {
        return item.slug === slug
    })

    if(!game) {
        return <NotFoundPage />
    }

    return(
        <main>
            <h1 className="text-ink-primary">{game.title}</h1>
        </main>
    )
}