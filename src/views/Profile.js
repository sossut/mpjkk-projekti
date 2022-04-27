import {useEffect, useState} from 'react';
import {useUser} from '../hooks/ApiHooks';

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
      <h1>Profile</h1>
      <ul>
        <li>{user.username}</li>
        <li>{user.full_name}</li>
        <li>{user.email}</li>
      </ul>
    </>
  );
};

export default Profile;
