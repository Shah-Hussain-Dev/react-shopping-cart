import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const OrderConfirmed = () => {
  const[imageLogo,setImageLogo] = useState('./images/order-done.gif')

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLogo('./images/delievery.gif')
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Row className='order-confirmed' >
    <div className='d-flex flex-column justify-content-center my-3' >
    <img src={imageLogo} alt="logo" className='img-fluid' />
    <h4 className='text-center my-3'>Your Order has been placed.<br></br>
     We will Deliever your Order soon!</h4>
     <Link to="/" className='text-center'>
          <Button>Go to Home </Button>
        </Link>
    </div>
    </Row>
  )
}

export default OrderConfirmed