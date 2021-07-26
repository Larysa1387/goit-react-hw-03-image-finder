import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  webformatURL,
  tags,
  id,
  largeImage,
  modalOpen,
}) => {
  const sendLargeImage = () => {
    modalOpen(largeImage);
  };
  return (
    <li className={s.ImageGalleryItem} id={id} onClick={sendLargeImage}>
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItem_image} />
    </li>
  );
};

export default ImageGalleryItem;
