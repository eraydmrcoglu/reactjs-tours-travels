import React from 'react'
import './service-card.css'

const ServiceCard = ({ item }) => {
   const { imgUrl, title, desc } = item

   return (
      <div className='service__item'>
         <div className="service__img">
            <img src={imgUrl} alt="" />
         </div>
         <h6>{title}</h6>
         <p>{desc}</p>
      </div>
   )
}

export default ServiceCard