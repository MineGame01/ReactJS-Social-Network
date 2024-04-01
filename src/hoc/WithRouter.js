import {useLocation, useNavigate, useParams} from "react-router-dom";
import React from "react";

export function WithRouter(Component) {
    function ComponentToProps(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        )
    }
    return ComponentToProps;
}