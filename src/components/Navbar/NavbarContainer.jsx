import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        navLinks: state.sidebarPage.navLinks,
        friends: state.sidebarPage.friends
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;