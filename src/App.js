
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartDetails from './components/CartDetails';
import Header from './components/Header';
import OrderConfirmed from './components/OrderConfirmed';

function App() {

  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<CartDetails/>}/>
    <Route path='/order-confirmed' element={<OrderConfirmed/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
