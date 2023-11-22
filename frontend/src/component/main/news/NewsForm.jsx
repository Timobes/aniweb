import { Link } from "react-router-dom"

function NewsForm() {
    return (  
        <>
            <Link to="/news/1">
                <div className="post-block">
                    <img src="" alt="" className="post-img" />
                    <p className="post-name">Название</p>
                    <p className="post-desc">Описание</p>
                </div>
            </Link>
        </>
    );
}

export default NewsForm;