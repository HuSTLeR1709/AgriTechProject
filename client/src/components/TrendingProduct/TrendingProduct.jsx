import React, { useState } from 'react'
import { TrendingProductData } from './TrendingProductData';
import ProductsCard from '../Service/ProductsCard';
import ProductsCardList from '../Service/ProductsCardList';

const ExploreMore = () => {
    
    const tabsName = [
        "Featured",
        "Latest",
        "BestSeller"
    ];

    const [currentTab, setCurrentTab] = useState(tabsName[1]);
    const [products, setProducts] = useState(TrendingProductData[1].products);
    const [currentCard,setCurrentCard] = useState(TrendingProductData[1].products[0].heading);

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = TrendingProductData.filter((product)=> product.tag === value);
        setProducts(result[0].products);
        setCurrentCard(result[0].products[0].heading);

    }

  return (
    <div>
    <div className='flex flex-col m-8 items-center gap-5'>

                <div className='flex gap-4'>
                    {
                        tabsName.map((element,index)=>{
                            return (
                                <div className={` flex text-[16px] items-center justify-center text-lg mb-5 ${currentTab === element ? "bg-green-500 text-richblack-5 font-sm" : " text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer hover:bg-green-500 hover:text-richblack-5 px-5 py-2`}
                                key={index}
                                onClick={()=> setMyCards(element)}>

                                {element}


                            </div>
                            )
                        })
                    }
                </div>

                <div className='flex gap-9'>
                {products.map((products,index)=>{
                        return (
                            <ProductsCard 
                                products={products}
                            
                             />
                        )

                    })}
                </div>
                <div className='mt-7'>
                    <button className='py-2 px-4 bg-green-500 rounded-2xl hover:scale-90 transition-all duration-200'>View All</button>
                </div>

                </div>
            </div>



  )
}

export default ExploreMore