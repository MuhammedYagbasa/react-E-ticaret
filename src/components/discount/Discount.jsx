import React from 'react'
import Dcart from './Dcart'

function Discount() {

    return (
        <>
            <div className="Discount background NewArrivals">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
                            <h2>Big Discounts</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <Dcart />
                </div>
            </div>
        </>
    )
}

export default Discount