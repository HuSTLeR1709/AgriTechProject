import React, { useEffect, useState } from 'react';
import head from '../assests/bgImages/heading.png'
import './Home.css'
import { IoIosArrowForward } from "react-icons/io";
import HighlightText from '../components/common/HighlightText';
import { PiPlantLight } from 'react-icons/pi';
import PlantIcon from '../components/common/PlantIcon';
import ServiceCard from '../components/Service/ServiceCard';
import { serviceData } from '../components/Service/serviceData';
import CategoryCard from '../components/Category/CategoryCard';
import { CategoryData } from '../components/Category/CategoryData';
import { blogsData } from '../components/Blogs/BlogsData';
import { FaArrowRightLong } from "react-icons/fa6";
import TrendingProduct from '../components/TrendingProduct/TrendingProduct'
import TestimonialCard from '../components/Service/TestimonialCard';
import leafimg from '../assests/bgImages/heading.png';
import BlogSlider from '../components/Blogs/BlogSlider';
import SeviceExplainCard from '../components/ServiceExplain/SeviceExplainCard'
import { ServiceExplainData } from '../components/ServiceExplain/ServiceExplainData';
import UpperImg from '../assests/bgImages/rv-12-infos-vector.png'
import ServiceBg from '../assests/bgImages/servicebg2.png'
import Footer from '../components/common/Footer';
import { UspData } from '../components/common/USP/UspData';
import UspSlider from '../components/common/USP/UspSlider';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchAllBlogs } from '../services/operations/blogAPI';
import { fetchAllProducts } from '../services/operations/productAPI';
import ProductsCard from '../components/Service/ProductsCard';

