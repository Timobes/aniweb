import { useState } from "react";
import axios from 'axios'
// import { useNavigate } from "react-router-dom";

function Auth() {

    const [data, setData] = useState([])
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    // const navigate = useNavigate()

        const submit = () => { 
            axios
            .post("http://localhost:8080/api/user/auth", {
                headers: {
                    "Content-type": "application/json",
                },
                email: email,
                password: password,
            }, 
            {withCredentials: true})

            .then((response) => {
                setData(response.data)

                // if(response.status === 200){
                //     // navigate('/main')
                // }
            })

            .catch((error) =>  {
                console.log('Ошибка : ',error)
            })
      }
      console.log('email, password = ', email, password)
      
    return (  
        <div className="">
            <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} /> <br />
            <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} /> <br />
            <div className="" >
                {data}
            </div>

            <input type="button" value={"отправить"} onClick={submit}/>
        </div>
    );
}

export default Auth;