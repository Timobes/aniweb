import { Link } from "react-router-dom"

function AniForm() {


    return (  
        <div className="new">
            <Link to="/catalog/1">
                <div className="anime-block">
                    <img src="" alt="" className="anime-img" />
                    <p className="anime-name">Name anime</p>
                </div>
            </Link>
        </div>
    );
}

export default AniForm;