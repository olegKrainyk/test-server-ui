import axios from 'axios'
import './Profile.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


export default function Profile(props){

  const navigate = useNavigate()

  // useEffect(() => {
  //   axios.get(`http://10.241.104.202:8080/check-session`, {params: {sessionid: props.user.sessionid, id: props.user.id}})
  //   .then(response => {
  //       console.log(response.data.active);
  //       if(response.data.active === false) {
  //         handleLogOut();
  //       }
  //   })
  //   .catch(error => {
  //       console.error('There was an error!', error);
  //   });
  // });

  const handleLogOut = () => {

    axios.get(`http://10.241.104.202:8080/log-out-session`, {params: {sessionid: props.user.sessionid, id: props.user.id}})
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });

    localStorage.setItem("user", '[{}]')
    props.setUser([{}]);
    navigate('/')

  }

  const handleViewLogin = () => {
    navigate('/')
  }

  return (
    <>
    <div className='back-to-login icon' onClick={handleViewLogin}>
      {'<-'}
    </div>

    <div className="profile-block">

        <div className='profile-id profile-item'>
          user id: {props.user.id}
        </div>
        <div className="profile-name profile-item">
            {props.user.login}
        </div>

        <div className='profile-full-name profile-item'>
            {props.user.fullName}
        </div>

        <div className='profile-random-number profile-item'>session id: {props.user.sessionid}</div>
        
        <div className='profile-log-out' onClick={handleLogOut}>Log Out</div>
    </div>
    </>
  );
}