import React from 'react'
import './Menu.css';
export default function Menu() {
  return (
    <div>
    <nav>
    <ul className='menu_item'>
    
<li><h5 className='Menu_Heading'>SUZLON <span className='Restro'>RESTRO</span></h5></li>
<li className='left'><input placeholder='Search Item' className='input'/></li>

<li><button className='button'>Items in Cart (4)</button></li> 
    </ul>
    </nav>
    </div>
  )
}
