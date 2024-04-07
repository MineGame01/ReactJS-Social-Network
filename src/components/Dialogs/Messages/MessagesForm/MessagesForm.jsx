import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../../common/FormElements/FormElement";
import {maxLeangth, required} from "../../../../Utils/Validation/Validation";

const maxLength300 = maxLeangth(300)

const MessagesForm = props => {
    const {error} = props

    return <form onSubmit={props.handleSubmit}>
        <Field
            name={'newMessage'}
            component={TextArea}
            placeholder={'New message'}
            validate={[required, maxLength300]}
        />
        {error && <div style={{color: 'red', fontWeight: 700}}>Error: {error}</div>}
        <button className={'buttonDefault'}>Send</button>
    </form>
}

export default reduxForm({form: 'MessagesForm'})(MessagesForm)