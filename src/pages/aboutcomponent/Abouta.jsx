import React from 'react'
import './abouta.css'
import abouta from '../../components/assets/abouta.jpg'
import { Link } from 'react-router-dom'
const Abouta = () => {
  return (
    <div className='abouta container'>
      <div className="aboutacontent">
        <p className='aboutacon1'>Who We Are</p>
        <p className='aboutacon2'>We are here not for income, but for outcome</p>
        <p className='aboutacon3'>Which is the same as saying through shrinking from toil and pain.These cases are perfectly simple and easy to distinguish. In a free hour, when untrammelled  and when nothing prevents</p>
       <Link to='/AboutUs'><button className='aboutabtn'>Explore Now</button></Link> 
      </div>
      <div className="aboutaimage">
        <img src={abouta} alt="abouta" />
      </div>
    </div>
  )
}

export default Abouta
