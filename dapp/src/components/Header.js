import React from "react";
import imgAvisEyes from "../img/eyes.jpeg";

export default function Header() {
  return (
    <div className="col-lg-12">
      <br />
      <h1 className="text-center">A DAPP</h1>
      <p className="text-center">A DApp Subtitle</p>
      <hr />
      <img className="img-fluid" alt="Avi's eyes" src={imgAvisEyes}></img>
      <hr />
      <br />
    </div>
  );
}
