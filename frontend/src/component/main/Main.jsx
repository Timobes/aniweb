import Anime from "./anime/Anime";
import Anons from "./anons/Anons";
import News from "./news/News";

function Main() {
    return (
        <>
            <div className="main">

                <div class="block-name">Новинки</div>
                
                <Anime />
                
                <div class="block-name">Новости</div>
                
                <News />

                <div class="block-name">Анонсы</div>
                
                <Anons />
            </div>  
        </>

    );
}

export default Main;