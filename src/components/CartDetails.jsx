import { Button, Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import { AiFillPlusCircle,AiFillMinusCircle} from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { CartState } from "../context/Context";
import { useEffect, useState } from "react";
import Rating from "./Rating";
const CartDetails = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
  }, [cart]);

  if (cart.length > 0) {
    return (
      <Row className="main-section cart-details-section  px-4">
        <Col className=" my-2 px-3 " md={8}>
          <div className="d-flex flex-column gap-2 ">
            {cart.map((item) => {
              return (
                <Row className="justify-content-between" key={item.id}>
                  <div className="d-flex align-items-center  box-shadow   bg-light  py-3 justify-content-between w-100 ">
                    <img src={item.thumbnail} className="cart-details-image box-shadow" alt={item.title}/>
                    <div className="d-flex flex-column ms-4  selected-cart-details">
                      <h4 className="mb-0">{item.title}</h4>
                      <p className="my-1 ">{item.description}</p>
                      <p className="mb-0"><Rating rating={Math.round(item.rating)} style={{color:"#FFBF00"}}/></p>
              <p className="mb-0 py-1 bg-light"><AiFillPlusCircle onClick={()=>dispatch({
                type:"INCREASE_QTY",
                payload:{
                  id:item.id,
                  qty:item.qty
                }
            })} className="text-primary qty-change" size={25}/><span><b> {item.qty}</b> </span><AiFillMinusCircle onClick={()=>dispatch({
                type:"DECREASE_QTY",
                payload:{
                  id:item.id,
                  qty:item.qty
                }
            })} className="text-primary qty-change" size={25}/></p>
                      <h5 className="mb-0 text-success font-weight-bold">
                      ₹{item.price * 80}
                      </h5>
                    </div>
                    <MdDeleteForever
                      size={33}
                      className="pb-1 text-danger ms-2"
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: item })
                      }
                    />
                  </div>
                </Row>
              );
            })}
          </div>
        </Col>
        <Col
          md={3}
          sm={11}
          className="bg-dark text-white text-center box-shadow cart-totals my-2"
          style={{ flex: 1 }}
        >
          <div className="px-2 py-3">
            <h4>SubTotal ({cart.length}) Items</h4>
            <div className="d-flex  flex-column">
              <hr />
              <h4 className="text-primary">Totals :  ₹{total*80}</h4>
              <hr />
              <Link to="/order-confirmed">
              <Button className="box-shadow" onClick={()=>dispatch({type:"EMPTY_CART"})}>Proceed to Checkout</Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    );
  } else {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ marginTop: 120 }}
      >
        <img
          src="/images/empty-cart.svg"
          alt="cart is empty"
          className="img-fluid"
          height="200"
          width="500"
        />
        <h1 className="display-6 py-3">Your Cart is Empty </h1>
        <Link to="/">
          <Button>Go to Home </Button>
        </Link>
      </div>
    );
  }
};

export default CartDetails;
