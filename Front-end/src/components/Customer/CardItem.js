import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path} >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Food Images'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
          <div className='cards__item__about'>
            <h6 className='cards__item__about_text'>{props.about}</h6>
          </div>
         </Link>
        
      </li>
    </>
  );
}

export default CardItem;