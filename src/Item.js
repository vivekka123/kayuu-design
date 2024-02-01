import React from 'react'

const Item = ({image,title,rate,offer,productdetails}) => {
  return (
    <div>
     <img src={image} alt='image'></img>
     <h2>{title}</h2>
     <h3>{}</h3>
    </div>
  )
}

export default Item