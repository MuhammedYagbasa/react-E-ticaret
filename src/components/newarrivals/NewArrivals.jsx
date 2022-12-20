import React from 'react'
import Cart from './Cart'
import "./Style.css"
function NewArrivals() {
    return (
        <>
            <div className="newArrivals background">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                            <h2>New Arrivals</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <Cart />
                </div>
            </div>
        </>
    )
}

export default NewArrivals