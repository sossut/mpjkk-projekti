import React from 'react';
import PropTypes from 'prop-types';
import {useMedia} from '../hooks/ApiHooks';
import {safeParseJson} from '../utils/functions';
import {Rating} from '@mui/material';
import {mediaUrl} from '../utils/variables';
const TopSort = ({allFiles = true}) => {
  const {mediaArray} = useMedia(allFiles);
  console.log(mediaArray);

  const objz = [];
  const array = [];
  const test = [];
  mediaArray.forEach((movie, i = 0) => {
    const desc = safeParseJson(movie.description) || {
      description: movie.description,
      rating: movie.rating,
      movie_id: movie.movie_id,
      original_title: movie.original_title,
      release_date: movie.release_year,
      genre_ids: movie.genre_ids,
    };
    test[i] = movie;
    test[i].ratings = [];
    test[i].rating = desc.rating;
    test[i].movie_id = desc.movie_id;
    test[i].ratings.push(desc.rating);
    test[i].count = test[i].ratings.length;
    test[i].average = 0;

    objz[movie.title] = objz[movie.title] || {
      title: movie,
      movie_id: movie,
    };
    objz[movie.title].ratings = objz[movie.title].ratings || [];
    objz[movie.title].file_id = movie.file_id;
    objz[movie.title].movie_id = desc.movie_id;
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
    i++;
  });
  const final = [];

  test.forEach((movie, i = 0) => {
    if (i == 0) {
      final.push(movie);
    } else {
      let check = false;
      for (let j = 0; j < final.length; j++) {
        if (final[j].movie_id == movie.movie_id) {
          check = true;
          final[j].ratings.push(movie.rating);
          final[j].count++;
        }
      }
      if (!check) {
        final.push(movie);
      }
      console.log(check);
    }
    i++;
  });
  final.forEach((movie) => {
    let sum = 0;
    movie.ratings.forEach((num) => {
      sum += num;
    });
    console.log(movie.title, sum);
    movie.average = sum / movie.count;
  });
  console.log(final);
  console.log('test', test);
  const sorter = (a, b) => {
    if (a.average > b.average) {
      return -1;
    }
    if (a.average < b.average) {
      return 1;
    }
    return 0;
  };
  final.sort(sorter);
  console.log(array);

  const renderList = final.map((item) => (
    <>
      <div>
        <h4>{item.title}</h4>
        <img
          className="pic"
          src={mediaUrl + item.thumbnails.w160}
          alt={item.title}
        />
        <Rating name="read-only" value={item.average} readOnly precision={0.5}>
          {item.average}
        </Rating>
      </div>
    </>
  ));
  return <div>{renderList}</div>;
};

TopSort.propTypes = {
  allFiles: PropTypes.bool,
};

export default TopSort;
