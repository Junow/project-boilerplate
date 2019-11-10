import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Login: React.FC = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const login = async () => {
    const data = {
      id,
      pwd,
    };

    Axios.post('http://localhost:3000/login', data)
      .then((response) => {
        if (response.data.success) {
          alert('login success');
        } else {
          alert(`login fail! - ${response.data.message}`);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };


  const changeId = (e:React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setId(target.value);
  };

  const changePwd = (e:React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPwd(target.value);
  };

  return (
    <div>
      <h1>
        <Link to="/login">
        login
        </Link>
      </h1>
      <h1>
        <Link to="/signup">
            signup
        </Link>
      </h1>
      <input placeholder="id" onChange={changeId} value={id} />
      <input placeholder="pwd" type="password" onChange={changePwd} value={pwd} />
      <input type="submit" value="login" onClick={login} />
    </div>
  );
};

export default Login;
