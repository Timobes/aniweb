import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Addbook() {
    
    const {id} = useParams()
    const [data, setData] = useState([])

    const add = () => {
        axios 
            .post(`http://localhost:8080/api/book/book/${id}`,{}, {
                withCredentials: true
            })

            .then(response => {
                setData(response.data)   
                alert('Вы добавили аниме в закладку!')                 
            })

            .catch(err => {
                console.log(err)
            })
    }
    
    console.log(data)
    
    return (  
        <>
            <button className="bookmarks" onClick={add}>Добавить в избранное</button>
        </>
    );
}

export default Addbook;