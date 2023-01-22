import React,{useRef} from 'react'
import '../../styles/navBtn.css'
import {useNav} from '../../context/NavContext'
function NavButton() {
      const menuIconRef = useRef()
      const {toggleNav,navOpen} = useNav()
  return (
    <label className='menu-icon' for="check">
        <input ref={menuIconRef} checked={navOpen}  onChange={toggleNav} type="checkbox" id="check"/> 
        <span></span>
        <span></span>
        <span></span>
    </label>
  )
}

export default NavButton