import {Field, reduxForm} from "redux-form";
import {Input} from "../../../../../common/FormElements/FormElement";
import style from './ProfileEditorForm.module.scss'

const ProfileEditorForm = props => {
    return <form onSubmit={props.handleSubmit} className={style.body}>
        <Field
            name={'fullName'}
            component={Input}
            type={'text'}
            placeholder={'Your name?'}
        />
        <Field
            name={'aboutMe'}
            component={Input}
            type={'text'}
            placeholder={'About myself'}
        />
        <div className={style.body__checkbox}>
            <span className={style.body__checkbox__text}>Looking for a job?</span><Field
            name={'lookingForAJob'}
            component={Input}
            type={'checkbox'}
        />
        </div>
        <Field
            name={'lookingForAJobDescription'}
            type={'text'}
            component={Input}
            placeholder={'Description of work'}
        />
        {Object.keys(props.profileData.contacts).map(key => {
            return <Field
                key={key}
                name={'contacts.' + key}
                component={Input}
                placeholder={key}
            />
        })}
        {props.error && <span style={{color: "red"}}>{props.error} </span>}
        <div>
            <button className={'buttonDefault'}>Edit</button>
        </div>
    </form>
}

export default reduxForm({form: 'EditProfile', enableReinitialize: true})(ProfileEditorForm)