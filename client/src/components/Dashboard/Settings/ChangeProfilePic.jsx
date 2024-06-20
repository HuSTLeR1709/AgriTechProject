import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { updatePfp } from '../../../services/operations/profileAPI';

const ChangeProfilePic = () => {
    const {user} = useSelector((state)=>state.profile)

    const pfp = useSelector((state)=>state.profile.user.image)
    const token = useSelector((state)=> state.auth?.token)
    const [profilePicture, setProfilePicture] = useState(pfp);
    const [previewSource, setPreviewSource] = useState(null);
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const file = e.target[0].files[0];
        updatePfp(token,file);
        setProfilePicture(URL.createObjectURL(file));

    } 
    const handlefileChange = (e) => {
        const file = e.target.files[0];
        console.log(file)

        if(file) {
            previewFile(file)
        }}

        const previewFile = (file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
              setPreviewSource(reader.result);
            };
          };
  return (
    <div className='rounded-lg flex flex-col items-center justify-center' >
    <div>
        <img src={previewSource || profilePicture} alt={user?.firstName} className='aspect-square w-[90px] rounded-full object-cover' />
    </div>

    <div className='flex flex-col gap-3'>
        <p className='text-green-700 text-lg'>Change Profile Picture</p>
        <form onSubmit={handleOnSubmit}>
            <div className='flex gap-4 ml-6'>
            <label htmlFor='upload' className='cursor-pointer bg-green-700 text-white px-2 rounded-md'>Select
            <input type='file' id='upload' accept='image/png, image,gif, image/jpeg' className='hidden' onClick={handlefileChange}/></label>
            <button type='submit' className='cursor-pointer bg-green-700 text-white px-2 rounded-md' >Upload</button>
           
        </div>
        </form>
        
    </div>

    </div>
  )
}

export default ChangeProfilePic