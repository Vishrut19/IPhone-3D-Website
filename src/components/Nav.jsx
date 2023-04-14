import React from 'react'
import search from "../assets/images/search.svg"
import logo from "../assets/images/logo.svg"
import store from "../assets/images/store.svg"

const Nav = () => {
    return (
        <nav className='nav-wrapper'>
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <img src={logo} alt="apple logo" />
                    </li>
                    <li>
                        <a className='link-styled'>Store</a>
                    </li>
                    <li>
                        <a className='link-styled'>Mac</a>
                    </li>
                    <li>
                        <a className='link-styled'>Ipad</a>
                    </li>
                    <li>
                        <a className='link-styled'>Iphone</a>
                    </li>
                    <li>
                        <a className='link-styled'>watch</a>
                    </li>
                    <li>
                        <a className='link-styled'>Airpods</a>
                    </li>
                    <li>
                        <a className='link-styled'>TV & Home</a>
                    </li>

                    <li>
                        <a className='link-styled'>Entertainment</a>
                    </li>
                    <li>
                        <a className='link-styled'>Accessories</a>
                    </li>
                    <li>
                        <a className='link-styled'>Support</a>
                    </li>
                    <li>
                        <img src={search} alt="" />
                    </li>
                    <li>
                        <img src={store} alt="" />
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Nav