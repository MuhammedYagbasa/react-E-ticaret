import React from 'react'
import Catg from './Catg'
import ShopCart from './ShopCart'
import "./Style.css"
function Shop({ shopItems, addToCart }) {
    return (
        <>
            <section className='shop background'>
                <div className='container d_flex'>
                    <Catg />
                    <div className='contentWidth1'>
                        <div className='heading d_flex'>
                            <div className='row f_flex'>
                                <h2>Mobile Phones</h2>
                            </div>
                            <div className='heading-right row '>
                                <span>View all</span>
                                <i className="fa fa-caret-right"></i>
                            </div>
                        </div>
                        <div className='product-content  grid2'>
                            <ShopCart addToCart={addToCart} shopItems={shopItems} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop