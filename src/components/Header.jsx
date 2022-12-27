
import React from 'react'
import { Alert,Container, Dropdown, FormControl, Nav, Navbar,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {BsFillCartCheckFill} from 'react-icons/bs';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import {MdDeleteForever} from 'react-icons/md';
import { CartState } from '../context/Context';


const Header = () => {
  const {state:{cart},dispatch} = CartState()
  const {productDispatch}= CartState()

  return (
    <Navbar bg="dark" variant="dark" className='fixed-top'>
    <Container  className='px-3'>
        <Navbar.Brand>
          <Link to="/" style={{fontWeight:700,letterSpacing:1,fontSize:25}}>Quick-Kart</Link>
        </Navbar.Brand>
        <Navbar.Text className='d-flex'>
            <FormControl placeholder="Search Product..." className='m-auto search-input' onChange={(e)=>productDispatch({
              type:"FILTER_BY_SEARCH",
              payload: e.target.value
            })}>
            </FormControl>
            <Nav className='ms-1'>
            <Dropdown >
                <Dropdown.Toggle  >
             
                 <BsFillCartCheckFill size={28} />
                 <span style={{fontSize:""}}>{cart.length}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                   {!cart.length? (<span className='text-center d-block'>Cart is Empty <AiOutlineShoppingCart/></span>):( <span className='px-2 p-0'>
                   {cart.map((item)=>{
                     return(
                  <Alert variant='info' className='p-0 selected-cart-items' key={item.id}>
                  <div className="d-flex align-items-center justify-content-between w-100 ">
                  <img src={item.thumbnail} height="30" className='cart-image' alt={item.title}/>
                 <div className="d-flex flex-column ms-4  selected-cart-details">
                 <small className='mb-0'>{item.title}</small>
                 <small className='mb-0 text-success font-weight-bold'>  ₹{item.price * 80}</small>

                 
                 </div>
                 <MdDeleteForever size={33} className="pb-1 text-danger ms-2" onClick={() => dispatch({type:"REMOVE_FROM_CART",payload:item})}/>
                  </div>
                  </Alert>
                  )
                })}
                <Link to="/cart" className="d-grid mt-0">
                <Button variant="primary" size="sm">
                Go to Cart
                </Button>
                </Link>
                   </span>)}
                   
                  
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
        </Navbar.Text>
       
    </Container>
    </Navbar>
  )
}

export default Header