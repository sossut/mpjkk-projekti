import {useEffect, useState} from 'react';

import {baseUrl, appID} from '../utils/variables';

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
      const response = await fetchJson(
        `https://api.themoviedb.org/3/search/movie?api_key=c625771482c38e59b7374dd1c48d75e3&query=${query}`
      );
      setMovieArray(response);
      console.log(response);
      setIsLoaded(true);
    } catch (error) {
      console.log('fetch failed');
    }
  };
  const getGenres = async () => {
    try {
      const response = await fetchJson(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=c625771482c38e59b7374dd1c48d75e3'
      );
      console.log('getGenres');
      return response;
    } catch (error) {
      console.log('fetch failed');
    }
  };

  return {search, movieArray, isLoaded, getGenres};
};
const useMedia = () => {
  // TODO: move mediaArray state here
  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    try {
      const media = await useTag().getTag(appID);
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
  const postMedia = async (formdata, token) => {
    try {
      const fetchOptions = {
        method: 'POST',
        headers: {
          'x-access-token': token,
        },
        body: formdata,
      };
      return await fetchJson(baseUrl + 'media', fetchOptions);
    } catch (e) {
      alert(e.message);
    }
  };
  return {mediaArray, postMedia};
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

const useTag = () => {
  const getTag = async (tag) => {
    const tagResult = await fetchJson(baseUrl + 'tags/' + tag);
    if (tagResult.length > 0) {
      return tagResult;
    } else {
      throw new Error('No results');
    }
  };

  const postTag = async (data, token) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'x-access-token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    return await fetchJson(baseUrl + 'tags', fetchOptions);
  };
  return {getTag, postTag};
};

export {useMedia, useMovieDatabase, useUser, useLogin, useTag};
