import React from 'react'
import LoginFormReduxForm from "./LoginForm/LoginForm";

class Login extends React.Component {
    componentDidMount() {
        this.props.getUrlCaptchaThunkCreator()
    }

    onSubmit = (values) => {
        this.props.AuthLoginThunkCreator(values)
    }
    render() {
        return (
            <div>
                <h1>LOGIN</h1>
                <LoginFormReduxForm
                    onSubmit={this.onSubmit}
                    url={this.props.urlCaptcha}
                    isLoadesAuth={this.props.isLoadesAuth}
                />
            </div>
        )
    }
}

export default Login