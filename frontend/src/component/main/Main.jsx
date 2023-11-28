import Mainanime from "./anime/Mainanime";
import Anons from "./anons/Anons";
import News from "./news/News";

function Main() {
    return (
        <>
            <div className="main">

                <div className="block-name">Новинки</div>
                
                <Mainanime />
                
                <div className="block-name">Новости</div>
                
                <News />

                <div className="block-name">Анонсы</div>
                
                <Anons />
            </div>  
        </>
    );
}

export default Main;