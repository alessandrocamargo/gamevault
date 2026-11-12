import Header from "./components/Header"
import {Routes, Route} from "react-router"
import HomePage from "./pages/HomePage"
import GamesPage from "./pages/GamesPage"
import GameDetailsPage from "./pages/GameDetailsPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/:slug" element={<GameDetailsPage />} />
        

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
