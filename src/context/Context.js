import React, { createContext, useState,useEffect, useReducer, useContext } from 'react'
import { cartReducer } from './Reducer';
const Cart = createContext()
const Context = ({children}) => {
    const [data,setData] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    console.log("data is comming:",data)
    const fetchData =async ()=>{
        const req = await fetch('https://dummyjson.com/products');
        const result = await req.json();
        console.log("data",result.products)
        setData(result.products)
    }
    const [state,dispatch] = useReducer(cartReducer,{
        products:data,
        cart:[]
    })
    
    return (
        <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
        )
    }
    
export default Context
export const CartState = ()=>{
    return useContext(Cart);

}