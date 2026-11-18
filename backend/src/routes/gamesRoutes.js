import { Router } from "express";
import { getGamesFromRawg, getGameDetailsFromRawg } from "../services/rawgService.js";


const router = Router()

router.get("/", async (req, res) => {
    try{
        const search = req.query.search
        console.log("Pesquisa recebida:", search)
        const data = await getGamesFromRawg(search)
        console.log("Pesquisa recebida no serviço:", search)
        res.json(data) 
    }catch (err){
        res.status(502).json({
            message: "Não foi possivel consultar os jogos"
        })
    }
})

router.get("/:slug", async (req, res) => {
    const slug = req.params.slug
    try{
        const data = await getGameDetailsFromRawg(slug)
        res.json(data)
    }
    catch (err){
        const status = err.status ?? 502
         res.status(status).json({
            message: "Não foi possível consultar os detalhes do jogo"
        })
    }
})

export default router