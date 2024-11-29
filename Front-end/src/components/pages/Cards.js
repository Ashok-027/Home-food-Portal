import React from "react";
import CardItem from "./CardItem";
import './Cards.css';

function Cards(){
    return(
        <div className='cards'>
            <h1>Check out these BEST FOOD Ever Made by Homemakers</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                      <CardItem 
                        src='images/north-indian-executive.jpg'
                        text='Veg North Indian Combo'
                        label='Rs.125/-'
                        path='/services'
                      />
                      <CardItem 
                        src='images/south-indian-executive.jpg'
                        text='Veg South Indian Combo'
                        label='Rs.125/-'
                        path='/services'
                      />
                    </ul>
                    <ul className='cards__items'>
                      <CardItem 
                        src='images/biryani.jpg'
                        text='Veg Dum Biryani, Raita & Salan'
                        label='Rs.120/-'
                        path='/services'
                      />
                      <CardItem 
                        src='images/bowl-of-the-day.jpg'
                        text='Bowl of the day(Rice)'
                        label='Rs.100/-'
                        path='/services'
                      />
                      <CardItem 
                        src='images/schezwan-fried-rice-machurian.jpg'
                        text='Schezwan Fried Rice & Manchurian'
                        label='Rs.150/-'
                        path='/services'
                      />
                    </ul>
                    <ul className='cards__items'>
                      <CardItem 
                        src='images/idly.jpeg'
                        text='Idly bowl'
                        label='Rs.50/-'
                        path='/services'
                      />
                      <CardItem 
                        src='images/aloo-paratha.jpg'
                        text='Aloo Paratha Combo'
                        label='Rs.70/-'
                        path='/services'
                      />
                      <CardItem 
                        src='images/poha.jpg'
                        text='Poha bowl'
                        label='Rs.60/-'
                        path='/services'
                      />
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Cards;