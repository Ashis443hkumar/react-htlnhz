import React from "react";

export default function Heading({title, subtitle, cover}) {
  return (
    <div className="heading">
        <h3>{title}</h3>
        <h6>{subtitle}</h6>
        <img src={cover} alt=""/>
    </div>
  );
}
