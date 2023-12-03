import { useState } from "react";
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {addauth} from '../../../../state/slice/authSlice' 
// import { useNavigate } from "react-router-dom";

function Auth() {

    const [data, setData] = useState([])
    const [email, setEmail] = useState()
    const [passwords, setPasswords] = useState()

    const status = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()

    console.log('status = ',status)
    // const nav = useNavigate()

        const submit = () => { 
            axios
                .post("http://localhost:8080/api/auth/auth", {
                    headers: {
                        "Content-type": "application/json",
                    },
                    email: email,
                    passwords: passwords,
                }, 
                {withCredentials: true})

                .then((response) => {
                    // window.location.reload()
                    // nav('/profile')
                    setData(response.data)
                    console.log(response)

                    if(response.status === 200) {
                        dispatch(addauth())
                    }
                })

                .catch((error) =>  {
                    console.log('Ошибка : ',error)
                })
      }
      console.log('email, password = ', email, passwords)
      
    return (  
        <div className="">
            {status 
                ?
                    <h1>Вы авторизованы!</h1>
                :                     
                    <div className="">
                        <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} /> <br />
                        <input type="password" placeholder="password" onChange={e => setPasswords(e.target.value)} /> <br />
                        <div className="" >
                            {data}
                        </div>

                        <input type="button" value={"отправить"} onClick={submit}/>
                    </div>
            }
        </div>
    );
}

export default Auth;