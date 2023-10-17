import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { delrev } from "../../../state/slice/isrevSlice";



function Delrev(props) {
    const id = props.id
    const [data, setData] = useState()

    const dispatch = useDispatch()

    const sumbit = () => {
        axios.delete(`http://localhost:8080/api/anime/del/rev/${id}`, {withCredentials: true})
        .then((response) => {
            setData(response.data)
            dispatch(delrev(data))            
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (  
        <>
            <input type="button" value={"Удалить отзыв"} onClick={sumbit}/>
        </>
    );
}

export default Delrev;