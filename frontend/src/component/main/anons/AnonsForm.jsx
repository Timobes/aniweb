import { Link } from "react-router-dom"

function AnonsForm() {
    return (  
        <>
            <Link to="/anons/1">
                <div class="preview-block">
                    <img src="./img/anons.jpg" alt="" className="preview-img" />
                    <p class="preview-name">Анонс нового сезона Семь смерных грехов</p>
                </div>
            </Link>
        </>
    );
}

export default AnonsForm;