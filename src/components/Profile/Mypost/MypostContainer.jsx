import Mypost from "./Mypost";
import {addPostAction, deslikeUp, likeUp} from "../../../redux/Slices/ProfileSlice/ProfileSlice";
import {connect} from "react-redux";
import {getPostDataState} from "../../../redux/Selectors/Selectors";

const mapStateToProps = (state) => {
    return {
        postData: getPostDataState(state)
    }
}

const MypostContainer = connect(mapStateToProps, {
    addPostAction,
    deslikeUp,
    likeUp
})(Mypost);

export default MypostContainer;