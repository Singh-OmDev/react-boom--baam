import React from 'react'

const UserCard = (props) => {
  return (
    <div className='user-card'>
         <img className='user-img'>
         </img>
         <p> {props.data.location.city} , { props.data.location.state}</p>
          
          <h3>  {props.data.name.first}</h3>
           <p> {props.data.phone} </p>
      
    </div>
  )
}

export default UserCard
