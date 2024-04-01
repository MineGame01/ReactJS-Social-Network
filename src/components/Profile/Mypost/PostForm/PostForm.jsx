import {maxLeangth, required} from "../../../../Utils/Validation/Validation";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../../common/FormElements/FormElement";
import React from "react";

const maxLeangth50 = maxLeangth(150)

const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name={'newPost'}
                component={TextArea}
                placeholder={'Новий пост'}
                validate={[required, maxLeangth50]}
            />
        </div>
        <div>
            <button
                className='buttonDefault'
            >
                New post
            </button>
        </div>
    </form>
}

const PostFormRedux = reduxForm({form: 'post'})(PostForm)
export default PostFormRedux