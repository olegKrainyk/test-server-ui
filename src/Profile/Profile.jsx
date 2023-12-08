import './Profile.css'

export default function Profile(props){

  return (
    <div className="profile-block">
        <div className="profile-name">
            {props.user.login}
        </div>

        <div className='profile-full-name'>
            {props.user.fullName}
        </div>
        
    </div>
  );
}