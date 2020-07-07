import React, { Component } from 'react'

import { Link } from 'gatsby'
import logo from '../../images/controller.png'

import { FaCartArrowDown } from 'react-icons/fa'

import { Navbar } from 'react-bootstrap'

export default class ComponentName extends Component {

    state = {
        navbarOpen: false,
        navClass: 'collapse navbar-collapse',
        links: [
            {
                id: 1,
                path: '/',
                text: 'home'
            },
            {
                id: 2,
                path: '/about',
                text: 'about us'
            },
            {
                id: 3,
                path: '/blog',
                text: 'blog'
            },
            {
                id: 4,
                path: '/team',
                text: 'team'
            }
        ],
    }

    
    navbarHandler = () => {
        this.state.navbarOpen ? this.setState({
            navbarOpen: false,
            css: "collapse navbar-collapse"
        }) : this.setState({
            navbarOpen: true,
            css: "collapse navbar-collapse show"
        })
    }

    render() {
        return (
            <Navbar className="custom-nav sticky-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to='/' className="navbar-brand ml-sm-5">
                    <img className="custom-nav-img" src={ logo } alt="logo here" />
                    <span className="web-title">ZEUS</span>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <ul className="navbar-nav ml-auto">
                        {
                            this.state.links.map(link => (
                                <li key={ link.id }>
                                    <Link className="nav-link text-capitalize" to={ link.path }>
                                        { link.text }
                                    </Link>
                                </li>
                            ))
                        }
                        <li className="nav-item ml-sm-3 mr-sm-5">
                            <Link href="#" className="btn btn-secondary btn-sm ctm-btn">
                                <span>Add to Cart</span> <FaCartArrowDown className="cart-icon" />
                            </Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
