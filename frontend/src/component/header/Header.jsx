import { Link, Outlet } from "react-router-dom"

function Header() {
    return (  
        <>
            <header className="header">
                <div class="logo">
                    <Link to="/main">アニ AniWeb</Link>
                </div>

                <div class="search">
                    <input type="text" placeholder="Поиск" />
                    <img src="" alt="" />
                </div>

                <div class="profile">
                    <Link to="/profile">Profile</Link>
                </div>

                <div class="burger">
                    <Link to="/Catalog">Catalog</Link>
                </div>
            </header>

            <Outlet />
        </>
    );
}

export default Header;