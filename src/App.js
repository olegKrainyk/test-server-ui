import { useState } from 'react';
import './App.css'
import axios from 'axios'

export default function App(){

const [info, setInfo] = useState('');

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

  return (
    <div className="App">
      <div className='get-info-btn' onClick={handleClick}>get info from rasp server</div>
      <div className='info-text'>{info}</div>
    </div>
  );
}