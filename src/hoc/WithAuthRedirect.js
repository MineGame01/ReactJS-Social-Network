import React from 'react'
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithRouter} from "./WithRouter";

const mapStateToProps = state => {
    return {
        isAuth: state.AuthData.isAuth,
    }
}

export const WithAuthRedirect = (Component) => {
    const WithAuthRedirectToProps = (props) => {
        if (!props.isAuth) {
            if (props.router.params.userId) {
                return <Component {...props} />
            } else {
                return <Navigate to='/login' />
            }
        }
        return <Component {...props} />
    }

    return compose(
        connect(mapStateToProps, {}),
        WithRouter
    )(WithAuthRedirectToProps)
}