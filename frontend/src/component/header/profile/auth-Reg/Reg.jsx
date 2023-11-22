import { useState } from "react";
import axios from 'axios'

function Reg() {
    const [data, setData] = useState([])
    const [nickname, setNickname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [age, setAge] = useState()

    const submit = () => {
        axios
            .post("http://localhost:8080/api/user/reg", {
                nickname: nickname,
                email: email,
                password: password,
                age: age
            })            
            
            .then((response) => {
                console.log(response)
                setData(response)
                // window.location.reload()
            })
            
            .catch((error) => {
                console.log('Ошибка : ',error)
            })
    }; 

    return (  
        <div className="">
            <input type="text" placeholder="nickname" onChange={e => setNickname(e.target.value)} /> <br />
            <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} /> <br />
            <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} /> <br />
            <input type="number" placeholder="age" onChange={e => setAge(e.target.value)} /> <br />
            <div className="" >
                {data.data}
            </div>

            <input type="button" value={"отправить"} onClick={submit}/>
        </div>
    );
}

export default Reg;