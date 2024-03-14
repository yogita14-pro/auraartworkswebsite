import React, { useState } from "react";
import imgback from "../images/hand.jpg";
import Reg from "./Reg";
import Log from "./Log";
import piclogo from "./artimages/logo.png"
// import { Route, Routes } from "react-router-dom";
function Reglogin(props){
    const [action, setAction]= useState("Login");
    return(
        <div id="reg" >
            <div className="innerrg">
                <div className="part1">
                    <img src={imgback} alt="handimg"></img>
                    <div className="reglogo">
                        <img src={piclogo} className="logoaura"></img>
                        <h2>ARTWORKS</h2>
                    </div>
                </div>
                <div className="content">
                    <h1> WELCOME</h1>
                    <div>
                        {action==="Login"? <div><Log/></div>: <div><Reg/></div>}
                    </div>
                    <div className="lastline">
                        {action==="Login"?<p onClick={()=>setAction("Sign up")}>Don't have an account?<span>Sign UP</span></p>:<p onClick={()=>setAction("Login")}>Have an account?<span>Login</span></p>}
                    </div> 
                </div>
            </div>
        </div>
        
    )

}
export default Reglogin;