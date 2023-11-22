import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

// import App from "./App";
import Main from "./component/main/Main";
import Profile from "./component/header/profile/Profile";
import Catalog from "./component/main/Catalog";
import OneAnime from "./component/main/anime/OneAnime";
import Header from "./component/header/Header";
import AniNews from "./component/main/news/AniNews";
import AniAnons from "./component/main/anons/AniAnons";



function Rout() {
    return (  
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />} >
                    <Route path="/main" element={<Main/>} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/catalog" element={<Catalog />} />

                    <Route path="/catalog/:id" element={<OneAnime />} />

                    <Route path="/news/:id" element={<AniNews />} />
                    
                    <Route path="/anons/:id" element={<AniAnons />} />
                    
                    <Route path="*" element={<h1>Error!!!</h1>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rout;