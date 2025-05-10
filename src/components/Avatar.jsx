import React from "react";

function Avatar (props){
    return (
        <img className="circle-img" src={props.imageURL} alt={"image of " + props.contactName}/>
    );
}

export default Avatar;