import React from 'react'


export default function CraftSuppliesAndTools(props) {
  return (
   <div>
   
      { !props.craftSuppliesAndTools && 'Loading products...'}

      { props.craftSuppliesAndTools && props.craftSuppliesAndTools.map (item =>(
     <section> <img src= {item.picture} className='ads' alt='some pic' />
      <h2>{item.title}</h2>
      <i>{item.price} Euro </i>
      <p>{item.description}</p>
      </section>
      ))}
  </div>
    )
}