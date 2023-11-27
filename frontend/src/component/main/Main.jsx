import Anime from "./anime/Anime";
import Anons from "./anons/Anons";
import News from "./news/News";

function Main() {
    return (
        <>
            <div className="main">

                <div className="block-name">Новинки</div>
                
                <Anime />
                
                <div className="block-name">Новости</div>
                
                <News />

                <div className="block-name">Анонсы</div>
                
                <Anons />
            </div>  
        </>

    );
}

export default Main;