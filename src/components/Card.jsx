import React from "react";

function Card(props) {
  return (
    <>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top card">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.img} alt="avatar_img" />
        </div>
        <div className="bottom info">
          <p>{props.number}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
