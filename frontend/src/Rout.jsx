import {BrowserRouter, Route, Routes} from "react-router-dom";

import Main from "./component/main/Main";
import Profile from "./component/header/profile/Profile";
import Catalog from "./component/main/Catalog";
import OneAnime from "./component/main/anime/OneAnime";
import Header from "./component/header/Header";
import AniNews from "./component/main/news/AniNews";
import AniAnons from "./component/main/anons/AniAnons";
import Reg from "./component/header/profile/auth-Reg/Reg";
import Auth from "./component/header/profile/auth-Reg/Auth";
import Review from "./component/main/anime/Review";
import Addbook from "./component/main/bookmarks/Addbook";
import Bookmarks from "./component/main/bookmarks/Bookmarks";
import Anitags from "./component/main/anime/Anitags";

function Rout() {
    return (  
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />} >
                    <Route path="/main" element={<Main/>} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/catalog" element={<Catalog />} />

                    <Route path="/catalog/:id" element={<OneAnime />} />
                    <Route path="/catalog/:id" element={<Review />} />
                    <Route path="/catalog/:id" element={<Addbook />} />
                    <Route path="/catalog/:id" element={<Anitags />} />
                    
                    <Route path="/news/:id" element={<AniNews />} />
                    
                    <Route path="/anons/:id" element={<AniAnons />} />

                    <Route path="/reg" element={<Reg />} />
                    <Route path="/auth" element={<Auth />} />

                    <Route path="/bookmarks" element={<Bookmarks />} />
                    
                    <Route path="*" element={<h1>Error!!!</h1>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rout;