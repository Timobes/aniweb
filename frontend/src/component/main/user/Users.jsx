import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { getAllAnime } from "../../api";
import axios from "axios";

function AniForm() {

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8080/api/user/users')
            .then(response => {
                setData(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [data])

    return (  
        <>
            {
                data.map((users) => 
                    <ul key={users.id}>
                        <li>{users.id} = {users.username}, {users.email}, {users.bio}, {new Date(users.dates).toLocaleDateString()}</li>
                    </ul>
                )
            }
        </>
    );
}

export default AniForm;