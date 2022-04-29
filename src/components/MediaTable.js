import React from 'react';
import {useMedia} from '../hooks/ApiHooks';
import '../index.css';
import PropTypes from 'prop-types';
//  import PropTypes from 'prop-types';
import MediaRow from './MediaRow';
import {useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';

const MediaTable = ({allFiles = true}) => {
  const {user} = useContext(MediaContext);
  console.log(user);
  const {mediaArray, deleteMedia} = useMedia(allFiles, user?.user_id);
  console.log(mediaArray);
  return (
    <table>
      <tbody>
        {mediaArray.map((item, index) => {
          return (
            <MediaRow
              key={index}
              file={item}
              userId={user.user_id}
              deleteMedia={deleteMedia}
            />
          );
        })}
      </tbody>
    </table>
  );
};

MediaTable.propTypes = {
  allFiles: PropTypes.bool,
};

export default MediaTable;
