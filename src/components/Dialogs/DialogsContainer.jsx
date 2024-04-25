import React, {useEffect} from 'react'
import {connect} from "react-redux";
import style from './DialogsContainer.module.scss'
import Dialogs from "./Dialogs/Dialogs";
import {
    deleteMessageByIdThunkCreator,
    getDialogsThunkCreator,
    getMessagesByIdThunkCreator, sendMessageUserByIdThunkCreator
} from "../../redux/Slices/DialogsSlice/DialogsThunkCreator";
import {
    getDialogsSelector,
    getIsLoaderDialogsPageSelector,
    getMessagesUserByIdSelector
} from "../../redux/Selectors/Selectors";
import Loader from "../common/Loader/Loader";
import Messages from "./Messages/Messages";
import {useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

const DialogsContainer = (props) => {
    const {
        getDialogsThunkCreator, getMessagesByIdThunkCreator,
        dialogs, messagesUserById, sendMessageUserByIdThunkCreator,
        deleteMessageByIdThunkCreator, isLoaderDialogsPage
    } = props

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        //If in the object with dialogs does not match ID whitch in the URL. Then return false
        const isDialog = dialogs && dialogs.some(element => element.id === Number(params.dialogIdUrl));
        if (isDialog) {
            params.dialogIdUrl && getMessagesByIdThunkCreator(params.dialogIdUrl);
        } else {
            navigate('/dialogs/');
        }
    }, [params.dialogIdUrl, getMessagesByIdThunkCreator, dialogs]);

    useEffect(() => {
        getDialogsThunkCreator();
    }, [getDialogsThunkCreator, params.dialogIdUrl]);

    if (isLoaderDialogsPage) return <Loader/>
    return <div className={style.body}>
        <Dialogs dialogs={dialogs}/>
        <Messages messagesUserById={messagesUserById}
                  dialogIdUrl={params.dialogIdUrl}
                  sendMessageUserByIdThunkCreator={sendMessageUserByIdThunkCreator}
                  deleteMessageByIdThunkCreator={deleteMessageByIdThunkCreator}
        />
    </div>
}

const mapStateToProps = state => ({
    dialogs: getDialogsSelector(state),
    isLoaderDialogsPage: getIsLoaderDialogsPageSelector(state),
    messagesUserById: getMessagesUserByIdSelector(state),
})

export default compose(
    connect(mapStateToProps, {
        getDialogsThunkCreator,
        getMessagesByIdThunkCreator,
        sendMessageUserByIdThunkCreator,
        deleteMessageByIdThunkCreator,
    }),
    WithAuthRedirect,
)(DialogsContainer)