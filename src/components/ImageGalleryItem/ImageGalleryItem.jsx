import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags, id }) => {
  return (
    <li className={s.ImageGalleryItem} id={id}>
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItem_image} />
    </li>
  );
};

export default ImageGalleryItem;
