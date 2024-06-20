import React from 'react'

import ChangeProfilePic from './ChangeProfilePic'
import UpdatePassword from './UpdatePassword'
import DeleteProfile from './DeleteProfile'


const Settings = () => {
  return (
    <div className='flex flex-col gap-7 '>

        <h1 className='text-3xl font-semibold text-green-700 '>
            Edit Profile
        </h1>

        <ChangeProfilePic/>

        <UpdatePassword/>

        <DeleteProfile/>

        {/* <EditProfile/>

        

         */}
    </div>
  )
}

export default Settings