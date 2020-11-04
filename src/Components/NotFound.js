import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Helper/Image.module.css';
import Foto from '../Assets/confuso.jpg';

const NotFound = () => {
  return (
    <div className="container mainContainer">
      <h1 className="title">Error: 404</h1>
      <p>
        Esta página não foi encontrada! Você está perdido? Clique{' '}
        <Link style={{ color: '#fb1' }} to="/">
          aqui
        </Link>
        .{' '}
      </p>
      <p className="mainContainer">
        <img className={styles.notFound} src={Foto} alt="Perdeu a senha?" />
      </p>
    </div>
  );
};

export default NotFound;
