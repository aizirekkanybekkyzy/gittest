import React, { Fragment, useState } from 'react'
import Modal from '../UI/Modal'

const Main = ({text}) => {
     
  const [user ,setUser] = useState(false)

const oneHandler = ()=>{
  setUser(true)
}

const twoHandler = ()=>{
  setUser(false)
}


  return (
    <div>
      {user === true ? <Modal  noHandler={twoHandler}/> : null}
      {text.map((el)=>(
        <Fragment key={el.id}>
          <h1>Id :{el.id}</h1>
         <h2>Name :{el.title}</h2>
         <h2>Summa :{el.summa} сом</h2>
         <img src={el.img} 
         alt="img" />
         <button onClick={oneHandler}>Delete</button>
        </Fragment>
      ))}

    </div>
  )
}

export default Main