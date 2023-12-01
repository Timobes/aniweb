import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

function Deletebook() {
    const { id } = useParams()
    const [data, setdata] = useState([]);

    const click = () => {

        let vop = window.confirm("Вы хотите удалить закладку?");

        if(vop) {
            axios
            .delete(`http://localhost:8080/api/book/del/book/${id}`)
            .then((response) => {
                setdata(response.data);
            })
            .catch((error) => {
                console.log('Ошибка : ',error)
            })
        }
        else{
            console.log('Отмена удаления')
        }
    }; 

    return (  
        <div>
            <button onClick={click}>delete</button>
        </div>
        
    );
}

export default Deletebook;