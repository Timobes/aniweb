import { useEffect, useState } from "react";
import axios from "axios";

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
                data.length > 0
                    ? 
                        data.map((user) => 
                            <>
                                <h2>Nickname = {user.username}</h2>
                                <h2>Email = {user.email}</h2>

                            </>
                        )
                    :
                        <h1>Вы не вошли в аккаунт!</h1>
            }
        </div>
    );
}

export default Profile;