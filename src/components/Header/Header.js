import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <header id="masthead" className="sheader site-header clearfix">
                    <nav id="primary-site-navigation" className="primary-menu main-navigation clearfix">

                        <a href="#" id="pull" className="smenu-hide toggle-mobile-menu menu-toggle" aria-controls="secondary-menu" aria-expanded="false">Menu</a>
                        <div className="top-nav-wrapper">
                            <div className="content-wrap">
                                <div className="logo-container">

                                    <a className="logofont" href="#" rel="home">Theme Preview</a>
                                </div>
                                <div className="center-main-menu">
                                    <div id="primary-menu" className="pmenu"><ul>
                                        <li className="page_item page-item-2"><a href="#">About</a></li>
                                        <li className="page_item page-item-46 page_item_has_children"><a href="#">Parent Page</a><span className="sub-arrow"><i className="fa fa-angle-down"></i></span>
                                            <ul className="children">
                                                <li className="page_item page-item-49"><a href="#">Sub-page</a></li>
                                            </ul>
                                        </li>
                                    </ul></div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="super-menu clearfix">
                        <div className="super-menu-inner">
                            <a href="#" id="pull" className="toggle-mobile-menu menu-toggle" aria-controls="secondary-menu" aria-expanded="false">

                            </a><a className="logofont" href="#" rel="home">Theme Preview</a>

                        </div>
                    </div>
                    <div id="mobile-menu-overlay"></div>
                </header>
            </div>
        )
    }
}

export default Header;