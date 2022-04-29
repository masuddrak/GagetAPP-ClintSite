import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import UploadProduct from './components/UploadProduct/UploadProduct';
import OrderList from './components/OrderList/OrderList';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/uploadProduct' element={<UploadProduct></UploadProduct>}></Route>
        <Route path='/orderList' element={<OrderList></OrderList>}></Route>

      </Routes>
    </div>
  );
}

export default App;
