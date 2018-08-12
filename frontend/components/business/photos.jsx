import React from 'react';

const BusinessPhotos = ({photos,photoId}) => {
  return (
    <div>
      <img src ={photos[photoId].photoUrl} />
    </div>
  );
};

export default BusinessPhotos;
