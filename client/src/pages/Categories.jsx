import React, { useEffect, useState } from 'react';
import maize from '../assests/bgImages/maize-removebg-preview.png';
import gridicon from '../assests/icons/gridicon.svg';
import listicon from '../assests/icons/listicon.svg';
import ProductsCard from '../components/Service/ProductsCard';
import { TrendingProductData } from '../components/TrendingProduct/TrendingProductData';
import ProductsCardList from '../components/Service/ProductsCardList';
import Footer from '../components/common/Footer';
import { useParams } from 'react-router-dom';
import { getCatalogPageData } from '../services/operations/pageData';

const Categories = () => {
    const [products, setProducts] = useState([]);
    const [viewType, setViewType] = useState('grid'); // State to manage view type
    const [sortType, setSortType] = useState(''); // State to manage sort type
    const [catageroryName, setCatageroryName] = useState('')
    const [loading, setLoading] = useState(false)
    const handleViewChange = (view) => {
        setViewType(view);
    };

    const {categoryId} = useParams();
    

    useEffect(() => {
        const getCategoryDetails = async() => {
            setLoading(true)
            try{
                const res = await getCatalogPageData(categoryId);
                console.log("PRinting res: ", res);
                if (res.success) {
                    setCatageroryName(res.data.selectedCategory.name);
                    setProducts(res.data.selectedCategory.product)
                }
                else{
                    setCatageroryName(null)
                }
                setLoading(false)
            }
            catch(error) {
                console.log(error)
            }
        }
        if(categoryId) {
            getCategoryDetails();
        }
        
    },[categoryId]);


    const handleSortChange = (e) => {
        const sortValue = e.target.value;
        setSortType(sortValue);

        let sortedProducts = [...products];
        switch (sortValue) {
            case 'alphabetical-asc':
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'alphabetical-desc':
                sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'price-asc':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'date-old-new':
                sortedProducts.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'date-new-old':
                sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            default:
                break;
        }
        setProducts(sortedProducts);
    };

    return (
        <div className='w-full flex flex-col items-center mt-24 bg-white'>
            <div className='w-11/12 mx-0 flex flex-col'>
                <h1 className='text-6xl text-[#06623B] font-semibold mb-4 ml-10'>{catageroryName}</h1>
                <div className='w-full flex flex-row gap-6'>
                    <div className='w-[25%]'>
                        <img className='relative -top-8' src={maize} alt='bagOfSeeds'/>
                    </div>
                    <div className='w-[75%] py-8'>
                        <p className='text-md text-[#777] w-[80%]'>
                            From hardy grains, like wheat, barley, or corn, to vibrant vegetables, like tomatoes, carrots, or spinach — my personal favorite that I grow for fresh, crisp salads and hearty stews — there’s a seed for every gardener. These seeds are perfect for cultivating a bountiful garden, whether you’re growing leafy greens, root vegetables, or colorful flowers. They can be used to start a kitchen garden, create a lush landscape, or even develop a small farm plot. Whether you’re an experienced farmer or a novice gardener, you’ll find the perfect seeds to grow your dream garden.
                        </p>
                    </div>
                </div>
                <div className='w-full flex flex-row gap-6'>
                    <div className='w-[0%] bg-red-400 flex flex-row'>
                        {/* Sidebar or additional content */}
                    </div>
                    <div className='w-[100%] py-2 flex flex-col'>
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
                                <span className=' px-2'>Sort By:</span> 
                                <select value={sortType} onChange={handleSortChange} className='border-2 border-[#EEE] border-solid p-2 rounded'>
                                    <option value=''>Select</option>
                                    <option value='alphabetical-asc'>Alphabetically, A-Z</option>
                                    <option value='alphabetical-desc'>Alphabetically, Z-A</option>
                                    <option value='price-asc'>Price, low to high</option>
                                    <option value='price-desc'>Price, high to low</option>
                                    <option value='date-old-new'>Date, old to new</option>
                                    <option value='date-new-old'>Date, new to old</option>
                                </select>


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

export default Categories;
