import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestPasswordReset } from '../slices/usersApi';

function PasswordResetRequest() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(requestPasswordReset(email));
  }

  return (
    <form onSubmit={submitHandler}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Introduceți e-mailul"
      />
      <button type="submit">Solicită resetarea parolei</button>
    </form>
  );
}

export default PasswordResetRequest;