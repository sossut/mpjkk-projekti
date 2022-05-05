import {Button} from '@mui/material';
import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import MediaTable from '../components/MediaTable';
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
        {!user.user_id && (
          <Button
            variant="contained"
            component={Link}
            to={'/login'}
            style={{
              backgroundColor: '#f5ad42',
              color: '#000',
              border: '1px solid black',
              marginRight: '10px',
            }}
          >
            Sign In
          </Button>
        )}
      </div>
      <MediaTable allFiles={false} />
    </>
  );
};

export default Profile;
