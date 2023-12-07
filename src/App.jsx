import { useState } from 'react';
import './App.css'
import axios from 'axios'

export default function App(){

const [info, setInfo] = useState('');
const [login, setLogin] = useState('');
const [password, setPassword] = useState('');
const [account, setAccount] = useState({username: '', admin: false});

const handleLoginChange = (e) => {
  setLogin(e.target.value);
}

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
}

const handleClick = () => {
  console.log('lox click');

    axios.get(`http://10.241.104.202:8080/it-works`)
        .then(response => {
            console.log(response);
            setInfo(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

const loginHandleClick = () => {
  if(login !== '' && password !== ''){

    axios.get(`http://10.241.104.202:8080/login`, {params: {login: login, pass: password}})
          .then(response => {
              if(response.data === login) {
                setAccount({name: response.data, admin: true})
                setLogin('')
                setPassword('')
              } else {
                setAccount({name: '', admin: false});
              }
          })
          .catch(error => {
              console.error('There was an error!', error);
          });
    }
}

  return (
    <div className="App">

      <div className='login-form'>
        <input placeholder="Login" maxLength={20} type='email' value={login} onChange={handleLoginChange} className='login'></input>
        <input placeholder="Password" maxLength={30} type='password' value={password} onChange={handlePasswordChange} className='pass'></input>
        <div className='login-btn' onClick={loginHandleClick}>Log In</div>
      </div>

      <div className='check-connection'>
        <div className='get-info-btn' onClick={handleClick}>check connection</div>
        <div className='info-text'>{info}</div>
      </div>

      <div className={account.name !== '' ? 'account-name' : 'failed-to-login'}>{account.name !== '' ? account.name : 'Authentication Failed'}</div> 
    </div>
  );
}