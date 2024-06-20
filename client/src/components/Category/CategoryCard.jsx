import React from 'react'
import seeds from '../../../src/assests/bgImages/maize-removebg-preview.png'
import './category.css'
import { Link } from 'react-router-dom'
const CategoryCard = ({category}) => {
  return (
    
    <div className='cardimg h-[200px] w-[280px] border-[#269a60] rounded-xl p-6'>
    <div>
    <Link to={`/shop/category/${category.id}`}>
      <h1 className='text- text-2xl'>{category.name}</h1>
    </Link>
    
    <ul className='text-md'>
        <li>{category.l1}</li>
        <li>{category.l2} </li>
        <li>{category.l3}</li>
        <li>{category.l4}</li>
    </ul>
    </div>
    <img className='relative w-[180px] -top-28 left-24' src={category.image} alt='bagOfSeeds'/>

    </div>
  )
}

export default CategoryCard