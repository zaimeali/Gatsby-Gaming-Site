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
                text: 'about'
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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to='/' className="navbar-brand ml-sm-5">
                    <img className="custom-nav-img" src={ logo } alt="logo here" />
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
                            <Link href="#" className="btn btn-secondary">
                                <span>Add to Cart</span> <FaCartArrowDown className="cart-icon" />
                            </Link>
                        </li>
                    </ul>
                    {/*<Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>*/}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
