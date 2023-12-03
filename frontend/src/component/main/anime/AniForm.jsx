import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { getAllAnime } from "../../api";

function AniForm() {

    const [data, setData] = useState([])


    useEffect(() => {
        getAllAnime()
            .then(response => {
                setData(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // console.log('data =', data[0].id)

    return (  
        <div className="new">
            {
                data.map((anime) => 
                    <Link to={`/catalog/${anime.id}`} key={anime.id}>
                        <div className="anime-block">
                            <img src={anime.animeurl} alt="" className="anime-img" />
                            <p className="anime-name">{anime.name}</p>
                        </div>
                    </Link> 
                )
            }
        </div>
    );
}

export default AniForm;