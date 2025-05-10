import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  console.log("Card component: props = ", props);
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.contactName}</h2>
        <Avatar imageURL={props.imageURL} />
        {/* <img className="circle-img" src={props.imageURL} alt={"image of " + props.contactName}/> */}
      </div>
      <div className="bottom">
        <Detail phoneNumber={props.phoneNumber} email={props.email}/>
        {/* <p className="info">{props.phoneNumber}</p>
        <p className="info">{props.email}</p> */}
      </div>
    </div>
  );
}

export default Card;
