import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { sendrev } from "../../../state/slice/isrevSlice";

function Sendview() {
    const { id } = useParams()

    const [data, setData] = useState([])
    const [rev, setRev] = useState()

    const dispatch = useDispatch()

    const submit = () => {
        axios.post(`http://localhost:8080/api/anime/anime/rev/${id}`, {
            review: rev
        }, 
        {withCredentials: true})
        
        .then((response) => {
            setData(response)
            dispatch(sendrev(rev))
        })

        .catch((err) => {
            console.log(err)
        })
    }

    console.log('id = ',id, "text = ", rev, "data = ", data)

    return (  
        <>
            <input type="text" onChange={e => setRev(e.target.value)}/>

            <input type="submit" onClick={submit} value={"Оставить отзыв"}/>
        </>
    );
}

export default Sendview;