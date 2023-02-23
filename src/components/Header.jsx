import React from "react";
import {
  Alert,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { CartState } from "../context/Context";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const { productDispatch } = CartState();

  return (
    <Navbar bg="dark" variant="dark" className="fixed-top">
      <Container className="px-5" fluid>
        <Navbar.Brand>
          <Link
            to="/"
            style={{ fontWeight: 700, letterSpacing: 1, fontSize: 25 }}
          >
            <h3 className="title">Quick-Kart</h3>
          </Link>
        </Navbar.Brand>
        <Navbar.Text className="d-flex">
          <FormControl
            placeholder="Search Product..."
            className="m-auto search-input"
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
          ></FormControl>
          <Nav className="ms-1">
            <Dropdown>
              {/* <Dropdown.Toggle> */}
              <Button
                onClick={handleShow}
                className="rounded-circle shadow "
                variant="outline-primary"
                style={{ height: "3rem", width: "3rem", marginLeft: "10px" }}
              >
                <BsCart4 size={24} />
                {cart.length > 0 && (
                  <div
                    className="shadow-lg bg-danger rounded-circle"
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                      color: "white",
                      transform: "translate(50%,-25%)",
                    }}
                  >
                    {cart.length}
                  </div>
                )}
              </Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="title">
                    Quick-Kart
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {!cart.length ? (
                    <div
                      className="d-flex flex-column justify-content-center align-items-center "
                      style={{ marginTop: 120 }}
                    >
                      <img
                        src="/images/empty-cart.svg"
                        alt="cart is empty"
                        className="img-fluid"
                        height="200"
                        width="500"
                      />
                      <h1 className="display-6 py-3 title">
                        Your Cart is Empty
                      </h1>
                      <p className="title">
                        Please Add some product in your cart!
                      </p>
                    </div>
                  ) : (
                    <span className="px-2 p-0">
                      {cart.map((item) => {
                        return (
                          <Alert
                            variant="info"
                            className="p-0 selected-cart-items"
                            key={item.id}
                          >
                            <div className="d-flex align-items-center justify-content-between w-100 py-3 px-2 ">
                              <img
                                src={item.thumbnail}
                                height="50"
                                className="cart-image"
                                alt={item.title}
                              />
                              <div className="d-flex flex-column ms-4  selected-cart-details">
                                <small className="mb-0">{item.title}</small>
                                <small className="mb-0 text-success font-weight-bold">
                                  ₹{item.price * 80}
                                </small>
                              </div>
                              <MdDeleteForever
                                size={33}
                                className="pb-1 text-danger ms-2"
                                onClick={() =>
                                  dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: item,
                                  })
                                }
                              />
                            </div>
                          </Alert>
                        );
                      })}
                      <Link to="/cart" className="d-grid mt-0">
                        <Button variant="primary" size="sm">
                          Go to Cart
                        </Button>
                      </Link>
                    </span>
                  )}
                </Offcanvas.Body>
              </Offcanvas>
              {/* <BsFillCartCheckFill size={28} />
                <span style={{ fontSize: "" }}>{cart.length}</span> */}

              {/* <Dropdown.Menu></Dropdown.Menu> */}
            </Dropdown>
          </Nav>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
