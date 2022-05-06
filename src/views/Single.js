import {Button, Rating, Typography} from '@mui/material';
import React, {useContext} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';
import {useMedia} from '../hooks/ApiHooks';
import {safeParseJson} from '../utils/functions';
import {mediaUrl} from '../utils/variables';

const Single = () => {
  const {deleteMedia} = useMedia();
  const {user} = useContext(MediaContext);
  console.log(user);
  const location = useLocation();
  console.log(location);
  const file = location.state.file;
  console.log(file);
  const desc = safeParseJson(file.description) || {
    description: file.description,
    rating: file.rating,
    orignal_title: file.orignal_title,
    release_date: file.release_year,
    genre_ids: file.genre_ids,
  };
  const doDelete = () => {
    const ok = confirm('Do you really want to delete this review?');
    if (ok) {
      try {
        deleteMedia(file.file_id, localStorage.getItem('token'));
      } catch (err) {
        // console.log(err);
      }
    }
  };

  console.log(desc);
  let year;
  if (desc.release_date) {
    year = desc.release_date.slice(0, 4);
  }
  return (
    <>
      <tr>
        <td>
          <img
            className="pic"
            src={mediaUrl + file.thumbnails.w160}
            alt={file.title}
          />
        </td>
        <td id="arvostelu">
          <h4>
            {file.title} ({year})
          </h4>
          {file.title !== desc.original_title && <h5>{desc.original_title}</h5>}
          <Rating
            name="read-only"
            value={desc.rating}
            sx={{
              color: 'black',
            }}
            readOnly
          />
          <Typography>
            <p>{desc.description}</p>
          </Typography>

          {user.user_id === file.user_id && (
            <>
              <Button
                variant="contained"
                component={Link}
                to={'/modify'}
                state={{file}}
                style={{
                  backgroundColor: '#f5ad42',
                  color: '#000',
                  border: '1px solid black',
                  marginRight: '10px',
                }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                onClick={doDelete}
                style={{
                  backgroundColor: '#f5ad42',
                  color: '#000',
                  border: '1px solid black',
                }}
              >
                Delete
              </Button>
            </>
          )}
        </td>
      </tr>
    </>
  );
};
export default Single;
