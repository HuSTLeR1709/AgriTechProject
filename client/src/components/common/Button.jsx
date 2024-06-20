import React from 'react';
import { Link } from 'react-router-dom';
const Button = ({children,active,linkto,onclick,text}) => {
    
  return (
    <Link  to={linkto} onClick={onclick}>
    <div className={`flex text-[16px] text-white px-4 py-2 justify-center rounded-lg border-b-4 border-solid border-orange-600 bg-[#225f19] ${active ? "bg-yellow-50 text-black" : "bg-richblack-800"} hover:scale-95 hover:bg-[#369927] hover:text-[16px] transition-all duration-200`}>
    
    {
        children ? (
            <>
            <span>
                {text}
            </span>
            {children}
            </>
            
        ) : (text)
    }
    
    </div>
    </Link>
  )
}

export default Button;


