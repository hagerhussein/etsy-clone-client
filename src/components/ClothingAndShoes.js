import React from 'react'


export default function ClothingAndShoes(props) {
  return (
   <div>
   
      { !props.clothingAndShoes && 'Loading products...'}

      { props.clothingAndShoes && props.clothingAndShoes.map (item =>(
     <section> <img src= {item.picture} className='ads' alt='some pic' />
      <h2>{item.title}</h2>
      <i>{item.price} Euro </i>
      <p>{item.description}</p>
      </section>
      ))}
  </div>
    )
}