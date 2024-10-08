import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getOneAnime } from "../../api";
import axios from "axios";
import Review from "./Review";
import Addbook from "../bookmarks/Addbook";
import Anitags from "./Anitags";
import Sendview from "./SendReview";

function OneAnime() {

    const {id} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/anime/anime/${id}`)
            
            .then((response) => {
                setData(response.data)
                console.log(data)
            })
            
            .catch((error) => {
                console.log('Ошибка : ',error)
            })
    }, [])


    return (  
        <>       
            <div className="oneanime">
                <div className="aniname">{data.name}</div>
                    
                <img src={data.animeurl} alt="" className="animg" />
                
                <Addbook />

                <div className="info">
                    
                    <p>Информация</p>

                    <div className="genres">Жанры: <Anitags /></div>
                    <div className="year">Дата выхода: {new Date(data.dates).toLocaleDateString()}</div>

                    <div className="col-anime">Кол-во эпизодов: {data.numep}</div>
                    <div className="rating">Рейтинг: {data.rating}</div>
                    <div className="alt-name">Альтернативные названия: {data.altername}</div>
                </div>

                <div className="studio">
                    <p>Студия</p>
                    <img src={data.studiourl} alt="" className="studio-img" />
                </div>

                <div className="desc">
                    <h1>Описание</h1>
                    <p>{data.description}</p>
                </div>

                <div className="rew-h">Оставить отзыв</div>
                <Sendview />

                <div className="rew-h">Отзывы</div>
                <Review />

            </div>
        </>
    );
}

export default OneAnime;