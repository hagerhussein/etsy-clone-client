import React from 'react'


export default function ToysAndEntertainment(props) {
  return (
   <div>
   
      { !props.toysAndEntertainment && 'Loading products...'}

      { props.toysAndEntertainment && props.toysAndEntertainment.map (item =>(
     <section> <img src= {item.picture} className='ads' alt='some pic' />
      <h2>{item.title}</h2>
      <i>{item.price} Euro </i>
      <p>{item.description}</p>
      </section>
      ))}
  </div>
    )
}