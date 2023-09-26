import React from 'react'
import classes from './Home.module.css';
import mealsImage from '../../../assets/meals.jpg';
import Meals from '../../Meals/Meals';

const Home = () => {
    return (
        <>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
            <Meals />
        </>
    )
}

export default Home
