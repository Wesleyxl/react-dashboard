
import React, { useState, useContext } from 'react';
import { Form } from 'react-bootstrap';

import { AuthContext } from '../../../contexts/auth';
import { auth } from '../../../api';

function Teste() {

  const {user, token} = useContext(AuthContext);
  console.log(user);
  console.log(token);


  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0"></div>
      </div>  
    </div>
  )

}
export default Teste;
