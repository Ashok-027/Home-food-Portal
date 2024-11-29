

import React from "react";
import CardItem from "./CardItem";
import './Cards.css';


function Cards(){
    return(
        <div className='cards'>
            <h1>Some of the Best Picks</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                      <CardItem 
                        src='images/north-indian-executive.jpg'
                        text="Priya's Home"
                        about='Veg North Indian Combo,Meat, poultry, & seafood (fish, chicken, or other meats)'
                        label='Rs.125/-'
                        time='-------------------------10Mins-------------------------'
                        path='/search'
                        
                      />
                      <CardItem 
                        src='images/south-indian-executive.jpg'
                        text="Jothika's Home"
                        label='Rs.125/-'
                        about='Veg South Indian Combo,Meat, poultry, & seafood (fish, chicken, or other meats)'
                        time='-------------------------12Mins-------------------------'
                        path='/search'
                      />
                      <CardItem 
                        src='images/chinese-meal-box.jpg'
                        text="Oviya's Home"
                        label='Rs.125/-'
                        about='Chinese Meal Box ,Meat, poultry, & seafood (fish, chicken, or other meats)'
                        time='-------------------------12Mins-------------------------'
                        path='/search'
                      />
                    </ul>
                    <ul className='cards__items'>
                      <CardItem 
                        src='images/biryani.jpg'
                        text="Rohitha's Home"
                        label='Rs.120/-'
                        about='Veg Dum Biryani, Raita & Salan, Tomato Rice'
                        time='-------------------------10Mins-------------------------'
                        path='/search'
                      />
                      <CardItem 
                        src='images/bowl-of-the-day.jpg'
                        text="Tamannah's Home"
                        label='Rs.100/-'
                        about='Bowl of the day(Rice),Pickle Rice, Sambar'
                        time='-------------------------10Mins-------------------------'
                        path='/search'
                      />
                      <CardItem 
                        src='images/schezwan-fried-rice-machurian.jpg'
                        text="Amanda Cery's Home"
                        label='Rs.150/-'
                        about='Schezwan Fried Rice, Manchurian & Single Meal box'
                        time='-------------------------15Mins-------------------------'
                        path='/search'
                      />
                    </ul>
                    <ul className='cards__items'>
                      <CardItem 
                        src='images/idly.jpeg'
                        text="Hannah's Home"
                        label='Rs.50/-'
                        about='Idly bowl with sambar (Wada and sambar combo) '
                        time='-------------------------12Mins-------------------------'
                        path='/search'
                      />
                      <CardItem 
                        src='images/aloo-paratha.jpg'
                        text="Dharshana's Home"
                        label='Rs.70/-'
                        about='Aloo Paratha combo with aloo,paneer,and aloo tikka'
                        time='-------------------------10Mins-------------------------'
                        path='/search'
                      />
                      <CardItem 
                        src='images/poha.jpg'
                        text="Emma's Home"
                        label='Rs.60/-'
                        about='Poha Bowl,Rice Bowl and Roti & Naan '
                        time='-------------------------10Mins-------------------------'
                        path='/search'
                      />
                    </ul>
                    <ul className='cards__items'>
                      <CardItem 
                        src='images/samosa.jpg'
                        text="Aamuktha's Home"
                        label='Rs.50/-'
                        about='Best Keema Samosa Recipe (Patti Samosa)'
                        time='-------------------------12Mins-------------------------'
                        path='/search'
                      />
                      <CardItem 
                        src='images/Rice-and-Dal-Instant-Pot.jpg'
                        text="Pravalika's Home"
                        label='Rs.70/-'
                        about='Rice and Dal Instant-Pot,Egg Fried Rice'
                        time='-------------------------15Mins-------------------------'
                        path='/search'
                      />
                      <CardItem 
                        src='images/Paneer-Pulao-1-3.jpg'
                        text="Priyanka's Home"
                        label='Rs.60/-'
                        about='Paneer pulao Bowl, Rice Bowl ,Veg Fried Rice'
                        time='-------------------------14Mins-------------------------'
                        path='/search'
                      />
                    </ul>
                    
                    
                   
                </div>
            </div>

        </div>
    );
}

export default Cards;