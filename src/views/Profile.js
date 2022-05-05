import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {useUser} from '../hooks/ApiHooks';
import '../index.css';

const Profile = () => {
  const [user, setUser] = useState({});
  const {getUser} = useUser();
  const fetchUser = async () => {
    const userData = await getUser(localStorage.getItem('token'));
    setUser(userData);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(user);
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div id="profileID">
        <h3>Identifying Details </h3>
        <ul id="userInfo">
          <li>
            <b>Username:</b> {user.username}
          </li>
          <li>
            <b>Full Name:</b> {user.full_name}
          </li>
          <li>
            <b>Email address:</b> {user.email}
          </li>
        </ul>
        <h1>My Reviews</h1>
      </div>
    </>
  );
};

export default Profile;
