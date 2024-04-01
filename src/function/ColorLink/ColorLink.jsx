import {Link, useMatch} from "react-router-dom";

const ColorLink = ({to, children, ...props}) => {
    const match = useMatch(to + '*');
    return (<Link
        to={to}
        {...props}
        style={
            {
                color: match ? "red" : "white"
            }
        }
    >
        {children}
    </Link>)
}

export default ColorLink;