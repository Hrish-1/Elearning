import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import './App.css';
import Nav from "./Navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook,GrGithub,GrTwitter,GrLinkedin } from "react-icons/gr";
import jwt_decode from "jwt-decode";

function Login(){
    const [isValid,setIsValid] = useState(false);
    const [isAdmin,setIsAdmin] = useState(false);
    let history = useHistory();
    const [isUser,setIsUser] = useState({
        "emailId" : "",
        "password" : ""
    });
    const reqBody = {
        method : 'POST',
        headers : { 'Content-type': 'application/json',
        'Access-Control-Allow-Origin' : '*'},
        body : JSON.stringify(isUser)
    }
    const getUser = async () => {
        try{
            const response = await fetch('http://localhost:8080/login',reqBody);
            const data = await response.json();
            console.log(data);
            console.log(data.username);
            var token = data.authToken;
            var { exp } = jwt_decode(token);
            console.log(exp);
            if(exp > new Date().getTime() / 1000){
                sessionStorage.setItem("token",token);
                sessionStorage.setItem("role",data.role);
                sessionStorage.setItem("emailId",data.emailId);
                setIsAdmin(data.role === "role_admin" ? true : false);
                setIsValid(true);
            }else{
                setIsUser({
                    "emailId" : "",
                    "password" : ""
                })
            }
        }catch(e){
            setIsUser({
                "emailId" : "",
                "password" : ""
            })
        }
        
    }
    const validateUser = (e) => {
        const {name,value} = e.target;

        setIsUser(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }
    return(
        <div>

            <nav>
                <Nav />
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 mt-5">
                        <img src={process.env.PUBLIC_URL + "/hero-b.png"} alt = ""/>
                    </div>
                    <div className="col-sm-6 mt-5">
                        <div className="mt-3 was-validated">
                            <h3>Log in to ELearn</h3>
                            <div className="mt-3">
                                <label>Email</label>
                                <input name = "emailId" type="email" value = {isUser.emailId} pattern = "[a-zA-Z0-9]+@[a-z]+(.)(com|in)" onChange = {validateUser} className="form-control w-75" required/>
                            </div>

                            <div className="mt-3">
                                <label>Password</label>
                                <input name = "password" value = {isUser.password} onChange = {validateUser} type="password" class="form-control w-75" required/>
                            </div>
                            <div className="mt-3" style ={{color : "#112d4e"}}>
                                <Link style = {{style : "none"}} to="/Forgot">I forgot my password</Link>
                             </div>

                            <div className="mt-3" onClick = {getUser}>
                                {isAdmin && history.push("/AddCourse")}
                                {isValid && !isAdmin && history.push("/")}
                                <input class="btn text-light" type = "button" value="Login" style={{"backgroundColor" : "#3f72af"}} />
                            </div>
                            <div className="mt-3">Or login using:</div>

                            <div className="mt-4">
                                <button class="btn btn-outline-warning"><FcGoogle size="2em" /></button>
                                <button class="btn btn-outline-primary ml-4"><GrFacebook size="2em" /></button>
                                <button class="btn btn-outline-dark ml-4"><GrGithub size="2em" /></button>
                                <button class="btn btn-outline-primary ml-4"><GrLinkedin size="2em" /></button>
                                <button class="btn btn-outline-info ml-4"><GrTwitter size="2em" /></button>
                            </div> 

                            <div className="notMember" style = {{color : "#112d4e"}}>
                               <Link style ={{style : "none"}} to="/Form"> Not a member yet? Sign up for free</Link>
                            </div> 

                        </div>
                    </div>
                </div> 
                       
            </div>        
            
            <div className="container-fluid foot">
                <div className="row">
                <Footer />
                </div>
            </div>            
        </div>
                
            
    );

}
export default Login;