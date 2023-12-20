import { useState } from 'react'
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router-dom'

export default function Login(props){

const navigate = useNavigate();

const [info, setInfo] = useState('');
const [login, setLogin] = useState('');
const [password, setPassword] = useState('');

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
            console.log(response)
              if(response.data.login === login) {
                props.setUser(response.data)
                setLogin('')
                setPassword('')
                localStorage.setItem("user", JSON.stringify(response.data));
                navigate('/profile');
              } else {
                props.setUser({name: '', admin: false});
              }
          })
          .catch(error => {
              console.error('There was an error!', error);
          });
    }
}

  return (
    <div className="login-block">

      <div className='login-form'>
        <input placeholder="Login" maxLength={20} type='email' value={login} onChange={handleLoginChange} className='login'></input>
        <input placeholder="Password" maxLength={30} type='password' value={password} onChange={handlePasswordChange} className='pass'></input>
        <div className='login-btn' onClick={loginHandleClick}>Log In</div>
      </div>

      <div className='check-connection'>
        <div className='get-info-btn' onClick={handleClick}>check connection</div>
        <div className='info-text'>{info}</div>
      </div>

      <div className={props.user.name !== '' ? 'account-name' : 'failed-to-login'}>{props.user.name !== '' ? '' : 'Authentication Failed'}</div> 
    </div>
  );
}