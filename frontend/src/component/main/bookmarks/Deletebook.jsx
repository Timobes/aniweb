// import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { delbook } from "../../../state/slice/bookdelSlice";

function Deletebook(props) {
    // const { id } = useParams()
    const [data, setdata] = useState([]);

    const del = useSelector((state) => state.bookdel.value)
    const dispatch = useDispatch()
    
    console.log(props.id)

    const click = () => {

        let vop = window.confirm("Вы хотите удалить закладку?");

        if(vop) {
            axios
            .delete(`http://localhost:8080/api/book/del/book/${props.id}`,{withCredentials: true})
            .then((response) => {
                setdata(response.data);
                dispatch(delbook())
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