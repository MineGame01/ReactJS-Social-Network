import React from 'react'
import Header from "./Header/Header";
import {connect} from "react-redux";
import {AuthExitThunkCreator} from "../../redux/Slices/AuthSlice/AuthThunkCreator";
import {getAuthDataState, getIsLoadesAuthState} from "../../redux/Selectors/Selectors";

class HeaderContainer extends React.Component {
    render() {
        const {
            data, AuthExitThunkCreator,
            isLoadesAuth
        } = this.props
        return (
            <Header
                data={data}
                AuthExitThunkCreator={AuthExitThunkCreator}
                isLoadesAuth={isLoadesAuth}
            />
        )
    }
}

const mapStateToProps = state => ({
    data: getAuthDataState(state),
    isLoadesAuth: getIsLoadesAuthState(state)
})

export default connect(mapStateToProps, {
    AuthExitThunkCreator
})(HeaderContainer)