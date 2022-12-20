import React from 'react'

function Annu() {
    const mystyle = {
        width: "30%",
        height: "340px"
    }
    const mystyle2 = {
        width: "69%",
        height: "340px"
    }
    return (
        <>
            <div className="annuc background">
                <div className="container d_flex">
                    <div className="img" style={mystyle}>
                        <img src="./images/banner-1.png" alt="" width="100%" height="100%" />
                    </div>
                    <div className="img" style={mystyle2}>
                        <img src="./images/banner-2.png" alt="" width="100%" height="100%" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Annu