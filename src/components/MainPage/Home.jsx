import React from 'react'
import Categories from './Categories'
import SlideHome from './Slide'
import "./Home.css"


function Home() {
    return (
        <div>
            <section className="home" >
                <div className="container" >
                    <Categories />
                    <SlideHome  />
                </div>
            </section>
        </div>
    )
}

export default Home