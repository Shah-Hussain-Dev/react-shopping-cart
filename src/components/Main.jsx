import React from "react";
import { Row } from "react-bootstrap";
import CartItem from "./CartItem";
import { CartState } from "../context/Context";

const Main = () => {
  const { state } = CartState();
 



  return (
    <Row className=" ms-2 main justify-content-around align-items-stretch">
      <CartItem data={state} />
    </Row>
  );
};

export default Main;
