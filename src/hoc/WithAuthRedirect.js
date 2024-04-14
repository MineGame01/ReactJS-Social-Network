import React from 'react'
import {Navigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

const mapStateToProps = state => {
    return {
        isAuth: state.AuthData.isAuth,
    }
}

export const WithAuthRedirect = (Component) => {
    const WithAuthRedirectToProps = (props) => {
        const params = useParams();
        if (!props.isAuth) {
            if (params.userId) {
                return <Component {...props} />
            } else {
                return <Navigate to='/login' />
            }
        }
        return <Component {...props} />
    }

    return compose(
        connect(mapStateToProps, {})
    )(WithAuthRedirectToProps)
}