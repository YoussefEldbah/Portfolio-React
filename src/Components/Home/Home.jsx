import React from 'react'
import ay7aga from './Home.module.css'
import ava from '../../assets/images/avataaars.svg'
export default function Home() {
  return (<>
  
  <section className={`${ay7aga.home} home mt-5`}>
    <div className="container">
      <div className="avatar-img">
        <img className={`${ay7aga.img} my-5`} src={ava} alt="" />
      </div>
      <div className="home-content">
        <h2 className='fs-1 mb-3 fw-bolder'>
        START FRAMEWORK
        </h2>
        <div className={`${ay7aga.icon} icon  `}>
        <i className="fa-solid  fa-star "></i>

        </div>
        <p className=' mb-5'>
        Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </div>
  </section>
  
  
  
  
  
  </>
  )
}