const Home = () => {
  const {token} = useSelector((state)=>state.auth)
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        const fetchBlogs = async() => {
                const allBlogs = await fetchAllBlogs(token);
                console.log("Blogs",allBlogs)
                if(allBlogs){
                    setBlogs(allBlogs)
                }
                
            
        }
        fetchBlogs();
    },[])

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
    <div className='relative w-full h-auto'>
      <div className="bgimg w-full h-screen flex items-center">
        <div className='relative flex flex-col items-start justify-center p-10 top-12 left-12 w-2/5 h-2/4 opacity-100 gap-8 '>
        <df-messenger
        intent="WELCOME"
        chat-title="LeafDoctor"
        agent-id="45e887b5-8d23-492a-886c-1d1993dd6c96"
        language-code="en"
      ></df-messenger>
            <p className='text-5xl font-bold text-black'>Growing Tomorrow's Harvest, Today.</p>
            <p className='text-2xl font-semibold'>In the fields of opportunity, agriculture is the seed that grows prosperity.</p>
            <Link to="/signup">
            <button className='text-lg flex items-center gap-1 bg-[#225f19] px-5 rounded-lg border-b-4 py-2 font-semibold border-orange-600 text-white hover:bg-[#369927] hover:scale-95 transition-all duration-200'>Get Started <IoIosArrowForward /></button></Link>
        </div>
      </div>
      {/* [#d9dcdf] */}
      <div className='w-full relative h-auto flex flex-col justify-center items-center bg-[#d9dcdf]'>
      <div className='mt-14'>
        <PlantIcon />
      </div>
      
      <div className='w-2/4 text-center mt-3'>
        <h1 className='text-4xl'>Cultivating growth through innovative <HighlightText text={"Agricultural Services"}/></h1>
      </div>
      <div className='h-5/6 p-10 mt-5 grid grid-rows-2 grid-cols-4 gap-14 justify-center'>
      {
        serviceData.map((service)=>(
          <ServiceCard service={service} iconName={service.icon}/>
        ))
      }

      </div>
          
      </div>
      <div className='w-full relative bg-[#02564e] flex flex-col items-center justify-end p-12 py-24'>
        <div className='h-auto grid p-10 grid-rows-4 grid-cols-2 gap-x-60 gap-y-10 w-10/12 bg-[#02564e]'>
          {
            ServiceExplainData.map((service,index)=>(
              <SeviceExplainCard service={service} key={index} iconName={service.icon}/>
            ))
          }

      </div>
      <div className='absolute top-0 z-10 left-16'>
        <img src={UpperImg} alt='leaves'/>
      </div>
      <div className='absolute rotate-180 z-10 bottom-0 right-16'>
        <img src={UpperImg} alt='leaves'/>
      </div>
      <div className='absolute bottom-1 left-[42%] opacity-30 w-[18%]'>
        <img src={ServiceBg} alt='leaves' className='w-full'/>
      </div>
      
      </div>
      
      <div className='w-full relative h-auto flex flex-col justify-center items-center bg-zinc-300'>
      <div className='mt-14'>
        <PlantIcon />
      </div>
      
      <div className='w-2/5 text-center mt-3'>
        <h1 className='text-4xl'>Cultivating innovation across<HighlightText text={"Agricultural Categories"}/></h1>
      </div>
      <div className='h-5/6 p-10 mt-5 grid grid-rows-1 grid-cols-4 gap-20 justify-center'>
      {
        CategoryData.map((category)=>(
                <CategoryCard category={category}/>
        ))
      }
      

      </div>
          
      </div>
      <div className='w-full relative h-auto flex flex-col justify-center items-center bg-gradient-to-b from-zinc-300 to-white'>
      
      
      <div className='w-2/5 text-center mt-10'>
        <h1 className='text-4xl'><HighlightText text={"Trending Products"}/></h1>
      </div>
      <div className='mt-4'>
        <img src={head} alt='head'/>
      </div>

      <div className='h-auto flex flex-row gap-9 py-10'>
        {
          products.slice(3,7).map((product)=>{
            return(<ProductsCard product={product}/>

            )
            
          })
        }
      </div>
     
          
      </div>

      <div className='w-full  flex justify-center items-center bg-white'>
      <div className= ' relative w-full flex justify-between py-10'>
        <UspSlider data={UspData} />
      </div>
          

      </div>




      <div className='w-full relative h-[400px] flex flex-col justify-start items-center bg-white '>
        <div className='w-2/4 text-center mt-10'>
          <h1 className='text-4xl font-bold'><HighlightText text={"Latest Blog"}/></h1>
        </div>


        <img src={leafimg} alt='img' className='mt-4'></img>
        
        <div className='w-11/12 h-auto p-10 mt-5 gap-8 justify-center -bottom-40 z-10 absolute'>
        
            <BlogSlider blogs={blogs}/>
          
       
        </div>
      </div>




      <div className=" relative flex flex-col w-full h-[600px] justify-center items-center bg-[#06623B]">
      <div className='flex w-full gap-5 h-auto py-8 flex-col items-center'>
      <div className='text-yellow-400 text-3xl'>
        AgriTech
      </div>
      <div className='flex flex-col gap-5 w-[40%]'>
      <p className='text-center text-5xl font-semibold text-[#FED507]'>
      Sign up for newsletter
      </p>
      <p className=' text-md text-center text-[#FFF]'>
      A fruit is a mature, ripened ovary, along with the contents of the ovary. The ovary is
the ovule-bearing reproductive structure in the plant flower.
      </p>
      </div>
      <div className='flex flex-row w-[60%] justify-between gap-4'>
      <input id="letter" className='email w-[70%] rounded-3xl p-3 border-solid border-4 border-[#FED507] text-md text-[#FED507] bg-[#06623B]' style={{outline: 'none'}}>
      </input>
      <label for="letter" className="transn text-lg text-[#FED507]">Email</label>
      <div className=' w-[25%] rounded-3xl bg-[#FED507] flex justify-center items-center'>
      
      <div className='flex text-[#06623B] flex-row gap-2 items-center'>
      <p className='text-lg'>
      Subscribe
      </p>
      <FaArrowRightLong />
      </div>

      </div>
      </div>
      </div>
      <div className=' absolute flex flex-row w-11/12 gap-6 justify-center -bottom-28'>
      <TestimonialCard/>
      <TestimonialCard/>
      <TestimonialCard/>
      </div>

      </div>
<div className='w-full flex flex-row justify-center bg-[#d9dcdf]' >
<div className="flex flex-col w-[80%] h-[250px] justify-center items-center">
      
      </div>
</div>


<Footer/>
      
    </div>
    
  )
}

export default Home;