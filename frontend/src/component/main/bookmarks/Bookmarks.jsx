import { useState,useEffect } from "react"
import {Link} from "react-router-dom"
import axios from "axios"

function Bookmarks() {
    const[data, setData] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/book/book`, {
                withCredentials: true
            })
            
            .then((response) => {
                setData(response.data)
            })
            
            .catch((error) => {
                console.log('Ошибка : ',error)
            })
    }, [])
    
    console.log(data)

    return (  
        <>
            {data.map((book) =>
                <Link to={`/catalog/${book.id}`}> 
                    <div className="anime-block">
                        <img src={book.animeurl} alt="" className="anime-img" />
                        <p className="anime-name">{book.name}</p>
                    </div>
                </Link>
            )}
        </>
    );
}

export default Bookmarks;