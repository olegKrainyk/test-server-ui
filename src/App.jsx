import { useState } from 'react';
import './App.css'
import Login from './Login/Login'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile/Profile'
import { io } from 'socket.io-client'
import { useNavigate } from 'react-router-dom'

export default function App(){

  const navigate = useNavigate()
  const socket = io('http://10.241.104.202:8888')

  socket.on("logout", response => {
    console.log('deleting session ' + response);
    
    if(response == user.sessionid && response !== null && user.sessionid !== null) {
      localStorage.setItem("user", '[{}]')
      navigate('/')
      setUser([{}]);
    }
  })

  const [user, setUser] = useState(localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")) : '[{}]');

  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Login user={user} setUser={setUser} />} />
        <Route path='login' element={<Login user={user} setUser={setUser} />} />
        <Route path='profile' element={<Profile user={user} setUser={setUser} />} />
      </Routes>
      
    </div>
  );
}