import React, { useState } from 'react'
import photo1 from '../../assets/images/poert1.png'
import photo2 from '../../assets/images/port2.png'
import photo3 from '../../assets/images/port3.png'
import ay7ga from './Portfolio.module.css'
export default function Portfolio() {
  const [date,setDate]= useState([
    {img:photo1,id:"img1" },
    {img:photo2,id:"img2" },
    {img:photo3,id:"img3" },
    {img:photo1,id:"img1" },
    {img:photo2,id:"img2" },
    {img:photo3,id:"img3" },
  ])
  return (
<>
<section className={`${ay7ga.portflio} py-5 my-4`}>
  
  <div className="container text-center ">
    <div className="title my-5 ">
      <h2 className=' mb-3 fs-1 fw-bolder"'>
      PORTFOLIO COMPONENT
      </h2>
      <div className={`${ay7ga.icon} icon  `}>
        <i className="fa-solid  fa-star "></i>
        </div>
    </div>
      <div className={` row g-4`}>
            {date.map((items)=><>

      <div className="col-md-4">
        <div className={`${ay7ga.item} item`}>
        <img className={`${ay7ga.hov} w-100 rounded rounded-3`} src={items.img} alt="" />
        <div data-bs-toggle="modal" data-bs-target={"#"+items.id} className={`${ay7ga.plus} plus`}>
        <i className={`${ay7ga.fa} fa-solid fa-plus`}></i>

        </div>
        </div>
      </div>
      {/* <div className="col-md-4">
      <div className={`${ay7ga.item} item`}>
        <img className={` w-100 rounded rounded-3`} src={photo2} alt="" />
        <div className={`${ay7ga.plus} plus`}>

        <i className={`${ay7ga.fa} fa-solid fa-plus`}></i>

        </div>
        </div>
      </div>
      <div className="col-md-4">
      <div className={`${ay7ga.item} item`}>
        <img className={` w-100 rounded rounded-3`} src={photo3} alt="" />
        <div className={`${ay7ga.plus} plus`}>

        <i className={`${ay7ga.fa} fa-solid fa-plus`}></i>

        </div>
        </div>
      </div>
      <div className="col-md-4">
      <div className={`${ay7ga.item} item`}>
        <img className={` w-100 rounded rounded-3`} src={photo1} alt="" />
        <div className={`${ay7ga.plus} plus`}>

        <i className={`${ay7ga.fa} fa-solid fa-plus`}></i>

        </div>
        </div>
      </div>
      <div className="col-md-4">
      <div className={`${ay7ga.item} item`}>
        <img className={` w-100 rounded rounded-3`} src={photo2} alt="" />
        <div className={`${ay7ga.plus} plus`}>

        <i className={`${ay7ga.fa} fa-solid fa-plus`}></i>

        </div>
        </div>
      </div>
      <div className="col-md-4">
      <div className={`${ay7ga.item} item`}>
        <img className={` w-100 rounded rounded-3`} src={photo3} alt="" />
        <div className={`${ay7ga.plus} plus`}>

        <i className={`${ay7ga.fa} fa-solid fa-plus`}></i>

        </div>
        
        </div>
      </div> */}
          </>)}

    </div>
   
    {date.map((items)=> <>
    
      <div className="showPhoto ">
  <div className="modal fade" id={items.id} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog  ">
      <div className="modal-content ">
        <img className="w-100" src={items.img}  alt=''/>
      </div>
    </div>
  </div>
</div>
    </> )}
  </div>
 
</section>



</>  )
}
