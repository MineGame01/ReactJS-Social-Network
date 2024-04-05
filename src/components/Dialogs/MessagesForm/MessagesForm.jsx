import React from 'react'
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormElements/FormElement";
import {maxLeangth, required} from "../../../Utils/Validation/Validation";

const maxLeangth100 = maxLeangth(100)

const MessagesForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name={'newMessage'}
                component={TextArea}
                validate={[required, maxLeangth100]}
            />
        </div>
        <div>
            <button
                className='buttonDefault'
            >
                Send
            </button>
        </div>
    </form>
}

const MessagesFormRedux = reduxForm({form: 'messages'})(MessagesForm)

export default MessagesFormRedux