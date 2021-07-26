import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';


const ImageGallery = ({ images, modalOpen }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ webformatURL, tags, id, largeImageURL }) => (
        <ImageGalleryItem
          webformatURL={webformatURL}
          largeImage={largeImageURL}
          tags={tags}
          key={id}
          modalOpen={modalOpen}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
