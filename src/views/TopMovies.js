import React from 'react';
import {Helmet} from 'react-helmet';
import TopSort from '../components/TopSort';

const TopMovies = () => {
  return (
    <>
      <Helmet>
        <title>Top Movies</title>
      </Helmet>
      <TopSort />
    </>
  );
};
export default TopMovies;
