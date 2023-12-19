import { useState } from 'react';
import './App.css'
import Login from './Login/Login'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile/Profile'

export default function App(){

  const [user, setUser] = useState({login: '', admin: false});

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