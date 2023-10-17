import { useState,useEffect } from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import Deletebook from "./Deletebook"
import { useSelector } from "react-redux"

function Bookmarks() {
    const[data, setData] = useState([])

    const del = useSelector((state) => state.bookdel.value)

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
    }, [del])
    
    console.log(data)

    return (  
        <>
            {data.map((book) =>
            <>    
                    <Link to={`/catalog/${book.id}`}> 
                        <div className="anime-block">
                            <img src={book.animeurl} alt="" className="anime-img" />
                            <p className="anime-name">{book.name}</p>
                        </div>
                    </Link>
                    <Deletebook id={book.id}/>
            </>
            )}
        </>
    );
}

export default Bookmarks;