import React, { useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BsFillBookmarksFill, BsHeart } from "react-icons/bs"

const ShopCard = ({ shopItems, addToCart }) => {
  const [count, SetCount] = useState(0)

  const increment = () => {
    SetCount(count + 1)
  }

  return (
    <>
      {shopItems.map((shopItems) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                  <label>0</label> <br />
                  <i onClick={increment}><BsHeart /></i>
                </div>
              </div>
              <div className='product-details'>
                <h3 className="name">{shopItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${shopItems.price}.00 </h4>
                  <button onClick={() => addToCart(shopItems)} >
                    <i class="fa-solid fa-cart-circle-plus"><BsFillBookmarksFill /></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCard
