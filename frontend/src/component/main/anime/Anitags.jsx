import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Anitags() {
    const {id} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/tag/anitags/${id}`)
            
            .then((response) => {
                setData(response.data)
            })
            
            .catch((error) => {
                console.log('Ошибка : ',error)
            })
    }, [id])

    return (  
        <>
            {
            data.map((tag) => 
                    <div>{tag.tags}</div>
                )
            }
        </>
    );
}

export default Anitags;