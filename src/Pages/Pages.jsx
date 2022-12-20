import React from 'react'
import Annu from '../components/annacomunt/Annu'
import Discount from '../components/discount/Discount'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/MainPage/Home'
import NewArrivals from '../components/newarrivals/NewArrivals'
import Shop from '../components/shop/Shop'
import TopCate from '../components/top/TopCate'
import Wrapper from '../components/wrapper/Wrapper'

function Pages({ productItems, cartItem, addToCart,shopItems }) {


    return (
        <>
            <Home cartItem={cartItem} />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <TopCate />
            <NewArrivals />
            <Discount />
            <Shop shopItems={shopItems} addToCart={addToCart}/>
            <Annu/>
            <Wrapper/>
        </>
    )
}
export default Pages