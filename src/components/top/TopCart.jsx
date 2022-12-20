import React, { useState } from 'react'
// import Tdata from "./Tdata"
import "./Style.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
function TopCart() {
    const [Tdata, setTdata] = useState([
        {
            cover: "./images/top/category-1.png",
            para: "headphone",
            desc: "3k orders this week",
        },
        {
            cover: "./images/top/category-2.png",
            para: "watch",
            desc: "4k orders this week",
        },
        {
            cover: "./images/top/category-3.png",
            para: "sunglass",
            desc: "6k orders this week",
        },
        {
            cover: "./images/top/category-2.png",
            para: "watch",
            desc: "4k orders this week",
        },
        {
            cover: "./images/top/category-3.png",
            para: "sunglass",
            desc: "6k orders this week",
        },
    ])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <div>
            <Slider {...settings} >
                {Tdata.map((item, index) => (
                    <>
                        <div className="box product" key={index}>
                            <div className="nametop d_flex">
                                <span className='tleft'>{item.para}</span>
                                <span className='tright'>{item.desc}</span>
                            </div>
                            <div className="img">
                                <img src={item.cover} alt="" />
                            </div>
                        </div>
                    </>
                ))}
            </Slider>
        </div>
    )
}

export default TopCart