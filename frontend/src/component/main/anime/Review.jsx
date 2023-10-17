import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Delrev from "./Delrev";

function Review() {
    const { id } = useParams()
    const [data, setData] = useState([])

    const status = useSelector((state) => state.isrev.value)

    console.log(status)
    
    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/anime/anime/rev/${id}`)
            
            .then((response) => {
                setData(response.data)
                console.log(data)
            })
            
            .catch((error) => {
                console.log('Ошибка : ',error)
            })
    }, [status])

    return (  
        <>
            {
                data.map((rev) => 
                    <div key={rev.id}>
                        <h3>{rev.username}</h3>
                        <h3>{rev.review}</h3>
 
                        <Delrev id={rev.id}/>
                    </div>
                )
            }
        </>
    );
}

export default Review;