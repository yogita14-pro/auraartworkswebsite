import React from "react";
// import Gallery from "./Gallery";
import { Link } from "react-router-dom";
// import {motion, AnimatePresence} from "framer-motion";
import p1 from "../components/artimages/IMG20230408132658.jpg";
import p2 from "../components/artimages/jm3.jpg";
import p3 from "../components/artimages/k2.jpg";
import p4 from "../components/artimages/rajatsketch.jpeg";
import p5 from "../components/artimages/s1.jpg";
import p6 from "../components/artimages/shipwithwall.jpeg";
import p7 from "../components/artimages/robertdowry.jpeg";
import p8 from "../components/artimages/picwetland.jpeg";
import p9 from "../components/artimages/jackson.webp";
import p10 from "../components/artimages/CE.jpg";
import p11 from "../components/artimages/akbolly.jpeg";
import p12 from "../components/artimages/jjj.jpg";
import p13 from "../components/artimages/Maa.jpg"; 
// import Homepage from "./Homepage";
function Artpart(){
    return(
        <>
        <div id="art">
            <div className="slider">
            <div className="images">
                <img src={p1} alt="selfmadeart"></img>
                <img src={p2} alt="selfmadeart"></img>
                <img src={p3} alt="selfmadeart"></img>
                <img src={p4} alt="selfmadeart"></img>
                <img src={p5} alt="selfmadeart"></img>
                <img src={p6} alt="selfmadeart"></img>
                <img src={p7} alt="selfmadeart"></img>
                <img src={p8} alt="selfmadeart"></img>
                <img src={p9} alt="selfmadeart"></img>
                <img src={p10} alt="selfmadeart"></img>
                <img src={p11} alt="selfmadeart"></img>
                <img src={p12} alt="selfmadeart"></img>
                <img src={p13} alt="selfmadeart"></img>
            </div>
            </div>
            <h1>OUR ART</h1>
            <h4>Love painting the sweetest strokes</h4>
            <Link to="gallery" onClick={()=>window.location.href='/artgallery'}><div className="rec"></div></Link>
            <button>View Our Gallery</button>
            <div className="slider">
            <div className="images part2">
                <img src={p1} alt="selfmadeart"></img>
                <img src={p2} alt="selfmadeart"></img>
                <img src={p3} alt="selfmadeart"></img>
                <img src={p4} alt="selfmadeart"></img>
                <img src={p5} alt="selfmadeart"></img>
                <img src={p6} alt="selfmadeart"></img>
                <img src={p7} alt="selfmadeart"></img>
                <img src={p8} alt="selfmadeart"></img>
                <img src={p9} alt="selfmadeart"></img>
                <img src={p10} alt="selfmadeart"></img>
                <img src={p11} alt="selfmadeart"></img>
                <img src={p12} alt="selfmadeart"></img>
                <img src={p13} alt="selfmadeart"></img>
            </div>
            </div>
        </div>
        </>
    )
}

export default Artpart;