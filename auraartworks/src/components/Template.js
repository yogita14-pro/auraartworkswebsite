import React from "react";

function Template(props){
    return(
        <div className="card">
            <section className="imagescard">
                <img src={props.plink} className="gtimg" alt="pics"></img>
            </section>
            {/* <section className="ccon">
                <h1 className="cname">{props.name}</h1>
            </section> */}
        </div>
    )
}
export default Template;