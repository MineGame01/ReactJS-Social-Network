import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {InitilizationThunkCreator} from "./redux/Slices/AppSlice/AppThunkCreator";
import Loader from "./components/Loader/Loader";
import {Outlet} from "react-router-dom";
import './App.css'
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    const {InitilizationThunkCreator} = props

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
                <Outlet/>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    initilization: state.app.initilization,
})

export default compose(
    connect(mapStateToProps, {
        InitilizationThunkCreator,
    }),
)(App);