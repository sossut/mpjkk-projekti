import React from 'react';
import PropTypes from 'prop-types';
import {posterUrl} from '../utils/variables';

const SearchRow = ({file}) => {
  return (
    <tr>
      <td>
        <img
          className="pic"
          src={posterUrl + file.poster_path}
          alt={file.original_title}
        />
      </td>
      <td>
        <h4>{file.original_title}</h4>
        <p>{file.overview}</p>
      </td>
      <td>
        <a href="">Write A Review</a>
      </td>
    </tr>
  );
};

SearchRow.propTypes = {
  file: PropTypes.object.isRequired,
};

export default SearchRow;
