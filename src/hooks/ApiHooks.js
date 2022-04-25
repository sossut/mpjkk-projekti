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
// const useMovieDatabase = () => {

// };
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
export {fetchJson, useMedia};
