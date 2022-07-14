import React from "react";
import meta from "./meta.tsx";

function setNamee(props) {
  if (props.index >= 0) {
    const index = props.index;
    console.log("img: ", index + 1, props.image);
    console.log(
      "meta: ",
      index + 1,
      meta[index].attributes.map((i) => i.name)
    );
    // console.log("index: ", index);

    for (let i = 0; i < meta.length; i++) {
      if (i === index) {
        name =
          meta[index].attributes[0].name +
          " " +
          meta[index].attributes[1].name +
          " " +
          meta[index].attributes[2].name;
      }
    }
  } else {
    name = "";
  }
  return name;
}

const Card = (props) => (
  setNamee(props),
  (
    <>
      <div>
        <h3 style={{ color: "yellow" }}>{name ?? "Cart title"}</h3>
        <img style={{ width: "100%" }} src={props.image} alt="" />
      </div>
    </>
  )
);

export default Card;
