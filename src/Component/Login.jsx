import { Link, redirect, useNavigate, useNavigation } from "react-router-dom";
import img from "../assets/img/log.png";
import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../Api";
import { toast } from "react-toastify";
export const Login = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState({ email: "", password: "" });
  const login = async (e) => {
    e.preventDefault();
    try { const req = await axios.post(`${BaseUrl}login`, {
        email: username.email,
        password: username.password,
      });
      if (req.data.code == 200) {
        localStorage.setItem("token", req.data.token);
        nav("/board");
      }
      else if(req.data.code ==400){
          toast.error("Invalid Password")
        }
        
        
    } catch (error) {
        toast.error("Invalid Password")
    }
   
  };
  return (
    <div className="login_n">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="vect-img">
              <img src={img} alt="" />
            </div>
            <form onSubmit={login} className=" mt-30">
              <input
                type="text"
                placeholder="Username"
                name="email"
                value={username.email}
                onChange={(e) => {
                  setUsername({ ...username, [e.target.name]: e.target.value });
                }}
              />
              <input
                type="password"
                value={username.password}
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  setUsername({ ...username, [e.target.name]: e.target.value });
                }}
              />
              <div className="sub mt-30">
                <input type="submit" className="button" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
