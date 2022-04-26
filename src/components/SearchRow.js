import React from 'react';
import PropTypes from 'prop-types';
import {posterUrl} from '../utils/variables';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';

const SearchRow = ({file}) => {
  return (
    <tr>
      <td>
        <img
          className="pic"
          height="300"
          src={posterUrl + file.poster_path}
          alt={file.original_title}
        />
      </td>
      <td>
        <h4>{file.original_title}</h4>
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
