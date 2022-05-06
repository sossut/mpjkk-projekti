import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/variables';
import {safeParseJson} from '../utils/functions';
import {Rating, Button, Typography} from '@mui/material';
import {MediaContext} from '../contexts/MediaContext';
import {Link} from 'react-router-dom';
import '../index.css';

const MediaRow = ({file, deleteMedia, userId}) => {
  console.log(userId);
  // eslint-disable-next-line no-unused-vars
  const {genres, user} = useContext(MediaContext);
  console.log(genres);

  // const genreList = genres.genres;
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
  const desc = safeParseJson(file.description) || {
    description: file.description,
    rating: file.rating,
    orignal_title: file.orignal_title,
    release_date: file.release_year,
    genre_ids: file.genre_ids,
  };
  let year;
  if (desc.release_date) {
    year = desc.release_date.slice(0, 4);
  }

  return (
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

        <Button
          variant="contained"
          component={Link}
          to={'/single'}
          state={{file}}
          style={{
            backgroundColor: '#f5ad42',
            color: '#000',
            border: '1px solid black',
            marginRight: '10px',
          }}
        >
          Open
        </Button>
        {userId === file.user_id && (
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
  );
};

MediaRow.propTypes = {
  file: PropTypes.object,
  userId: PropTypes.number,
  deleteMedia: PropTypes.func,
};

export default MediaRow;
