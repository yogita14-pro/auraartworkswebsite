import React,{useState} from "react";
import {Link} from 'react-scroll';
import { NavLink } from "react-router-dom";
import Reglogin from "./Reglogin";
import {AnimatePresence, motion} from "framer-motion";
import proficon from "../images/proff.png";
import { signOut } from "firebase/auth";
import {auth} from "../firbase"; 
import piclogo from "./artimages/logo.png"
function Navbar(props){
    const handlelogout=()=>{
        signOut(auth).then(()=>{
            alert("Signout successfull!!")
        }).catch((error)=>{
            alert("Error:-",error.message);
        });
    }
    const [nav, setnav]=useState(false);
    const [selectedId, setSelectedId]=useState(null);
    const changeBackground=()=>{
        if(window.scrollY>=50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <>
        <nav className={nav ? "nav active":"nav"}>
            <h1><NavLink to="/"><img src={piclogo} className="auralogo"></img></NavLink></h1>
            <input className="menu-btn" type="checkbox" id='menu-btn'/>
            <label className="menu-icon" for='menu-btn'>
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="main" smooth={true} duration={1000} Exact>Home</Link></li>
                <li><Link to="about"smooth={true} duration={1000} activeClass="active" spy={true}Exact>About</Link></li>
                <li><Link to="art" smooth={true} duration={1000} Exact>Our Art</Link></li>
                <li><Link to="feature" smooth={true} duration={1000} Exact>Features</Link></li>
                <li><Link to="car" smooth={true} duration={1000} Exact>Careers</Link></li>
                <li onLoad={()=>setSelectedId(null)}>
                <h2 className="profile">
                    {props.name ?<div className="upperprof"><div className="profile"><img src={proficon} className="icon" alt="profileicon"></img> {props.name}</div>
                    <button className="but" onClick={handlelogout} >logout</button></div> : 
                <motion.button onClick={()=>setSelectedId('pop')} className="but">Register or Login</motion.button>}</h2>
                </li>
            </ul>     
        </nav>
        <div className="popup">
        <AnimatePresence> 
            {selectedId && (
                    <motion.div layoutId={selectedId}>
                        
                        <Reglogin />
                    <motion.button onClick={()=>setSelectedId(null)} className="closebut but">X</motion.button>
                    </motion.div>
                )
            }
        </AnimatePresence>
        </div>
        </>
    )
}

export default Navbar;