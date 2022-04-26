import React from 'react';
import PropTypes from 'prop-types';

//  import PropTypes from 'prop-types';
import SearchRow from './SearchRow';

const SearchTable = ({movieArray}) => {
  return (
    <table>
      <tbody>
        {movieArray.results?.map((item, index) => {
          return <SearchRow key={index} file={item} />;
        })}
      </tbody>
    </table>
  );
};

SearchTable.propTypes = {
  movieArray: PropTypes.array,
};

export default SearchTable;
