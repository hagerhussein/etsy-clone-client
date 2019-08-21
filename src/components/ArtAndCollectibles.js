import React from 'react'


export default function ArtAndCollectibles(props) {
  return (
   <div>
   
      { !props.artAndCollectibles && 'Loading products...'}

      { props.artAndCollectibles && props.artAndCollectibles.map (item =>(
     <section> <img src= {item.picture} className='ads' alt='some pic' />
      <h2>{item.title}</h2>
      <i>{item.price} Euro </i>
      <p>{item.description}</p>
      </section>
      ))}
  </div>
    )
}