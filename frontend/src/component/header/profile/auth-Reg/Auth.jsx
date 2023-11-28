import { useState } from "react";
import axios from 'axios'

function Auth() {

    const [data, setData] = useState([])
    const [email, setEmail] = useState()
    const [passwords, setPasswords] = useState()

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
                    window.location.reload()

                    setData(response.data)
                })

                .catch((error) =>  {
                    console.log('Ошибка : ',error)
                })
      }
      console.log('email, password = ', email, passwords)
      
    return (  
        <div className="">
            <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} /> <br />
            <input type="password" placeholder="password" onChange={e => setPasswords(e.target.value)} /> <br />
            <div className="" >
                {data}
            </div>

            <input type="button" value={"отправить"} onClick={submit}/>
        </div>
    );
}

export default Auth;