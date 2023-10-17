import axios from "axios";
import { useEffect, useState  } from "react";

function Reg() {

    // const [appState, setAppState] = useState();
  
    try {
        // make axios post request
        const response = await axios({
          method: "post",
          url: "/api/login",
          data: loginFormData,
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch(error) {
        console.log(error)
      }

    function reg() {

    }

    return (  
        <>
            <form action="">
                <input type="text" id="" name="nickname"/>
                <input type="email" id="" name="email"/>
                <input type="password" id="" name="password"/>
                <input type="number" id="" name="age"/>
                <input type="button" value="отправить" />
            </form>
        </>
    );
}

export default Reg;