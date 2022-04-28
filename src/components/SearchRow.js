import React from 'react';
import PropTypes from 'prop-types';
import {posterUrl} from '../utils/variables';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';

const SearchRow = ({file}) => {
  let releaseYear;
  if (file.release_date) {
    releaseYear = file.release_date.slice(0, 4);
  }

  return (
    <tr>
      <td>
        <img
          className="pic"
          height="300"
          src={posterUrl + file.poster_path}
          alt={file.title}
        />
      </td>
      <td>
        <h4>
          {file.title} ({releaseYear})
        </h4>
        {file.title !== file.original_title && <h4>{file.original_title}</h4>}
        <p>{file.overview}</p>
      </td>
      <td>
        <Button
          variant="contained"
          component={Link}
          to={'/write'}
          state={{file}}
        >
          Write A Review For This Movie
        </Button>
      </td>
    </tr>
  );
};

SearchRow.propTypes = {
  file: PropTypes.object.isRequired,
};

export default SearchRow;
