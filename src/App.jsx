import './App.css'
import {Route, Routes} from 'react-router-dom';
import ProductsList from './page/product/ProductsList.jsx';
import BaseLayout from './layout/BaseLayout.jsx';
import Login from './page/login/Login.jsx';
import Dashboard from './page/dashboard.jsx';
export default  function App() {
  return (
    <Routes>
      <Route  element={<BaseLayout/>} >
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<ProductsList/>} />
      </Route>

    </Routes>
  )
}

