import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAllProducts } from '../../../services/operations/productAPI';

const AllProduct = () => {
    const {token} = useSelector((state)=>state.auth)
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async() => {
                const allProducts = await fetchAllProducts(token);
                console.log("Products",allProducts)
                if(allProducts){
                  setProducts(allProducts)
                }
                
            
        }
        fetchProducts();
    },[])
  return (
    <>
        <div className='text-3xl font-semibold'>
            All Products
        </div>
        <div className='flex flex-wrap gap-9 mt-10'>
     
     {
      products.length === 0 ?(
        <div>No Products Found</div>
      ) : (
        products.map((product)=>(
          
             <div className='border-2 flex-col w-1/5 px-3 py-1 border-green-800 rounded-lg'>
                <img src={product.image1} alt='productImage' className='h-[140px] w-[170px]'/>
                <div className='w-1/2 bg-green-400 text-center rounded-xl mt-5 text-sm font-semibold'>
                  <p className=''>{product.category?.name}</p>
                </div>
                <div className='flex flex-col justify-center mt-3 '>
                  <p className='text-lg font-semibold'>{product.title}</p>
                  <p>{product.description}</p>
                </div>
                <div className='text-green-500 font-semibold mt-2'>
                ₹ {product.price}
                </div>
                <div className='mb-2'>
                    <p className='font-semibold'>Seller: {product.seller.firstName} {product.seller.lastName}</p>
                </div>

             </div>
          
          
        ))
      )
     }
     
     
        
          

     </div>
    </>
  )
}

export default AllProduct