import { useEffect, useState } from "react";
import axios from "axios";
import Bookmarks from "../../main/bookmarks/Bookmarks";
import {Link} from "react-router-dom"
import Exit from "./auth-Reg/Exit";

function Profile() {
    const [data, setData] = useState([])
    
    
    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/user/user/1`, {
                withCredentials: true
            })
            
            .then((response) => {
                setData(response.data)
            })
            
            .catch((error) => {
                console.log('Ошибка : ',error)
            })
    }, [])
    
    console.log('data = ',data)
    
    return (  
        <div>
            {
                data != null
                    ? 
                        <>
                            <h2>Имя: {data.username}</h2>
                            <h2>Описание: {data.bio}</h2>
                            <h2>Дата регистрации: {data.dates}</h2>
                            <Exit />
                            <Bookmarks />

                        </>
                    :
                        <h1>Вы не вошли в аккаунт!</h1>
                            
            }
        </div>
    );
}

export default Profile;