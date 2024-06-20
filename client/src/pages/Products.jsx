import React, { useEffect, useState } from 'react';
import shippingicon from '../assests/icons/shipping.svg'
import tickicon from '../assests/icons/tickicon.svg'
import gridicon from '../assests/icons/gridicon.svg';
import listicon from '../assests/icons/listicon.svg';
import ProductsCard from '../components/Service/ProductsCard';
import { TrendingProductData } from '../components/TrendingProduct/TrendingProductData';
import ProductsCardList from '../components/Service/ProductsCardList';
import Footer from '../components/common/Footer';
import { HiShoppingBag } from "react-icons/hi2";
import { fetchAllProducts, fetchProductDetails } from '../services/operations/productAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { buyProduct } from '../services/operations/userFeature';
import { addToCart } from '../slices/cartSlice';

const Products = () => {
    
    const [products, setProducts] = useState([])
    const {productId} = useParams()
    const {token} = useSelector((state)=>state.auth)
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {user} = useSelector((state)=>state.profile)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [activeImg, setActiveImage] = useState('');
    useEffect(()=>{
        const fetchProducts = async() => {
                const allProducts = await fetchAllProducts();
                console.log("Products-->",allProducts)
                if(allProducts){
                  setProducts(allProducts)
                }
                
            
        }
        fetchProducts();
    },[])

    useEffect(() => {
        // Calling fetchCourseDetails fucntion to fetch the details
        const fetchDetails = async () => {
            try {
                const res = await fetchProductDetails(productId)
                console.log("Product Details res: ", res)
                setResponse(res)
                setActiveImage(res.image1);
            } catch (error) {
                setError("Could not fetch Product Details")
                console.error("Error fetching Product Details:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchDetails()
      }, [productId])

      
      const handleBuyProduct = () => {
        if (token) {
          buyProduct(token, [productId], user, navigate, dispatch)
          return
        }
        navigate("/login")
      }
      const handleAddToCart = () => {
        if (token) {
          dispatch(addToCart(response))
          return
        }
        navigate("/login")
    }
  const [viewType, setViewType] = useState('grid'); // State to manage view type
    const handleViewChange = (view) => {
        setViewType(view);
    };
    const [amount, setAmount] = useState(1);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    if (!response) {
        return <div>No Product Details Available</div>
    }
    console.log("Details",response)


    const {title,image1,image2,image3,image4, description, price,mrp, category : {name: categoryName}, seller : {firstName : sellerName}} = response

    const images = {
        img1: image1,
        img2: image2,
        img3: image3,
        img4: image4,
    };
      
    const discount = Math.round(((mrp-price)/mrp)*100);
    // const discount = Math.round(((890-199)/890)*100);
    const hasDiscount = discount>0.1;
    console.log("disc",discount)

    return (
        <div className='w-full flex flex-col items-center mt-24 bg-white'>
        <div className='w-11/12 flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col px-4 gap-4 lg:w-2/4'>
                <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-[#06623B] text-xl py-2 font-semibold'>{categoryName}</span>
                    <h1 className='text-3xl py-2 font-bold'>{title}</h1>
                </div>
                <div className='flex flex-row justify-between gap-5'>
                <div className='flex flex-row gap-6'>
                <span className='text-4xl text-[#06623B] font-bold'>₹ {price}</span>
                <span className='text-xl pt-2 text-[#666] line-through'>
                ₹ {mrp}
    </span>
                </div>
                <div>
                {hasDiscount && <div className='px-3 py-1 rounded-md bg-[#FED507] mx-1'>
   <p className='text-[16px]  text-[#06623B]'>
    Save {discount}%
    </p>
    </div>}
                </div>
                </div>
                <div className='py-2 flex flex-row gap-2'>
                    <img src={shippingicon} alt='shipping icon inline'/>
                   <span className='text-[#06623B] text-md'>Shipping</span> 
                </div>
               <div className='text-md text-black'>Size</div> 
               <div>
    <span className='text-sm text-[#06623B] px-3 py-[3px]  rounded-xl bg-[#FED507]'>1kg</span>
</div>
<div className='text-md text-black'>Quantity</div> 
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className=' bg-green-200 pt-1 pb-2 px-5 rounded-lg text-#06623B] text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-green-200 pt-1 pb-2 px-4 rounded-lg text-#06623B] text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                </div>
                <div className='w-[70%] py-2 font-semibold'>
                <div className=' cursor-pointer flex w-full flex-row items-center justify-center gap-2 text-[#06623B] py-3 bg-[#FED507] rounded-2xl transition-all duration-200 ease-in-out hover:scale-95 hover:bg-[#06623B] hover:text-[#FFF]'>
    <p className='text-sm' onClick={handleAddToCart}>Add To Cart</p>
    <HiShoppingBag />
    </div>
                </div>
                <div className='w-[70%] py-2 font-semibold'>
                <button className=' cursor-pointer flex border-2 border-solid border-[#06623B] w-full flex-row items-center justify-center gap-2 text-[#06623B] py-3 bg-white rounded-2xl transition-all duration-200 ease-in-out hover:scale-95 hover:bg-[#06623B] hover:text-[#FFF]' onClick={handleBuyProduct}>
    Buy It Now
    </button>
                </div>

                <div className='pb-1 flex flex-row gap-2'>
                    <img src={tickicon} alt='shipping icon inline'/>
                   <span className='text-[#666] text-md'>Usually ready in 5+ days</span> 
                </div>
 

                
            </div>
        </div>



            <div className='w-11/12 mx-0 flex flex-col'>
            <div className='text-[#666] text-md'>
    <p className='text-lg font-semibold mb-4 mt-7'>{description}</p>
    
    

    <h2 className='text-xl font-bold my-4'>Product Details:</h2>
    <ul className='list-none pl-5 mb-4'>
        <li><strong>Category</strong>: {categoryName}</li>
        <li><strong>Weight</strong>: 1kg</li>
        <li><strong>Price</strong>: ₹{price}</li>
        <li><strong>Shipping</strong>: Available</li>
    </ul>

    <h2 className='text-xl font-bold my-4'>Why Choose Our Products?</h2>
    <ol className='list-decimal pl-5 mb-4'>
        <li><strong>High-Quality and Verified Products:</strong> Our agritech platform ensures that all fertilizers, seeds, and pesticides we offer are of the highest quality and rigorously tested to meet industry standards.</li>
        <li><strong>Convenience and Accessibility:</strong> With our online platform, farmers can easily browse and purchase the agricultural products they need from the comfort of their home or farm.</li>
        <li><strong>Expert Guidance and Support:</strong> We provide not only top-notch products but also expert advice and customer support to help farmers make informed decisions.</li>
    </ol>

    <h2 className='text-xl font-bold my-4'>Storage Instructions:</h2>
    <p className='mb-4'>Store in a cool, dry place away from direct sunlight and moisture. Keep in original packaging and ensure proper ventilation.</p>

    <hr className='my-4'/>

    <p className='text-lg font-semibold'>Empowering Farmers with Quality Fertilizers, Seeds, and Pesticides - Your Partner for a Thriving and Sustainable Agricultural Future!</p>
    <p className=' text-xl text-black font-bold mt-5'>Seller: {sellerName}</p>
</div>

                <h1 className='py-4 text-[#06623B] text-4xl font-semibold'>You May Also Like</h1>
                <div className='w-full flex flex-row gap-6'>
                    <div className='w-full py-2 flex flex-col'>
                        <div className='w-full flex flex-row justify-between border-2 border-[#EEE] border-solid px-3 py-2 rounded-sm'>
                            <div className='flex flex-row px-2 gap-6 transition-all duration-300 ease-in-out'>
                            <div className={`icon ${viewType === 'grid' ? 'px-6 py-2 rounded-md bg-green-500' : 'px-6 py-2 rounded-md bg-white'}`}>
                            <img 
                                    src={gridicon} 
                                    alt='grid view' 
                                    onClick={() => handleViewChange('grid')} 
                                />
                            </div>
                            <div className={`icon ${viewType === 'list' ? 'px-6 py-2 rounded-md bg-green-500' : 'px-6 py-2 rounded-md bg-white'}`}>
                            <img 
                                    src={listicon} 
                                    alt='list view' 
                                    onClick={() => handleViewChange('list')} 
                                />
                            </div>
                            </div>
                            <div className=''>

                            </div>
                        </div>
                        <div className='flex flex-wrap gap-9 py-12 w-full relative justify-center'>
                            {viewType === 'grid' && products.map((product,index)=>{
                        return (
                            <ProductsCard 
                                product={product}
                            
                             />
                        )

                    })}
                            {viewType === 'list' && products.map((product,index)=>{
                        return (
                            <ProductsCardList 
                                product={product}
                            
                             />
                        )

                    })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Products;
