import { useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import axios from "axios"
import { useSelector} from 'react-redux'
import Search from "./search/Search"
import Admain from "../main/adpanel/Admain"


function Header() {
    const [data, setData] = useState()

    const status = useSelector((state) => state.auth.value)

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/user/profile", {
                withCredentials: true
            })
            
            .then((response) => {
                setData(response.data)
            })
            
            .catch((error) => {
                console.log('Ошибка : ',error)
            })
    },[status])


    return (  
        <>
            <header className="header">
                <div className="logo">
                    <Link to="/main">アニ AniWeb</Link>
                </div>

                <Search />
                
                <div className="profile">
                        {data 
                            ?<Link to="/profile" >{data.username}</Link>
                            :<><Link to={"/reg"}>Регистрация</Link><div> - </div><Link to={"/auth"}>Авторизация</Link></>
                        }
                </div>

                <div className="">
                    <Link to="/Catalog">Catalog</Link>
                    <hr />
                    <Link to="/users">Users</Link>
                </div>

                <div>
                    <Link to="/adminpanel">admin panel</Link>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Header;
