import React from "react";


const Button = ({url, type}) => {
    return (
        <a href={url} style={{width: "10rem", marginTop:"1.3rem"}} type="a" className={`btn btn-${type} mb-3`}>
            <strong>Find Out More!</strong>
        </a>
    );
};


export default Button;