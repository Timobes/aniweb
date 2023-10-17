import { useEffect, useState } from "react";
import axios from "axios";
import Bookmarks from "../../main/bookmarks/Bookmarks";
import Exit from "./auth-Reg/Exit";
import { useSelector} from 'react-redux'

function Profile() {
    const [data, setData] = useState([])
    const status = useSelector((state) => state.auth.value)

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/user/profile`, {
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
                status 
                    ? 
                        <>
                            <h2>Имя: {data.username}</h2>
                            <h2>Описание: {data.bio}</h2>
                            <h2>Дата регистрации: {new Date(data.dates).toLocaleDateString()}</h2>
                            <h2>Статус{
                                data.isadmin
                                    ? <h2>Админ</h2>
                                    : <h2>Пользователь</h2>
                            }</h2>


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