import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/sideBar/sideBar.jsx';
import TopBar from './components/topBar/TopBar.jsx';
import Home from './pages/home/Home.jsx';
import NewUser from './pages/newUserPage/NewUser.jsx';
import ProductList from './pages/productList/ProductList.jsx';
import User from './pages/user/User.jsx';
import UserLists from './pages/userList/UserLists.jsx';
import Product from './pages/product/Product.jsx';
import NewProduct from './pages/newProduct/NewProduct.jsx';

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserLists />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;