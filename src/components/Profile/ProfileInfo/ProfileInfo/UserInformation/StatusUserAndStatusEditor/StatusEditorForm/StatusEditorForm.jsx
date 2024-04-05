import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../../../../common/FormElements/FormElement";
import {maxLeangth, required} from "../../../../../../../Utils/Validation/Validation";

//Max length text 300
const maxLeangth300 = maxLeangth(300)

const StatusEditorForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name={'editorInput'}
                className={'textareaDefault'}
                autoFocus={true}
                component={Input}
                validate={[required, maxLeangth300]}
                style={{width: 200, height: 20}}
            />
        </div>
        <div>
            <button
                className={'buttonDefault'}
            >Edit</button>
        </div>
    </form>
}

const EditorModeFormRedux = reduxForm({form: 'editorModeForm', enableReinitialize: true})(StatusEditorForm)

export default EditorModeFormRedux