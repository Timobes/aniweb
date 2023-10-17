import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Createanime() {
    const [data, setData] = useState()
    const [aniID, setAniID] = useState()

    const [animeurl, setAnimeurl] = useState()
    const [studiourl, setStudiourl] = useState()
    const [name, setName] = useState()
    const [altername, setAltername] = useState()
    const [desc, setDesc] = useState()
    const [rating, setRating] = useState()
    const [numep, setNumep] = useState()
    const [dates, setDates] = useState()

    const nav = useNavigate()
 
    const submit = () => {
        axios
            .post("http://localhost:8080/api/anime/create", {
                animeurl: animeurl,
                studiourl: studiourl,
                name: name,
                altername: altername,
                description: desc,
                rating: rating,
                numep: numep,
                dates: dates
            }, 
            {withCredentials: true})
            
            .then((response) => {
                setData(response.data)
                console.log(data)
                setAniID(data.id)
                console.log(data.id)

                nav('/adminpanel/loadtags')

            })
            .catch((err) => {
                console.log('Ошибка : ',err)
            })
    }; 


    return (  
        <>
            <input type="url" placeholder="anime url" onChange={e => setAnimeurl(e.target.value)}/> <br />
            <input type="url" placeholder="studio url" onChange={e => setStudiourl(e.target.value)}/><br />
            <input type="text" placeholder="name" onChange={e => setName(e.target.value)}/><br />
            <input type="text" placeholder="alter name" onChange={e => setAltername(e.target.value)}/><br />

            <input type="text" placeholder="desc" onChange={e => setDesc(e.target.value)}/><br />
            <input type="number" placeholder="reting" onChange={e => setRating(e.target.value)}/><br />
            <input type="number" placeholder="num ep" onChange={e => setNumep(e.target.value)}/><br />
            <input type="date" placeholder="dates" onChange={e => setDates(e.target.value)}/><br />

            <input type="button" value={'Создать аниме'} onClick={submit}/>

            {/*<h1>{data}</h1>*/}
        </>
    );
}

export default Createanime;