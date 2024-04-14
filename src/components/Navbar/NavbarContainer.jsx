import {connect} from "react-redux";
import Navbar from "./Navbar";
import {getDialogsThunkCreator} from "../../redux/Slices/DialogsSlice/DialogsThunkCreator";
import {getIsAuthState, getUrlDataSelector} from "../../redux/Selectors/Selectors";

const stateToProps = (state) => ({
    urlData: getUrlDataSelector(state), //Getting all url data
    isAuth: getIsAuthState(state) //Authorized user or no?
})

const NavbarContainer = connect(stateToProps, {
    getDialogsThunkCreator
})(Navbar)
export default NavbarContainer;