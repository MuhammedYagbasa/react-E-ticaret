import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { GrNext, GrPrevious } from "react-icons/gr"
import { BsFillBookmarksFill, BsHeart } from "react-icons/bs"

const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next' >
                <i><GrNext /></i>
            </button>
        </div>
    )
}
const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i><GrPrevious /></i>
            </button>
        </div>
    )
}

const styleimg={
    
}
const FlashCard = ({ productItems, addToCart }) => {

    const [count, SetCount] = useState(0)
    const increment = () => {
        SetCount(count + 1)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return (
        <>
            <Slider {...settings}>
                {productItems.map((productItems) => {
                    return (
                        <div className='box'>
                            <div className='product mtop'>
                                <div className='img'>
                                    <span className='discount'>{productItems.discount}% Off</span>
                                    <img src={productItems.cover}  alt='' />
                                    <div className='product-like'>
                                        <label>0</label> <br />
                                        <i onClick={increment}><BsHeart /></i>
                                    </div>
                                </div>
                                <div className='product-details'>
                                    <h3>{productItems.name}</h3>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                    <div className='price'>
                                        <h4>${productItems.price}.00 </h4>
                                        <button onClick={() => addToCart(productItems)} >
                                            <i class="fa-solid fa-cart-circle-plus"><BsFillBookmarksFill /></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default FlashCard
