import React from 'react'
import Ddata from "./Ddata";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
function Dcart() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        marign: 200,
    }
    return (
        <>
            <div className="content">
                <Slider {...settings} >
                    {Ddata.map((item, index) => (
                        <>
                            <div className=" product" key={index}>
                                <div className="box">
                                    <div className="img">
                                        <img src={item.cover} width="100%" alt="" />
                                    </div>
                                    <h4>{item.name}</h4>
                                    <span>{item.price}</span>
                                </div>
                            </div>
                        </>
                    ))}

                </Slider>
            </div>
        </>
    )
}

export default Dcart