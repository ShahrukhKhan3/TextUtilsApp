import React from 'react';
import './Body.css';
import Gallery from './Gallery'
import SideBar from './SideBar'

export default function Body() {
  return (
    <div className='Container'> 
    <div className='Right'>
    <Gallery/>
   
    </div>
    <div className='Left'>
    <SideBar />
    </div>
    
    </div>
    
    )
}
