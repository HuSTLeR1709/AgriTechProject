import React from 'react';
import { ImQuotesLeft } from "react-icons/im";

const TestimonialCard = () => {
  return (
    
    <div className=' relative w-[30%] flex flex-col pt-14 px-4 pb-4 rounded-md self-stretch bg-[#FED507] shadow-lg shadow-gray-500'>
    <div className='w-[4.4rem] h-[4.4rem] rounded-full flex justify-center items-center text-[#FED507] text-2xl bg-[#06623B] border-[6px] border-[#FED507] border-solid absolute -top-6 '>
    <ImQuotesLeft />
    </div>
        <p className='text-[#06623B] text-lg'>The botanical definition of fruit is a seed-
bearing part of a flowering plant or tree that
can be eaten as food.</p>
<div className='flex flex-row self-stretch justify-start items-center gap-2 mt-5 mb-2'>
<div className='w-[2.3rem] h-[2.3rem] rounded-full bg-orange-500'>

</div>
<div className=' flex flex-col '>
<p className=' capitalize text-sm font-semibold text-[#06623B]'>
mr. john deo
</p>
<p className=' capitalize text-[0.8rem] text-[#06623B]'>designer</p>
</div>

</div>
    </div>

  )
}

export default TestimonialCard;