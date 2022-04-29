import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/variables';
import {safeParseJson} from '../utils/functions';
import {Rating, Button} from '@mui/material';
import {MediaContext} from '../contexts/MediaContext';
import {Link} from 'react-router-dom';

const MediaRow = ({file, deleteMedia, userId}) => {
  console.log(userId);
  const {genres, user} = useContext(MediaContext);
  console.log(genres);
  console.log(user);
  // const genreList = genres.genres;
  const doDelete = () => {
    const ok = confirm('Do juu delte?');
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
  // const genreCheck = () => {
  //   const array = [];
  //   desc.genre_ids.forEach((item) => {
  //     genres.genres.forEach((genre) => {
  //       if (item === genre.id) {
  //         array.push(genre.name);
  //       }
  //     });
  //   });
  //   return array;
  // };
  // console.log(genreCheck());
  return (
    <tr>
      <td>
        <img
          className="pic"
          src={mediaUrl + file.thumbnails.w160}
          alt={file.title}
        />
      </td>
      <td>
        <h4>
          {file.title} ({year})
        </h4>
        {file.title !== desc.original_title && <h5>{desc.original_title}</h5>}
        <Rating name="read-only" value={desc.rating} readOnly />
        <p>{desc.description}</p>
      </td>
      <td>
        <a href={file.filename}>View</a>
      </td>
      <td>
        {userId === file.user_id && (
          <>
            <Button
              variant="contained"
              component={Link}
              to={'/modify'}
              state={{file}}
            >
              Edit
            </Button>
            <Button variant="contained" onClick={doDelete}>
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
