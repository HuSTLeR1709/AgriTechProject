import React, { useEffect, useState } from 'react';
import FeaturedSlider from '../components/Shop/FeaturedSlider';
import CategoryCard from '../components/Category/CategoryCard';
import { CategoryData } from '../components/Category/CategoryData';
import HighlightText from '../components/common/HighlightText';
import UspSlider from '../components/common/USP/UspSlider';
import { UspData } from '../components/common/USP/UspData';
import ProductsCard from '../components/Service/ProductsCard';
import { TrendingProductData } from '../components/TrendingProduct/TrendingProductData';
import Footer from '../components/common/Footer';
import { fetchAllProducts, fetchProductCategory } from '../services/operations/productAPI';
import { useNavigate } from 'react-router-dom';
import discountimg from '../assests/bgImages/Untitled design (9).png'
import discountimg2 from '../assests/bgImages/agritech.png'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [productCategory, setProductCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    
    const getProductCategory = async () => {
        setLoading(true);
        const categories = await fetchProductCategory();
        

        if(categories.length > 0){
            setProductCategory(categories); 
        }
        setLoading(false)
    }

    useEffect(()=>{

    
        getProductCategory();
    },[])
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
  return (
    <div className='w-full flex flex-col items-center'>
        <FeaturedSlider img1={discountimg}
        img2={discountimg2}
      />
      <div className='w-11/12 h-auto mx-0 flex flex-col '>
      <div className=' mt-3'>
        <h1 className='text-4xl'><HighlightText text={"Our Top Categories"}/></h1>
      </div>
       <div className='h-5/6 p-10 mt-5 grid grid-rows-1 grid-cols-4 gap-20 justify-center'>
      {
        CategoryData.map((category)=>(
                <CategoryCard category={category}/>
        ))
      }
      

      </div>
        
      </div>
      <div className='w-full  flex flex-col justify-center items-center bg-[#FED507] py-12'>
      <div className='w-11/12 h-auto mx-0 flex flex-col'>
      <h1 className='text-4xl text-[#06623B] font-semibold'>Special Products</h1>
      <div className='flex flex-row gap-9 py-12'>
                {products.slice(0,5).map((product)=>{
                        return (
                            <ProductsCard 
                                product={product}
                            
                             />
                        )

                    })}
                </div>
      </div>
     </div>


      <div className='w-full  flex flex-col justify-center items-center bg-white py-12'>
      <div className='w-11/12 h-auto mx-0 flex flex-col'>
      <h1 className='text-4xl text-[#06623B] font-semibold'>Seeds</h1>
      <div className='flex flex-row gap-9 py-12'>
                {products.slice(5,10).map((product)=>{
                        return (
                            <ProductsCard 
                                product={product}
                            
                             />
                        )

                    })}
                </div>
      </div>
    </div>

    <div className='w-full  flex flex-col justify-center items-center bg-[#FED507] py-12'>
      <div className='w-11/12 h-auto mx-0 flex flex-col'>
      <h1 className='text-4xl text-[#06623B] font-semibold'>Fertilizers</h1>
      <div className='flex flex-row gap-9 py-12'>
                {products.slice(10,15).map((product)=>{
                        return (
                            <ProductsCard 
                                product={product}
                            
                             />
                        )

                    })}
                </div>
      </div>
    </div>

    <div className='w-full  flex flex-col justify-center items-center bg-white py-12'>
      <div className='w-11/12 h-auto mx-0 flex flex-col'>
      <h1 className='text-4xl text-[#06623B] font-semibold'>Pesticides</h1>
      <div className='flex flex-row gap-9 py-12'>
                {products.slice(15,20).map((product)=>{
                        return (
                            <ProductsCard 
                                product={product}
                            
                             />
                        )

                    })}
                </div>
      </div>
    </div>
    <div className='w-full  flex flex-col justify-center items-center bg-[#FED507] py-12'>
      <div className='w-11/12 h-auto mx-0 flex flex-col'>
      <h1 className='text-4xl text-[#06623B] font-semibold'>Herbicides</h1>
      <div className='flex flex-row gap-9 py-12'>
                {products.slice(6,10).map((product)=>{
                        return (
                            <ProductsCard 
                                product={product}
                            
                             />
                        )

                    })}
                </div>
      </div>
    </div>


      <div className='w-full  flex justify-center items-center bg-white'>
      <div className= ' relative w-full flex justify-between py-10'>
        <UspSlider data={UspData} />
      </div>
          

      </div>
      <Footer/>
    </div>
  )
}

export default Shop;