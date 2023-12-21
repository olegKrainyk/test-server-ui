import './Profile.css'
import { useNavigate } from 'react-router-dom'


export default function Profile(props){

  const navigate = useNavigate()

  const handleLogOut = () => {

    localStorage.setItem("user", '[{}]')
    props.setUser([{}]);
    navigate('/')

  }

  return (
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

        <div className='profile-random-number profile-item'>session id: {props.user.randomNum}</div>
        
        <div className='profile-log-out' onClick={handleLogOut}>Log Out</div>
    </div>
  );
}