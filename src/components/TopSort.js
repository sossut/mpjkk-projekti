import React from 'react';
import PropTypes from 'prop-types';
import {useMedia} from '../hooks/ApiHooks';
import {safeParseJson} from '../utils/functions';
import {Rating} from '@mui/material';
import {mediaUrl} from '../utils/variables';
import '../index.css';
const TopSort = ({allFiles = true}) => {
  const {mediaArray} = useMedia(allFiles);
  console.log(mediaArray);

  const objz = [];
  const array = [];
  mediaArray.forEach((movie) => {
    const desc = safeParseJson(movie.description) || {
      description: movie.description,
      rating: movie.rating,
      movie_id: movie.movie_id,
      orignal_title: movie.orignal_title,
      release_date: movie.release_year,
      genre_ids: movie.genre_ids,
    };
    objz[movie.title] = objz[movie.title] || {title: movie};

    objz[movie.title].ratings = objz[movie.title].ratings || [];
    objz[movie.title].file_id = movie.file_id;
    objz[movie.title].ratings.push(desc.rating);
    objz[movie.title].count = objz[movie.title].ratings?.length;
    let average = 0;
    objz[movie.title].ratings.forEach((i) => {
      average += i;
    });
    objz[movie.title].average = average / objz[movie.title].ratings?.length;
    objz[movie.title].movie_id = desc.movie_id;

    if (!array.includes(objz[movie.title])) {
      array.push(objz[movie.title]);
    }
  });

  const sorter = (a, b) => {
    if (a.average > b.average) {
      return -1;
    }
    if (a.average < b.average) {
      return 1;
    }
    return 0;
  };
  array.sort(sorter);

  const renderList = array.map((item) => (
    <>
      {console.log(item.average)}
      <h4>{item.title.title}</h4>
      <img
        className="pic"
        src={mediaUrl + item.title.thumbnails.w160}
        alt={item.title.title}
      />
      <Rating
        name="read-only"
        value={item.average}
        sx={{
          color: 'black',
        }}
        readOnly
        precision={0.5}
      >
        {item.average}
      </Rating>
    </>
  ));
  return <div id="topList">{renderList}</div>;
};

TopSort.propTypes = {
  allFiles: PropTypes.bool,
};

export default TopSort;
