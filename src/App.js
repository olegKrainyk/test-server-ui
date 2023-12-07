import { useState } from 'react';
import './App.css'
import axios from 'axios'

export default function App(){

const [info, setInfo] = useState('');
const [login, setLogin] = useState('');
const [account, setAccount] = useState({username: '', admin: false});

const handleLoginChange = (e) => {
  setLogin(e.target.value);
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

  axios.get(`http://10.241.104.202:8080/login`, {params: {login: login}})
        .then(response => {
            if(response.data === login) {
              setAccount({name: response.data, admin: true});
            } else {
              setAccount({name: '', admin: false});
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

  return (
    <div className="App">
      <div>
        <div className='get-info-btn' onClick={handleClick}>get info from rasp server</div>
        <div className='info-text'>{info}</div>
      </div>
      <input placeholder="Login" value={login} onChange={handleLoginChange} className='login'></input>

      <div className='login-btn' onClick={loginHandleClick}>Login me</div>

      <div className={account.name !== '' ? 'account-name' : 'failed-to-login'}>{account.name !== '' ? account.name : 'Failed to login'}</div> 
    </div>
  );
}