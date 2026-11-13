import { NavLink, Link } from "react-router"

export default function Header(){
    return(
        <header className="bg-surface p-4 flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
            <Link to="/" aria-label="GameVault - Página inicial">
                <img src="/images/game-vault-logo.png" alt="GameVault" className="w-40 h-auto object-contain" />
            </Link>
            <nav className="flex gap-6 text-ink-secondary [&_a:hover]:text-brand [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-brand">
                <NavLink to="/" className={getNavLinkClass}>Início</NavLink>
                <NavLink to="/games" className={getNavLinkClass}>Games</NavLink>
            </nav>
        </header>
    )
}

function getNavLinkClass({ isActive }){
    return isActive
        ? "text-ink-primary font-semibold border-b-2 border-brand"
        : "text-ink-secondary border-b-2 border-transparent"
}