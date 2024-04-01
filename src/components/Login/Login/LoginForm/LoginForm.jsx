import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../../../common/FormElements/FormElement";
import style from './LoginForm.module.scss'

const LoginForm = props => {
    const {
        handleSubmit, error,
        url, isLoadesAuth,
        reset
    } = props
    return <form onSubmit={handleSubmit} className={style.body}>
        <div>
            <Field
                name={'email'}
                component={Input}
                type={'email'}
                placeholder={'Email'}
            />
        </div>
        <div>
            <Field
                name={'password'}
                component={Input}
                type={'password'}
                placeholder={'Password'}
            />
        </div>
        <div>
            <Field
                name={'rememberMe'}
                component={'input'}
                type={'checkbox'}
            />
            Remember Me
        </div>
        <div>
            <div>
                {error === 'Incorrect anti-bot symbols' && <div>
                    <img src={url} alt={url}/>
                    <div>
                        <Field
                            name={'captcha'}
                            component={Input}
                            type={'text'}
                            placeholder={'Captcha'}
                        />
                    </div>
                </div>}
            </div>

        </div>
        <div style={{color: "red"}}>
            {error && <span>{error}</span>}
        </div>
        <button
            disabled={isLoadesAuth}
            type={'submit'}
            className={'buttonDefault'}
        >Login
        </button>
        <button
            type={'button'}
            onClick={reset}
            className={'buttonDefault'}
        >Очистить форму
        </button>
    </form>
}

const LoginFormReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginFormReduxForm;