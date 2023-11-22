import { useState } from "react";
import axios from 'axios'

function Exit() {
    const [data, setdata] = useState([]);

    const click = () => {

        let vop = window.confirm("Вы хотите выйти?");

        if(vop) {
            axios
            .get('http://localhost:8080/api/user/exit',{
                withCredentials: true
            })
            .then((response) => {
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