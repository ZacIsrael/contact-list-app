import React from "react";

function Card (props){
    console.log('Card component: props = ', props);
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.contactName}</h2>
                <img className="circle-img" src={props.imageURL} alt={"image of " + props.contactName}/>
            </div>
            <div className="bottom">
                <p>{props.phoneNumber}</p>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;