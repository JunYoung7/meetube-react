import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    Input
} from 'reactstrap';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from '../../assets/images/logo-icon.png';
import logolighticon from '../../assets/images/logo-light-icon.png';
import logodarktext from '../../assets/images/logo-text.png';
import logolighttext from '../../assets/images/logo-light-text.png';
import profilephoto from '../../assets/images/users/1.jpg';

const Header = () => {

    const showMobilemenu = () => {
        document.getElementById('main-wrapper').classList.toggle('show-sidebar');
    }

    /*--------------------------------------------------------------------------------*/
    /*To open Search Bar                                                              */
    /*--------------------------------------------------------------------------------*/
    const toggleMenu = () => {
        document.getElementById('search').classList.toggle('show-search');
    }


    return (
        <header className="topbar navbarbg" data-navbarbg="skin4">
            <Navbar className="top-navbar" dark expand="md">
                <div className="navbar-header" id="logobg" data-logobg="skin4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
                    {/*--------------------------------------------------------------------------------*/}
                    <NavbarBrand href="/">
                        <b className="logo-icon">
                            <img
                                src={logolighticon}
                                alt="homepage"
                                className="light-logo"
                            />
                        </b>
                        <span className="logo-text">
                            <img
                                src={logolighttext}
                                className="light-logo"
                                alt="homepage"
                            />
                        </span>
                    </NavbarBrand>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Mobile View Toggler  [visible only after 768px screen]                         */}
                    {/*--------------------------------------------------------------------------------*/}
                    <button
                        className="btn-link nav-toggler d-block d-md-none text-white"
                        onClick={() => showMobilemenu()}
                    >
                        <i className="ti-menu ti-close" />
                    </button>
                </div>
                <Collapse
                    className="navbarbg"
                    navbar
                    data-navbarbg="skin4"
                >
                    <Nav className="float-left" navbar>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* Start Search-box toggle                                                        */}
                        {/*--------------------------------------------------------------------------------*/}
                        <NavItem className="hidden-sm-down search-box">
                            <NavLink
                                href="#"
                                className="hidden-sm-down"
                                onClick={toggleMenu.bind(null)}
                            >
                                <i className="ti-search" />
                            </NavLink>
                            <Form className="app-search" id="search">
                                <Input type="text" placeholder="Search & enter" />
                                <button className="btn-link srh-btn" onClick={toggleMenu.bind(null)}>
                                    <i className="ti-close" />
                                </button>
                            </Form>
                        </NavItem>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* End Search-box toggle                                                          */}
                        {/*--------------------------------------------------------------------------------*/}
                    </Nav>
                    
                </Collapse>
            </Navbar>
        </header>
    );
}
export default Header;
