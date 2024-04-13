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
import Loader from "../Loader/Loader";
import Messages from "./Messages/Messages";
import {useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

const DialogsContainer = (props) => {
    const {
        getDialogsThunkCreator, getMessagesByIdThunkCreator,
        dialogs, messagesUserById, sendMessageUserByIdThunkCreator,
        deleteMessageByIdThunkCreator
    } = props
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        params.dialogId && getMessagesByIdThunkCreator(params.dialogId)
        //If in the object with dialogs does not match ID whitch in the URL. Then return false
        const isDialog = dialogs && dialogs.some(element => element.id === Number(params.dialogId))
        if (!isDialog) navigate('/dialogs/')
    }, [params.dialogId, getMessagesByIdThunkCreator, dialogs, navigate]);

    useEffect(() => {
        getDialogsThunkCreator()
    }, [getDialogsThunkCreator]);

    if (props.isLoaderDialogsPage) return <Loader />
    return <div className={style.body}>
        <Dialogs dialogs={dialogs}/>
        <Messages messagesUserById={messagesUserById}
                  dialogId={params.dialogId}
                  sendMessageUserByIdThunkCreator={sendMessageUserByIdThunkCreator}
                  deleteMessageByIdThunkCreator={deleteMessageByIdThunkCreator}
        />
    </div>
}

const mapStateToProps = state => ({
    dialogs: getDialogsSelector(state), //Getting all dialogs
    isLoaderDialogsPage: getIsLoaderDialogsPageSelector(state), ////Getting value to the dialogs page loader
    messagesUserById: getMessagesUserByIdSelector(state) //Getting all user messages by ID
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