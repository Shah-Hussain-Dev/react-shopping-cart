import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const OrderConfirmed = () => {
  const [loader, setLoader] = useState("./images/order-done.gif");
  useEffect(() => {
    setTimeout(() => setLoader("./images/loader.gif"), 2000);
  }, []);
  return (
    <Row className="order-confirmed  flex-column justify-content-center ">
      <img
        src={loader}
        className="img-fluid order-confirmed"
        alt="order-confirmed"
      />
      <div className="d-flex flex-column justify-content-center my-3">
        <h4 className="text-center my-3  ">
          Your Order has been placed.<br></br>
          We will Deliever your Order soon!
        </h4>
        <Link to="/" className="text-center">
          <Button>
            <BiArrowBack />
            Back to Home
          </Button>
        </Link>
      </div>
    </Row>
  );
};

export default OrderConfirmed;
