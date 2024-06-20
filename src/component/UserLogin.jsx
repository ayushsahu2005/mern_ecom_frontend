import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserLogin=()=>{
    const [email, setEmail]= useState("");
    const [password, setPassword]=useState("");
   const navigate=useNavigate();
    const hadleSubmit=()=>{
    let   url="http://localhost:8000/user/usercheck";
        axios.post(url, {email:email, password:password}).then((res)=>{

             console.log(res.data);
             console.log(res.data.email);
             console.log(res.data.name);

            if (res.data.email==undefined ||  res.data.name==undefined)
                {
                    alert("Invalid Credentials");
                }
                else
                {
                    window.localStorage.setItem("username", res.data.name);
                    window.localStorage.setItem("useremail", res.data.email);
                    navigate("/home")
                }
        })
    }
    
    return(
        <>
     <br/> <br/> <br/>
    <div style={{width:"400px", margin:"auto", outline:"none"}}>
          <h1 aling="center"> User Login</h1>
  <label for="fname">User Email </label>
  <input type="text" id="fname" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
  <label for="lname">Password</label>
  <input type="password" id="lname" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
  Forgot Password?
  <button onClick={hadleSubmit}> Login now</button>
  Not a Member  <Link to="/registration">Signup Now</Link>
   <br/> <br/>
</div>

        </>
    )
}

export default UserLogin;