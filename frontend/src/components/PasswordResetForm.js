import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../slices/usersApi';

function PasswordResetForm() {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ token, password }));
  }

  return (
    <form onSubmit={submitHandler}>
      <input 
        type="text" 
        value={token} 
        onChange={(e) => setToken(e.target.value)} 
        placeholder="Introduceți tokenul primit prin e-mail"
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Introduceți noua parolă"
      />
      <button type="submit">Resetați parola</button>
    </form>
  );
}

export default PasswordResetForm;