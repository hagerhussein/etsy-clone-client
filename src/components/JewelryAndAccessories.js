import React from 'react'


export default function JewelryAndAccessories(props) {
  return (
   <div>
   
      { !props.jewelryAndAccessories && 'Loading products...'}

      { props.jewelryAndAccessories && props.jewelryAndAccessories.map (item =>(
     <section> <img src= {item.picture} className='ads' alt='some pic' />
      <h2>{item.title}</h2>
      <i>{item.price} Euro </i>
      <p>{item.description}</p>
      </section>
      ))}
  </div>
    )
}