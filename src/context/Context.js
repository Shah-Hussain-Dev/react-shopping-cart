import  { createContext, useState, useReducer, useContext } from 'react'
import { cartReducer, productReducer } from './Reducers';
import UserData  from './data.json'
const Cart = createContext()
const Context = ({children}) => {

    const  [users, setUsers] = useState(UserData)
    const [state,dispatch] = useReducer(cartReducer,{
        products:users,
        cart:[]  
    })

    const [productState,productDispatch] = useReducer(productReducer,{
        byStock:false,
        byRating:0,
        searchQuery:"",
    })
 
    
    return (
        <Cart.Provider value={{state,dispatch,productState,productDispatch}}>{children}</Cart.Provider>
        )
    }
    
export default Context
export const CartState = ()=>{
    return useContext(Cart);
}