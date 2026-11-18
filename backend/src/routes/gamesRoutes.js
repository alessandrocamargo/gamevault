import { Router } from "express";
import { getGamesFromRawg } from "../services/rawgService.js";


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

export default router