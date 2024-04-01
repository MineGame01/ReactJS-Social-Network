import {addMessage} from "../../redux/Slices/MessagesSlice/MessagesSlice";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

const DialogsContainer = compose(
    connect(mapStateToProps, {
        addMessage,
    }),
    WithAuthRedirect,
)(Dialogs)

export default DialogsContainer;