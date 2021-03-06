import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import './login-form.css'

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {

        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
           

            <form
                className="login-form form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                    placeholder="username"
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                    placeholder="password"
                />
                <div className="demo-credentials">
                    <span className="demo-credentials-title">Demo Credentials</span>
                    <p className="demo-credentials-user">Username:<span className="user-text">guest</span></p>
                    <p className="demo-credentials-pw">Password:<span className="pw-text">travel</span></p>
                </div>
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
                <p className="message">Not registered? <a href="./register">Create an account</a></p>
            </form>

        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
