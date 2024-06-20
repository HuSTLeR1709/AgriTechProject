import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../services/operations/authAPI'
import { useNavigate } from 'react-router-dom'
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscBookmark, VscDashboard, VscHistory, VscSignOut } from "react-icons/vsc"
import useOnClickOutside from '../../hooks/useOnClickOutside'

const ProfileDropDown = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const { user } = useSelector((state) => state.profile)
    const handleOnClick = (e) => {
        e.preventDefault();
        dispatch(logout(navigate))

    }
    useOnClickOutside(ref, () => setOpen(false))

  if (!user) return null
  return  (
  <button className="relative" onClick={() => setOpen(true)}>
  <div className="flex items-center gap-x-1">
    <img
      src={user?.image}
      alt={`profile-${user?.firstName}`}
      className="aspect-square w-[30px] rounded-full object-cover"
    />
    <AiOutlineCaretDown className="text-sm text-richblack-100" />
  </div>
  {open && (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute w-40 top-[170%] -right-4 z-[1000] divide-y-[1px] divide-green-700 overflow-hidden rounded-md border-[2px] bg-green-200 border-green-950"
      ref={ref}
    >
      <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
        <div className="flex w-full items-center border-b-[1px] border-green-700 gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-green-700 hover:text-white">
          <VscDashboard className="text-lg" />
          Dashboard
        </div>
      </Link>
      
      <div
        onClick={() => {
          dispatch(logout(navigate))
          setOpen(false)
        }}
        className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-green-700 hover:text-white"
      >
        <VscSignOut className="text-lg" />
        Logout
      </div>
    </div>
  )}
</button>
)
}

export default ProfileDropDown