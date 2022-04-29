import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/variables';
import {safeParseJson} from '../utils/functions';
import {Rating} from '@mui/material';
import {MediaContext} from '../contexts/MediaContext';

const MediaRow = ({file}) => {
  const {genres} = useContext(MediaContext);
  console.log(genres);
  const desc = safeParseJson(file.description) || {
    description: file.description,
    rating: file.rating,
    orignal_title: file.orignal_title,
    release_date: file.release_year,
  };
  let year;
  if (desc.release_date) {
    year = desc.release_date.slice(0, 4);
  }
  const magic = () => {
    console.log('magic');
  };
  useEffect(() => {
    magic();
  }, []);
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
    </tr>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object.isRequired,
};

export default MediaRow;
