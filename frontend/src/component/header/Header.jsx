import {Link, Outlet } from "react-router-dom"
import Main from "../main/Main";

function Header() {
    return (  
        <>
            <header className="header">
                <Link to="/main">Header</Link>
                <Link to="/profile">Profile</Link>
                
                <Outlet />
            </header>
        </>
    );
}

export default Header;