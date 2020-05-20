import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navabr-expand-sm navbar-light px-sm-5">

                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand w-3" />
                </Link>

                <ul className="navbar-nav align-items-center">

                    <li className="nav-item ml-5"></li>

                    <Link to='/' className=''>
                        products
                    </Link>
                    </ul>

                    <Link to='/cart' className='ml-auto'>
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fa fa-cart-plus">My Cart</i>
                            </span>
                        </ButtonContainer>
                    </Link>
                
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav `
background: var(--mainWhite);
    .nav-link {
        color: var(--mainBlue)!important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;