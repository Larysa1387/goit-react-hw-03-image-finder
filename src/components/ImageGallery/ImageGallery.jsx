import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';


const ImageGallery = ({images}) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ webformatURL, tags, id }) => (
        <ImageGalleryItem webformatURL={webformatURL} tags={tags} key={id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
