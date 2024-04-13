import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {InitilizationThunkCreator} from "./redux/Slices/AppSlice/AppThunkCreator";
import Loader from "./components/Loader/Loader";
import {Outlet} from "react-router-dom";
import './App.css'
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {getGlobalErorrs} from "./redux/Selectors/Selectors";
import ResponseErrorPage from "./components/common/ResponseErrorPage/ResponseErrorPage";

const App = (props) => {
    const {
        InitilizationThunkCreator, globalErorrs
    } = props

    useEffect(() => {
        InitilizationThunkCreator()
    }, [InitilizationThunkCreator]);

    if (!props.initilization) {
        return <Loader/>
    }
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className={'app-wrapper-content'}>
                {globalErorrs ? <ResponseErrorPage error={globalErorrs} /> : <Outlet/>}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    initilization: state.app.initilization,
    globalErorrs: getGlobalErorrs(state)
})

export default compose(
    connect(mapStateToProps, {
        InitilizationThunkCreator,
    }),
)(App);