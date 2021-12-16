import React, { useState, useContext } from 'react';
import { Form } from 'react-bootstrap';

import { AuthContext } from '../../../contexts/auth';
import { auth } from '../../../api';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [readyOnly, setReadOnly] = useState(false);
  const [error, setError] = useState(false);

  const {user, setUser, token, setToken} = useContext(AuthContext);

  console.log(user);
  console.log(token);

  const handleSubmit = async (e) => {

    e.preventDefault();
    setReadOnly(true);
    setError(false);

    const {access_token} = await auth.login(email, password);
    const response = await auth.me(access_token);
    setToken(access_token);
    setUser(response);
    
    
    setReadOnly(false);
  }

  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-8 col-md-8 col-sm-12 mx-auto">
            <div className="card text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src={require("../../../assets/images/logo.svg")} alt="logo" />
              </div>
              <h4>Olá! Bem vindo!</h4>
              <h6 className="font-weight-light">Faça login para continuar.</h6>
              {error ? 
              <div className="alert alert-danger d-flex justify-content-center align-items-center">
                <span>Email ou senha incorretos!</span>
              </div> :
              ''}

              <Form className="pt-3" onSubmit={handleSubmit}>
                <Form.Group className="d-flex search-field">
                  <Form.Control type="email" placeholder="Digite seu email" size="lg" className="h-auto" disabled={readyOnly} onChange={ e => setEmail(e.target.value) } />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control type="password" placeholder="Digite sua senha" size="lg" className="h-auto" disabled={readyOnly} onChange={ e => setPassword(e.target.value) } />
                </Form.Group>
                <div className="mt-3">
                  <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit">
                    {readyOnly === false ? "LOGIN" : "Carregando"}
                  </button>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-muted">Esqueceu a senha?</a>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )

}
export default Login
