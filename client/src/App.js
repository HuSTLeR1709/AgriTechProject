import './App.css';
import { Route,Routes } from 'react-router-dom';
import { ACCOUNT_TYPE } from './utils/constants';
import Home from './pages/Home';
import Navbar from './components/common/Nevbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import VerifyEmail from './pages/VerifyEmail';
import MyProfile from './components/Dashboard/MyProfile';
import Dashboard from './pages/Dashboard';
import Calculator from './pages/Calculator';
import Settings from './components/Dashboard/Settings';
import AddProduct from './components/Dashboard/AddProduct/AddProduct';
import { useSelector } from 'react-redux';
import MyProduct from './components/Dashboard/MyProduct/MyProduct';
import DigitalAssistent from './components/DigitalAssisstent/DigitalAssistent';
import AddBlog from './components/Dashboard/Blog/AddBlog';
import AllBlogs from './components/Dashboard/Blog/AllBlogs';
import Blogs from './pages/Blogs';
import Shop from './pages/Shop';
import AllProduct from './components/Dashboard/AllProduct.jsx/AllProduct';
import Categories from './pages/Categories';
import Products from './pages/Products';
import BlogDetails from './pages/BlogDetails';
import Cart from './components/Dashboard/Cart';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import Weather from './pages/Weather';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivateRoute from './components/core/PrivateRoutes';



function App() {
  const {user} = useSelector((state)=>state.profile)
  return (
    <div className='w-full min-h-screen bg-richblack-900 flex flex-col font-inter overflow-x-hidden '>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='otp-verify' element={<VerifyEmail/>}/>
        <Route path='services/calculator' element={<Calculator/>}/>
        <Route path='services/assisstent' element={<DigitalAssistent/>}/>
        <Route path='services/blogs' element={<Blogs/>}/>
        <Route path='blogs/:blogId' element={<BlogDetails/>}/>
        <Route path='services/shop' element={<Shop/>}/>
        <Route path='shop/category/:categoryId' element={<Categories/>}/>
        <Route path='services/shop/products/:productId' element={<Products/>}/>
        <Route path='services/weather' element={<Weather/>}></Route>
        <Route path='about' element={<AboutUs/>}></Route>
        <Route path='contactus' element={<ContactUs/>}></Route>
        

        <Route element={<PrivateRoute><Dashboard/></PrivateRoute> }>
        
              <Route path='/dashboard/my-profile' element={<MyProfile/>}></Route> 
              <Route path='/dashboard/cart' element={<Cart/>}></Route>
              <Route path='/dashboard/settings' element={<Settings/>}></Route>
              <Route path='/dashboard/orders' element={<MyOrders/>}></Route>
              

              {
            user?.accountType === ACCOUNT_TYPE.SELLER && (
              <>
                <Route path='/dashboard/add-product' element={<AddProduct/>}></Route>
                <Route path='/dashboard/my-products' element={<MyProduct/>}></Route>
                
                
              </>
            )
          }
          {
            user?.accountType === ACCOUNT_TYPE.ADMIN && (
              <>
                <Route path='/dashboard/add-blog' element={<AddBlog/>}></Route>
                <Route path='/dashboard/blogs' element={<AllBlogs/>}></Route>
                <Route path='/dashboard/all-products' element={<AllProduct/>}></Route>
                
                
              </>
            )
          }
          
          </Route>
      </Routes>
    </div>
  );
}

export default App;
