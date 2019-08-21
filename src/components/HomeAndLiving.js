import React from 'react'


export default function HomeAndLiving(props) {
  return (
   <div>
   
      { !props.homeAndLiving && 'Loading products...'}

      { props.homeAndLiving && props.homeAndLiving.map (item =>(
     <section> <img src= {item.picture} className='ads' alt='some pic' />
      <h2>{item.title}</h2>
      <i>{item.price} Euro </i>
      <p>{item.description}</p>
      </section>
      ))}
  </div>
    )
}