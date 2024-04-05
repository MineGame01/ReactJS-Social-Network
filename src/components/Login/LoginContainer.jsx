import React from 'react'
import {connect} from "react-redux";
import Login from "./Login/Login";
import {AuthLoginThunkCreator} from "../../redux/Slices/AuthSlice/AuthThunkCreator";
import {Navigate} from "react-router-dom";
import {getIsAuthState, getIsLoadesAuthState, getUrlCaptchaState} from "../../redux/Selectors/Selectors";

class LoginContainer extends React.Component {
    render() {
        const {AuthLoginThunkCreator, urlCaptcha, isLoadesAuth, isAuth} = this.props
        if (isAuth)
            return <Navigate to={'/profile'} />
        return <div>
            <Login
                AuthLoginThunkCreator={AuthLoginThunkCreator}
                urlCaptcha={urlCaptcha}
                isLoadesAuth={isLoadesAuth}
            />
        </div>
    }
}

const mapStateToProps = state => ({
    urlCaptcha: getUrlCaptchaState(state),
    isLoadesAuth: getIsLoadesAuthState(state),
    isAuth: getIsAuthState(state)
})

export default connect(mapStateToProps, {
    AuthLoginThunkCreator
})(LoginContainer)