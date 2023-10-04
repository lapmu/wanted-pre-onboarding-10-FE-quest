import React, { useState } from 'react';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleIdOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleButtonOnClick = () => {
    console.log({ ID: id, PASSWORD: password });
  };

  return (
    <div>
      <div>
        ID : <input value={id} onChange={handleIdOnChange} />
      </div>
      <div>
        PASSWORD :{' '}
        <input
          type='password'
          value={password}
          onChange={handlePasswordOnChange}
        />
      </div>
      <div>
        <button type='button' onClick={handleButtonOnClick}>
          submit
        </button>
      </div>
    </div>
  );
}

export default Login;
