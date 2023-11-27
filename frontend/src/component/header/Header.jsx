import { useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import axios from "axios"

function Header() {

    const [data, setData] = useState()

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/auth/cook", {
                withCredentials: true
            })
            
            .then((response) => {
                setData(response.data)
            })
            
            .catch((error) => {
                console.log('Ошибка : ',error)
            })
    }, [])

    console.log(data)

    return (  
        <>
            <header className="header">
                <div class="logo">
                    <Link to="/main">アニ AniWeb</Link>
                </div>

                <div className="search">
                    <input type="text" placeholder="Поиск" />
                    <img src="" alt="" />
                </div>

                <div className="profile">
                    {
                        data 
                            ?
                                <Link to="/profile" data={data}>{data}</Link>
                            :
                                <h1>Вы не авторизированы!</h1>
                    }
                </div>

                <div className="burger">
                    <Link to="/Catalog">Catalog</Link>
                </div>
            </header>

            <Outlet />
        </>
    );
}

export default Header;