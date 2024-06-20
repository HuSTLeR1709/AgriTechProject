import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='bg-gradient-to-b from-[#34b83a] via-[#04cd15] to-[#038037] text-transparent bg-clip-text font-bold'>
    {" "}
    {text}
    {" "}
    </span>
  )
}

export default HighlightText