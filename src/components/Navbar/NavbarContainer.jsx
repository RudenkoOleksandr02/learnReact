import React from 'react';
import StoreContext from "../../StoreContext";
import Navbar from "./Navbar";

const NavbarContainer = (props) => {
    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();
            return <Navbar navLinks={state.sidebarPage.navLinks}
                           friends={state.sidebarPage.friends}/>
        }}
    </StoreContext.Consumer>
}

export default NavbarContainer;