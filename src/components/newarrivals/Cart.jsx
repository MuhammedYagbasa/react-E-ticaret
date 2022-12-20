import React from 'react'
import Ndata from "./Ndata";
import "./Style.css"
function Cart() {
  return (
    <>
    <div className="content grid product">
        {Ndata.map((item,index)=>(
            <div className="box" key={index}>
                <div className="img">
                     <img src={item.cover} alt="" />
                </div>
                <h4>{item.name}</h4>
                <span>{item.price}</span>
            </div>
        ))}
    </div>
    </>
  )
}

export default Cart