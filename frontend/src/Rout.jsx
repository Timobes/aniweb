import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

// import App from "./App";
import Main from "./component/main/Main";
import Profile from "./component/header/profile/Profile";
import Header from "./component/header/Header";



function Rout() {
    return (  
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />} >
                    <Route path="/main" element={<Main/>} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
                
                <Route path="*" element={<h1>Error!!!</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rout;