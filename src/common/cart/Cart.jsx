import React from 'react'
import "./Cart.css"
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai"
function Cart({ cartItem, addToCart, decreaseQty }) {
    const totoalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)
    return (
        <>
            <section className="cart-items">
                <div className="container d_flex">
                    <div className="cart-details">
                        {cartItem.length === 0 && <h1 className='no-items product'>Sepetize bir şey daha eklemediz</h1>}
                        {cartItem.map((item, index) => {
                            const productQty = item.price * item.qty
                            return (
                                <div key={index} className="cart-list product d_flex">
                                    <div className="img">
                                        <img src={item.cover} alt="" />
                                    </div>
                                    <div className="cart-details">
                                        <h3>{item.name}</h3>
                                        <h4>{item.price}.00 * {item.qty}
                                            <span>${productQty}.00</span>
                                        </h4>
                                    </div>
                                    <div className="cart-items-function">
                                        <div className="removeCart">
                                            <button>
                                                < AiOutlineClose />
                                            </button>
                                        </div>


                                        <div className="cartControl d_flex">
                                            <button className="inCart" onClick={() => addToCart(item)}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                            <button className="inCart" onClick={() => decreaseQty(item)}>
                                                <AiOutlineMinus />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="cart-total product" >
                        <h2>Cart Summary</h2>
                        <div className="d_flex">
                            <h4> Cargo: <br /><br />
                                Total Price:
                            </h4>
                            <h3 ><del >$10.00</del><br />
                                <p style={{ marginTop: "15px" }}>${totoalPrice}.00</p>

                            </h3>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Cart