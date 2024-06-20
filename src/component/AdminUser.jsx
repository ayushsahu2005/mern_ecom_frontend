import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img_avatar2 from "../images/img_avatar2.png";

const AdminUser=()=>{

    const [name, setName]= useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();



    const handleSubmit=(e)=>{
      e.preventDefault();
      let url="http://localhost:8000/admin/checkadmin";
      axios.post(url, {name:name, password:password}).then((result)=>{
        if(result.data === "Success"){
          
          window.localStorage.setItem("userName", name);

        navigate("/admindashboard")
    }else{
          alert("You are not registered to this service")
        }

      })

    }

    return(

        <>
        <div style={{display:"flex", width:"500px", margin:"auto"}}>
         <form action="#" method="post">
  <div className="imgcontainer">
    <img src={img_avatar2} alt="Avatar" class="avatar" />
  </div>

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="name" 
    value={name} onChange={(e)=>{setName(e.target.value)}}  required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password"
    value={password} onChange={(e)=>{setPassword(e.target.value)}}  required />
        
    <button type="submit" onClick={handleSubmit} >Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"
      /> Remember me
    </label>
  </div>

  <div className="container">
    <button type="button" class="cancelbtn">Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
</div>
        </>
    )
}
export default AdminUser;