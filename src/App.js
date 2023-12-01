import { useState } from 'react';
import './App.css'
import axios from 'axios'

export default function App(){

const [info, setInfo] = useState('');
const [login, setLogin] = useState('');

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
  console.log(login);

  axios.post(`http://10.241.104.202:8080/login`, {data: login})
        .then(response => {
            console.log(response);
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
    </div>
  );
}