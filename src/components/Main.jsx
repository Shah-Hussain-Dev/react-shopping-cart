import React from 'react'
import { Row } from 'react-bootstrap'
import CartItem from './CartItem'
import { CartState } from '../context/Context'

const Main = () => {
  const {state} = CartState();
  console.log("start",state)
    return (
        <Row className=' ms-2 main justify-content-around align-items-stretch'>
        {/* <CartItem data={state.products}/> */}
        </Row>
    )
}

export default Main