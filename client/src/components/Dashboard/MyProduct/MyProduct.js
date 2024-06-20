import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { deleteProduct, fetchSellerProducts } from '../../../services/operations/productAPI'
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri'
const MyProduct = () => {
    const {token} = useSelector((state)=>state.auth)
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async() => {
                const sellerProducts = await fetchSellerProducts(token);
                console.log("Products",sellerProducts)
                if(sellerProducts){
                  setProducts(sellerProducts)
                }
                
            
        }
        fetchProducts();
    },[])
    const handleDeleteCourse = async(productId)=>{
      const result = await deleteProduct({productId:productId},token)
    }
  return (
    <div className='w-full'>
     <div className='text-3xl font-semibold'>My Products</div>   
     <button className='mt-4 px-4 py-1 rounded-lg bg-green-600 text-white' onClick={()=>{navigate("/dashboard/add-product")}}>
        Add Product
     </button>

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
                <button className='w-full mt-5 mb-3 bg-red-500 text-white rounded-md py-1' onClick={()=>handleDeleteCourse(product._id)}>Delete Product</button>

             </div>
          
          
        ))
      )
     }
     
     
        
          

     </div>
    </div>
    
  )
}

export default MyProduct