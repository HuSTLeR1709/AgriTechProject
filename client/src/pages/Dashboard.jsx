import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/core/Sidebar'


const Dashboard = () => {
    const {loading: authLoading} = useSelector((state)=> state.auth)
    const {loading: profileLoading} = useSelector((state)=> state.profile)
    
    if(authLoading || profileLoading){
        return <div className='mt-10'>
            Loading...
        </div>
    }
  return (
    <div className='w-full flex flex-col h-[100vh] overflow-y-hidden '>
    <div className='w-full h-[11%]'>

    </div>
        <div className='w-full flex relative max-h-[88%] '>
        <Sidebar/>
        <div className='max-h-[90vh] overflow-auto flex justify-center w-11/12'>
            <div className='w-11/12 mx-auto py-10 max-w-[1000px] '>
                <Outlet/>
            </div>
        </div>
    </div>
    </div>
    
    
    
  )
}

export default Dashboard