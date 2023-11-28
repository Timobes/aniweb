import { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Exit() {
    const [data, setdata] = useState([]);
    const nav = useNavigate()

    const click = () => {

        let vop = window.confirm("Вы хотите выйти?");

        if(vop) {
            axios
            .get('http://localhost:8080/api/auth/exit',{
                withCredentials: true
            })
            .then((response) => {
                nav('/main')
                setdata(response.data);
                window.location.reload()

            })
            .catch((error) => {
                console.log('Ошибка : ',error)
            })
        }
        else{
            console.log('Отмена выхода')
        }
    }; 

    console.log('data = ',data)
    
    return (  
        <div>
            <button onClick={click}>Выйти</button>
        </div>
    );
}

export default Exit;