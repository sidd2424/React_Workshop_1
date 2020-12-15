import React from 'react'
import './Cards.css'
import cards from './data'

  
 function Card(){
         return ( 
            <div className='main'>
                {cards.map(data => (
                    <div className="card" key={data.id}>

                    {data.type==='image' 
                    ? <img src={data.content} alt="Avatar" style={{width:'20%'}} /> 
                    : <p>{data.content}</p>}          
                    <div class="container">
                    {data.user.image != null 
                    ? <img src={data.user.image} alt="Avatar" style={{width:'5%'},{borderRadius:'5px'}} />
                    : <img src="./logo1.png" alt="Avatar" style={{height:'40px'}} />}
                    
                    <p>{data.user.id}</p>
                    <h4><b>{data.user.name}</b></h4>
                  </div>
                  </div>
            ))}
            </div>
         )
 }
 
 export default Card;