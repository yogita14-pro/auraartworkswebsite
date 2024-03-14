import React from "react";
import {Link} from 'react-scroll';
import pinterest from "../images/pin.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import gmail from "../images/gmail.webp";

function Footer(){
    return(
        <>
        <footer>
            <div className="footpart1">
            <div className="headf">
            <h1 ><Link to="main" smooth={true} duration={1000} Exact>AURA</Link><br></br>
            ARTWORKS</h1>
            <p>Stay up to date with Latest Artwoks and News</p>
            <h3>nk1978artwork@gmail.com</h3>
            </div>
            <form><h1>Contact us</h1>
                <p>Feel Free to write out to us. We will get back to you shortly. </p>
                <input placeholder="Name" className="in"></input><br></br>
                <input placeholder="Email"className="in"></input><br></br>
                <input placeholder="Message" className="msg"></input><br></br>
                <button>SEND</button>
            </form>
            <div className="follow">
                <h5>FOLLOW</h5>
                <a href="https://www.instagram.com/aura_artworks/?igshid=MzRlODBiNWFlZA%3D%3D"><img src={instagram} className="icon"></img></a>
                <a href="mailto:nk1978artwork@gmail.com"><img src={pinterest} className="icon"></img></a>
                <a href="https://in.pinterest.com/yogitacdy/"><img src={gmail} className="icon"></img></a>
                <a href="https://www.facebook.com/ArtworksAura/"><img src={facebook} className="icon"></img></a>
            </div>
            </div>
            <div className="footpart2">
                <ul>
                    <li>TERMS & CONDITIONS</li>
                    <li>PRIVACY POLICY</li>
                    <li>ARTWORKS</li>
                </ul>
                <p>Copyright 2020 @ Aura Artworks<br></br>
                    Website developed by Yogita Choudhary
                </p>
            </div>
        </footer>
        </>
    )
}
export default Footer;