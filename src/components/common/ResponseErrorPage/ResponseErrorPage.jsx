import React, {useEffect, useRef, useState} from 'react'
import {connect} from "react-redux";
import {clearAllGlobalErrors} from "../../../redux/Slices/AppSlice/AppSlice";
import {useNavigate} from "react-router-dom";

const ResponseErrorPage = props => {
    const {clearAllGlobalErrors, error, routerError} = props

    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(5);
    const intervalId = useRef(); //ID to the interval

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setSeconds(prevState => prevState - 1);
        }, 1000);
    }, []);

    if (seconds === 0) {
        clearInterval(intervalId.current);
        navigate('/profile');
        setTimeout(() => {
            clearAllGlobalErrors();
        }, 500);
    }

    const isError = (error && error.response.status) || routerError || 'Unknown Error!'
    return <div style={{color: "white"}}>
        <h1>Error: {isError}</h1>
        <div>Reloading: {seconds}</div>
    </div>
}

export default connect(null, {clearAllGlobalErrors})(ResponseErrorPage);