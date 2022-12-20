import React from 'react'
import "./Style.css"
import { FaHeadset, FaRegIdCard, FaShieldAlt, FaTruck } from "react-icons/fa"
function Wrapper() {
    const data = [
        {
            cover: <i><FaTruck /></i>,
            title: "Worldwide Delivery",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i><FaRegIdCard /></i>,
            title: "Safe Payment",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i><FaShieldAlt /></i>,
            title: "Shop With Confidence ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i><FaHeadset /></i>,
            title: "24/7 Support ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
    ]
    return (
        <>
            <section className="wrapper background">
                <div className="container grid2">
                    {
                        data.map((item, index) => {
                            return (
                                <>
                                    <div className="product" key={index}>
                                        <div className="img icon-circle ">
                                            <i>{item.cover}</i>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.decs}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Wrapper