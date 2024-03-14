import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import whiteline from "../images/linewhite.png"
import {motion} from "framer-motion";

const VIDEO_PATH = 'https://youtu.be/YIzIO1C448Q?si=bDPkaCkX0HoG0Vgm';
function About(){
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.5
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.5
          }
        }
      };
      const itemcar={
        hidden: { x: -40, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.5
          }
        }
      };
    const playerref=useRef(null);
    return(
        <div id='about'>
            <motion.section className='first'
            >
            <motion.h1 initial="hidden" variants={container} whileInView="visible">ABOUT US</motion.h1>
            <motion.p
            variants={itemcar}
            initial="hidden" 
            whileInView="visible">
            Welcome to our website--a place to showcase artwork and connect with like-minded members of the art community. 
            Our objective is to develop and supply the most detailed art to both the community and the client. 
            We help you find excellent work on a single platform. 
            <br></br>
            Aura Artworks was founded in 2021 with the goal of bringing art to the rest of the world and presenting high-quality work to art enthusiasts. We strive to improve our talents and contribute to the creation of art via constant work. We work with pencils, acrylics, and watercolors. We create both sketches and paintings. We also accept commissioned art.
            <br></br>
            For additional information, please contact us through the platforms listed below.
            </motion.p>
            <motion.img src={whiteline} className='whline' variants={item} initial="hidden" 
            whileInView="visible"></motion.img>
            <h3>Mail to: <a href="https://www.instagram.com/aura_artworks/?igshid=MzRlODBiNWFlZA%3D%3D" className='linkabout'>nk1978artwork@gmail.com</a></h3>
            <h3>Instagram id: <a href="mailto:nk1978artwork@gmail.com" className='linkabout'>@aura_artworks</a></h3>
            </motion.section>
            <section className='second'>
                <ReactPlayer ref={playerref} url={VIDEO_PATH} controls={true} className="vdo"/>
                <button>FOLLOW</button>
                <div className='rec'></div>

            </section>
        </div>
    )
}
export default About;