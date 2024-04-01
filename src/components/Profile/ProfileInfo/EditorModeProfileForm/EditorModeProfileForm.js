import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormElements/FormElement";
import style from './EditorModeProfileForm.module.scss'

const EditorModeProfileForm = props => {
    return <form onSubmit={props.handleSubmit} className={style.body}>
        <Field
            name={'fullName'}
            component={Input}
            type={'text'}
            placeholder={'Ваше имя?'}
        />
        <Field
            name={'aboutMe'}
            component={Input}
            type={'text'}
            placeholder={'Про себя'}
        />
        <div className={style.body__checkbox}>
            <span className={style.body__checkbox__text}>Ищете роботу?</span><Field
            name={'lookingForAJob'}
            component={Input}
            type={'checkbox'}
        />
        </div>
        <Field
            name={'lookingForAJobDescription'}
            type={'text'}
            component={Input}
            placeholder={'Описание роботы'}
        />
        {props.nameContacts.map(name => {
            return <div>
                <Field
                    name={name}
                    component={Input}
                    className={'textareaDefault'}
                    placeholder={name}
                />
            </div>
        })}
        {props.error && <span style={{color: "red"}}>{props.error} </span>}
        <div>
            <button className={'buttonDefault'}>Изменить</button>
        </div>
    </form>
}

export default reduxForm({form: 'EditProfile'})(EditorModeProfileForm)