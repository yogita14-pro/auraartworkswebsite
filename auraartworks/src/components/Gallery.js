import React, { useState } from "react";
import paint from "./paint";
// import Template from "./Template";
import {AnimatePresence, motion} from "framer-motion";
function Gallery(){
    const [selectedId, setSelectedId]=useState(null);
    return(
        <>
        <div id="gallery">
            <div className="container">
            <h1>ART GALLERY</h1>
            <div className="gbut">
                <button>Order a Sketch</button>
                <button>Order a Painting</button>
            </div>
            <div className="blackbox"></div>
            <div className="bb2"></div>
            </div>
            <div className="contogg">
            {paint.map(item=>(
                    <motion.div className="card">
                        <motion.section className="imagescard" layoutId={item.id} onClick={()=>setSelectedId(item.id)}>
                            <motion.img src={item.plink} className="gtimg" alt="pics"></motion.img>
                        </motion.section>
                    </motion.div>
            ))}
            <AnimatePresence>
                {selectedId &&(
                    <motion.div className="expcard">
                        {paint.map(item=>(
                            item.id===selectedId &&(
                            <motion.div layoutId={selectedId} className="details">
                                <motion.div className="imgdiv"><motion.img src={item.plink} className="expimg"></motion.img></motion.div>
                            <motion.div className="detail">
                            <motion.h1>{item.name}</motion.h1>
                            <motion.p><span className="pdeschead">Description</span><br></br>{item.disciption}</motion.p>
                            <motion.h4>Price: {item.price}</motion.h4>
                            <motion.div className="g-button">
                            <motion.button >Add to cart</motion.button>
                            <motion.button>Buy now</motion.button>
                            </motion.div>
                            </motion.div>
                            </motion.div>
                            )
                        ))}
                        <motion.button onClick={()=>setSelectedId(null)} className="but end">X</motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
            </div>
        </div>
    </>
    )
}

export default Gallery;