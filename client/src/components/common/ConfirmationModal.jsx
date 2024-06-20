import React from 'react'

import Button from './Button'
const ConfirmationModal = ({modalData}) => {
  return (
    <div>
    <div className='w-11/12 max-w-[350px] rounded-lg border border-green-700 bg-zinc-100 p-6 z-50 fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col gap-3'><p className='text-xl text-red-600 font-semibold'>{modalData.text1}</p>
        <p className='text-richblack-25'>{modalData.text2}</p></div>
        
        <div className='flex justify-between mt-4 text-pink-200'>
            <Button
            onclick={modalData?.btn1Handeler}
            text={modalData?.btn1Text}
            > </Button>
            <Button
            onclick={modalData?.btn2Handeler}
            text={modalData?.btn2Text}
            >

            </Button>

            
        </div>
    </div>
        

    </div>
  )
}

export default ConfirmationModal