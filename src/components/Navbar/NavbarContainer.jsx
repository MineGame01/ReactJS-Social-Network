import {connect} from "react-redux";
import Navbar from "./Navbar";

const stateToProps = (state) => ({
    urlData: state.urlData,
})

const NavbarContainer = connect(stateToProps, null)(Navbar)
export default NavbarContainer;