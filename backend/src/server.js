import express from "express"
import gamesRoutes from "./routes/gamesRoutes.js"

const app = express()
const PORT = 3000

app.use("/api/games", gamesRoutes)


app.listen(PORT, () => {
    console.log("Servidor GameVault rodando na porta 3000")
})



