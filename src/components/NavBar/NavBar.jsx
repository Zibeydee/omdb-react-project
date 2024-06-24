import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../NavBar/NavBar.module.css'

function NavBar() {
  return (
    <div>
      <ul className={style.menuList}>
        <li><NavLink exact='true' to='/' className={({ isActive }) => isActive ? style.active : undefined}>Home</NavLink></li>
        <li><NavLink to='/movies' className={({ isActive }) => isActive ? style.active : undefined}>Movies</NavLink></li>
        <li><NavLink to='/series' className={({ isActive }) => isActive ? style.active : undefined}>Series</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar



