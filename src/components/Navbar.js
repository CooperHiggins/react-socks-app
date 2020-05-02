import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navabr-expand-sm navbar-light px-sm-5">

                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand w-3" />
                </Link>

                <ul className="navbar-nav align-items-center">

                    <li className="nav-item ml-5"></li>

                    <Link to='/' className=''>
                        products
                    </Link>

                    <Link to='/cart' className=''>
                        <button>
                            <i className="fa fa-cart-plus">My Cart</i>
                        </button>
                    </Link>

                </ul>

            </nav>
        )
    }
}
