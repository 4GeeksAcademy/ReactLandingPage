import React from "react";
import Button from "./button.jsx";

const Card = ({image, title, text, type, url}) => {

    
     return (
        <div className="col-md-3 d-flex justify-content-center " style={{width: "20rem"}}>
            <div className="card ">
                <img src={image} className="card-img-top img-fluid"  alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
                <div className="card-footer">
                    <Button url={url} type={type} />
                </div>
            </div>
        </div>
    );
};



export default Card;