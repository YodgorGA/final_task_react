import React from 'react';
import Header from '../../components/header/header';
import Formitem from '../../components/formitem/formitem';
import Button from '../../components/button/button';
const LoginPage = () => {
    return (
        <div className='page-wrapper'>
            <Header/>
            <div className='page-body'>
                <div className='authform'>
                    <div className='authform-content'>
                        <div className='authform-head'>
                            <div className='authform-title'>
                                <h1>Авторизация</h1>
                            </div>
                        </div>
                        <div className='authform-body'>
                            <form className='authform-form login-form'>
                                <Formitem parent='login-form' label='Логин' type='text'/>
                                <Formitem parent='login-form' label='Пароль' type='password'/>
                                <Button parent='login-form' color='success' content='Вход'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;