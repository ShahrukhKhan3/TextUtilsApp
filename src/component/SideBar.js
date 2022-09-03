import React from 'react'
import './SideBar.css';
import {MdStars} from 'react-icons/md';

export default function SideBar() {
  return (
    <div>
    <ul className='sidebar_list'>
  <li id='list_ItemsP'>Popular </li>
  <li className='list_Items'>Starter</li>
  <li><MdStars/>
  </li>
    <li className='list_Items'>Dessert</li>
  <li className='list_Items'> Fast Food</li>
  <li className='list_Items'> Main Course</li>
  <li className='list_Items'>Beverages</li>
  <li className='list_Items'>Dessert</li>
    </ul>
    
    
    </div>
  )
}
