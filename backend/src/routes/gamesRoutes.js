import { Router } from "express";
import { getGamesFromRawg } from "../services/rawgService.js";


const router = Router()

router.get("/", async (req, res) => {
    try{
        const data = await getGamesFromRawg()
        res.json(data) 
    }catch (err){
        res.status(502).json({
            message: "Não foi possivel consultar os jogos"
        })
    }
})

export default router