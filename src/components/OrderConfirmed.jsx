import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const OrderConfirmed = () => {
  return (
    <Row className='order-confirmed' >
    <img src='https://i.pinimg.com/originals/6c/9e/19/6c9e197129299c5af04d8ad1173ad9b9.gif'/>
    <div className='d-flex flex-column justify-content-center my-3' >
    <h4 className='text-center my-3  '>Your Order has been placed.<br></br>
     We will Deliever your Order soon!</h4>
     <Link to="/" className='text-center'>
          <Button>Go to Home </Button>
        </Link>
    </div>
    </Row>
  )
}

export default OrderConfirmed