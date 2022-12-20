import React from 'react'

function Catg() {
    const data = [
        {
            cateImg: "./images/category/cat-1.png",
            cateName: "Apple",
        },
        {
            cateImg: "./images/category/cat-2.png",
            cateName: "Samasung",
        },
        {
            cateImg: "./images/category/cat-1.png",
            cateName: "Oppo",
        },
        {
            cateImg: "./images/category/cat-2.png",
            cateName: "Vivo",
        },
        {
            cateImg: "./images/category/cat-1.png",
            cateName: "Redimi",
        },
        {
            cateImg: "./images/category/cat-2.png",
            cateName: "Sony",
        },
    ]
    return (
        <>
            <div className="category">
                <div className="catg">
                    <div className="chead d_flex">
                        <h1>Brands</h1>
                        <h1>Shops</h1>
                    </div>
                    {data.map((item, index) => (
                        <div className="box f_flex" key={index}>
                            <img src={item.cateImg} alt="" />
                            <span>{item.cateName}</span>
                        </div>
                    ))}
                    <div className="box box2">
                        <button>view all Barands</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catg