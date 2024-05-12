import React from 'react'
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import '../routes/Login.css'

const Login = () => {
    const handleClickRegister = (values) => console.log(values)
    const handleClickLogin = (values) => console.log(values)

    const validationLogin = yup.object().shape({
        email: yup
        .string()
        .email("Não é um email")
        .required("Este campo é obrigatorio"),
        password: yup
        .string()
        .min(8)
        .required("Este campo é obrigatorio"),
    });

    const validationRegister= yup.object().shape({
        email: yup
        .string()
        .email("Não é um email")
        .required("Este campo é obrigatorio"),
        password: yup
        .string()
        .min(8)
        .required("Este campo é obrigatorio"),
        confirmPassword:yup.string().oneOf([yup.ref("password"),null],"As senhas não são iguais!")
    });

  return (
    <div className='container'>
        <h1>Login</h1>
        <Formik
        initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
        >
            <Form className="login-form">
                <div className='login-form-group'> 
                    <Field name ="email" className="form-field" placeHolder="Email" />    

                    <ErrorMessage 
                    component="span"
                    name='email'
                    className="form-error"
                    />           
                </div>
                <div className='login-form-group'> 
                    <Field name ="password" className="form-field" placeHolder="Senha" />    

                    <ErrorMessage 
                    component="span"
                    name='password'
                    className="form-error"
                    />           
                </div>
                <button className='button-login' type='submit'> Login </button>
            </Form>
        </Formik>


        <h1>Cadastro</h1>
        <Formik
        initialValues={{}}
        onSubmit={handleClickRegister}
        validationSchema={validationRegister}
        >
            <Form className="login-form">
                <div className='login-form-group'> 
                    <Field name ="email" className="form-field" placeHolder="Email" />    

                    <ErrorMessage 
                    component="span"
                    name='email'
                    className="form-error"
                    />           
                </div>
                
                <div className='login-form-group'> 
                    <Field name ="password" className="form-field" placeHolder="Senha" />    

                    <ErrorMessage 
                    component="span"
                    name='password'
                    className="form-error"
                    />           
                </div>

                <div className='login-form-group'> 
                    <Field name ="confirmPassword" className="form-field" placeHolder="Senha" />    

                    <ErrorMessage 
                    component="span"
                    name='confirmPassword'
                    className="form-error"
                    />           
                </div>
                <button className='button-login' type='submit'> Cadastro </button>
            </Form>
        </Formik>
    </div>
    
  )
}

export default Login