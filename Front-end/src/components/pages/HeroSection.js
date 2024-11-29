
import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(){
    return (
        <div className='hero-container'>
          
          <image src="/images/mainpagee.jpg" />
          <h1>WE DON'T MAKE IT UNTIL</h1>
          <p>You Order It!</p>
          <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
       {/*} <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TOUR <i className='far fa-play-circle' />
    </Button>*/}
      </div>
      
      

    </div>
    );
}

export default HeroSection;