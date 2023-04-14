import React from 'react'
import { left } from 'webgi'
import iphone from "../assets/images/iphone-14.jpg"
import iphoneHold from "../assets/images/iphone-hand.png"
const Jumbotron = () => {
    const handlelearnmore = () => {
        const element = document.querySelector(".sound-section")
        window.scroll({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className='jumbotron-section wrapper'>
            <h2 className="title">New</h2>
            <img src={iphone} className="logo" alt="" />
            <p className='text'>Big and Bigger.</p>
            <span className='description'>from $41.62/mo. for 24 mo. or form $999 before trade-in </span>
            <ul className="links">
                <li>
                    <button className='button'>Buy</button>
                </li>
                <li>
                    <a className="link" onClick={handlelearnmore}>Learn more</a>
                </li>
            </ul>
            <img src={iphoneHold} alt="" className='iphone-img' />
        </div>
    )
}

export default Jumbotron