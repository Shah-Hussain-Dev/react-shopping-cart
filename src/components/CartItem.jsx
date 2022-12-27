import {  Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsFillCartPlusFill, BsFillCartXFill } from "react-icons/bs";
import { CartState } from "../context/Context";
import Rating from "./Rating";

function CartItem({ data }) {
  const { products :{products}} = data;
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const {productState:{sort,byStock,byRating,searchQuery}} = CartState()
  const transformProducts = ()=>{
    let sortedProducts = products;
   if(sort){
    sortedProducts = sortedProducts.sort((a,b)=>
      sort === "lowToHigh" ? a.price-b.price : b.price - a.price
    );
   }

   if(!byStock){
    sortedProducts = sortedProducts.filter(item=> item.stock)
   }

   if(byRating){
    sortedProducts = sortedProducts.filter(item=> item.rating ===byRating)
   }
   if(searchQuery){
    sortedProducts = sortedProducts.filter(item=> item.title.toLowerCase().includes(searchQuery))

   }
    return sortedProducts;
  }

  return (
    <>
      {transformProducts().map((item) => {
        return (
          <Card
            style={{ width: "20rem" }}
            className="my-3 box-shadow card-item "
            key={item.id}
          >
            <Card.Img
              variant="top"
              src={item.thumbnail}
              className="pt-2 rounded shadow"
              style={{ height: 200 }}
            />
            <Card.Body className="d-flex flex-column justify-content-between ">
              <Card.Title className="text-secondary ">{item.title}</Card.Title>
              <Card.Text className="mb-1">{item.description}</Card.Text>
              
              <Card.Text className="mb-0">
                <small> Items left </small>
                <Badge bg="shadow" style={{background:"black",color:"yellow"}}>{item.stock}</Badge>
              </Card.Text>
              <Card.Text className="mb-0">
        <Rating rating={Math.round(item.rating)} style={{color:"#0d6efd"}}/>
    </Card.Text>
              <Card.Text className="d-flex  align-items-center justify-content-between">
                <span className="">
                  <del className="text-danger me-2"></del>
                  <span className="text-success item-price">  ₹{item.price * 80}</span>
                </span>
                {cart.some((c) => c.id === item.id) ? (
                  <Button variant="primary  shadow  ms"  onClick={() => dispatch({type:"REMOVE_FROM_CART",payload:item})}>
                    Remove Cart <BsFillCartXFill size={20} className="pb-1" />
                  </Button>
                ) : (
                  <Button
                    variant="primary shadow  ms"
                    disabled={!item.stock}
                    onClick={() => dispatch({type:"ADD_TO_CART",payload:item})}
                  >
                    {item.stock > 0 ? (
                      <span>
                        Add <BsFillCartPlusFill size={20} className="pb-1" />
                      </span>
                    ) : (
                      "Out of stock"
                    )}
                  </Button>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default CartItem;
