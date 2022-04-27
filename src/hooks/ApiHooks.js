import {useEffect, useState} from 'react';

import {baseUrl} from '../utils/variables';

const fetchJson = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      const message = json.message;
      throw new Error(message);
    }
  } catch (err) {
    throw new Error(err.message);
  }
};
const useMovieDatabase = () => {
  const [movieArray, setMovieArray] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isLoaded, setIsLoaded] = useState(false);
  console.log('ApiHooks isLoaded', isLoaded);
  const search = async (query = 'makkara') => {
    try {
      console.log(query);
      const results = await fetchJson(
        `https://api.themoviedb.org/3/search/movie?api_key=c625771482c38e59b7374dd1c48d75e3&query=${query}`
      );
      setMovieArray(results);
      console.log(results);
      setIsLoaded(true);
    } catch (error) {
      console.log('fetch failed');
    }
  };
  return {search, movieArray, isLoaded};
};
const useMedia = () => {
  // TODO: move mediaArray state here
  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    try {
      const media = await fetchJson(baseUrl + 'media');
      const allFiles = await Promise.all(
        media.map(async (file) => {
          return await fetchJson(`${baseUrl}media/${file.file_id}`);
        })
      );
      setMediaArray(allFiles);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getMedia();
  }, []);
  // TODO: move loadMedia function here
  // TODO: move useEffect here
  return {mediaArray};
};
const useUser = () => {
  const getUser = async (token) => {
    const fetchOptions = {
      headers: {
        'x-access-token': token,
      },
    };
    return await fetchJson(baseUrl + 'users/user', fetchOptions);
  };

  const getUsername = async (username) => {
    const checkUser = await fetchJson(baseUrl + 'users/username/' + username);
    return checkUser.available;
  };

  const getUserById = async (userId, token) => {
    const fetchOptions = {
      headers: {
        'x-access-token': token,
      },
    };
    return await fetchJson(baseUrl + 'users/' + userId, fetchOptions);
  };

  const postUser = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    return await fetchJson(baseUrl + 'users', fetchOptions);
  };

  return {getUser, postUser, getUsername, getUserById};
};
const useLogin = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    return await fetchJson(baseUrl + 'login', fetchOptions);
  };
  return {postLogin};
};

export {useMedia, useMovieDatabase, useUser, useLogin};
