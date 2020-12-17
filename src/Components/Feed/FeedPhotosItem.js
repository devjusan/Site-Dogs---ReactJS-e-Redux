import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPhoto } from '../../store/photo';
import { openModal } from '../../store/ui';
import Image from '../Helper/Image';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo }) => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(openModal());
    dispatch(fetchPhoto(photo.id));
  }

  return (
    <li onClick={handleClick} className={styles.photo}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
