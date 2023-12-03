import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {addauth} from '../../../../state/slice/authSlice' 

function Reg() {
    const [data, setData] = useState([])

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [passwords, setPasswords] = useState()
    const [bio, setBio] = useState()
    const [dates] = useState(new Date()) 

    const nav = useNavigate()

    const status = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()

    const submit = () => {
        axios
            .post("http://localhost:8080/api/auth/reg", {
                username: username, 
                email: email, 
                passwords: passwords, 
                bio: bio, 
                dates: dates
            }, 
            {withCredentials: true})
            
            .then((response) => {
                console.log(response)
                setData(response)

                if(response.status === 200) {
                    dispatch(addauth())
                    nav('/profile')
                }
            })
            
            .catch((error) => {
                console.log('Ошибка : ',error)
            })
    }; 



    return (  
        <div className="">
            {
                status 
                    ? 
                        <h1>Вы авторизованы!</h1>
                    :
                        <div className="">
                            <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} /> <br />
                            
                            <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} /> <br />
                
                            <input type="password" placeholder="password" onChange={e => setPasswords(e.target.value)} /> <br />
                
                            <input type="text" placeholder="bio" onChange={e => setBio(e.target.value)} /> <br />
                            
                            <div className="" >
                                {data.data}
                            </div>
                
                            <input type="button" value={"отправить"} onClick={submit}/>
                        </div>
            }
        </div>
    );
}

export default Reg;