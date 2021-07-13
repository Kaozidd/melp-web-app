import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faStar as fullStar, 
  faPhone as phone, 
  faGlobe as site,
  faEnvelope as email,
} from '@fortawesome/free-solid-svg-icons'
import { faStar as voidStar } from '@fortawesome/free-regular-svg-icons'

import './Card.css';


function Card({data}) {
  const showStar = (icon, key = Math.random()) =>{
    return <FontAwesomeIcon icon={icon} key={key}/>
  }
  const showIcon = (icon, text, key = Math.random()) =>{
    return <p className="contact-icon"><FontAwesomeIcon className='fa-1x' icon={icon} key={key}/>{text}</p>
  }

  const renderRat = (rat) => {
    let arr=[]
    for(let i=0; i<5; i++){
      
      arr[i] = (i < rat) ? showStar(fullStar, i) : showStar(voidStar, i) 
    }
    return arr;
  }  

  return (
    <div className="card">
      <div className="card-top">
        <h2 className="card-title">{data.name}</h2>
        <span className="card-rating">
          {renderRat(data.rating)}
        </span>
      </div>
      <p className="card-address">{data.address.street}, {data.address.city}</p>
      <div className="card-bottom display-hidden">
        <span className="card-contact">
          {/* <h5>Llamele!!</h5> */}
          {showIcon(phone,data.contact.phone)}
          {showIcon(site,data.contact.site)}
          {showIcon(email,data.contact.email)}
        </span>
        <h4 className="card-state">{data.address.state}</h4>
      </div>
    </div>
  )
}

export default Card
