import {connect} from "react-redux";
import Navbar from "./Navbar";

const stateToProps = (state) => ({
    urlData: state.urlData,
})

const dispatchToProps = (dispatch) => {
    return {

    }
}

const NavbarContainer = connect(stateToProps, dispatchToProps)(Navbar)
export default NavbarContainer;