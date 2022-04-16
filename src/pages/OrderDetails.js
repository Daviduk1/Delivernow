import React from 'react'
import './OrderDetails.css'
const OrderDetails = () => {
  return (
    <div className='place-order'>
        <div className="order">
            <h2>Order details</h2>
            <h1>Kolskickshaw</h1>
            <p>Victoria Iceland, Lagos</p>
            <img src="./Images/order.jpeg" alt="" />
        </div>
        <div className="order-description">
            <h2 className='describe'>Description</h2>
            <div className="order-details">
                <p>One box of pepperoni<br></br>
                   chees pizza with a<br></br>
                   complimentry drinks
                </p>
                <div className="order-commission">
                <div className="oc">
                <h2>Commision fee</h2>
                </div>
                <div className="comm-sign">
                <h3>
                    <i className="fa-solid fa-naira-sign"></i>
                    <span className='comm'>700</span>
                </h3>
                </div>
                </div>
            </div>
        </div>
        <div className="customer-details">
            <h3>Customer Details</h3>
            <p>chinedu@gmail.com</p>
            <input type="text" />
        </div>
    </div>
  )
}
export default OrderDetails
