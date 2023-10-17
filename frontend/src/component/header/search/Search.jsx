import axios from "axios";
import { useEffect, useState } from "react";

function Search() {
    
    const [anese, setAnise] = useState()
    const [anime, setAnime] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/anime/anime')
            .then(response => {
                setAnime(response.data)
            })

            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(anese)
    
    // const re = /(anese+?)/ 
    // const res = anime.filter((anese) => new RegExp())
    function test(e) {
        setAnise(e.target.value)

        if(anese == "Магическая "){
            // console.log('magick')
            return <h1>Magick!</h1>
        }   
    }

    return (  
        <div className="search">
            <input type="text" placeholder="Поиск" onChange={e => test(e)}/>
            {/* <img src="" alt="" /> */}
            {
                anime.map((ani) => 
                    <ul key={ani.id}>
                        {/* <li>{ani.name}</li> */}
                    </ul>
                )
            }
        </div>
    );
}

export default Search;