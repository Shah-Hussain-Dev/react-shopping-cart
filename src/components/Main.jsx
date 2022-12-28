import React from "react";
import { Row } from "react-bootstrap";
import CartItem from "./CartItem";
import { CartState } from "../context/Context";

const Main = () => {
  const { state } = CartState();
  console.log(state,"state")
  const loader =()=>{
    return <div>
    <img src="./images/loader.gif"/>
    </div>
  }
if(!state.products.products.length>0){
  return <loader/>
}else{
  return (
    <Row className=" ms-2 main justify-content-around align-items-stretch">
      <CartItem data={state} />
    </Row>
  );
}
}

export default Main;
