import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {changePeople , changeMeal } from "../MealsSlice";
import TotalCost from "./TotalCost";

const Meals = () => {
    const [people, setPeople] = useState(0);
    const [mealsType, setMealsType] = useState({});

    const dispatch = useDispatch();
    const selector = useSelector(state => state.meals.meals);
    console.log(selector);

    const mealsList = [
        {
            id: 1,
            name: "Breakfast",
            price: 50,
            people: 0,
            selected: false,
            imageUrl: 'https://th.bing.com/th/id/OIP.PnXo7tZzCbjeotrQ73UFhgHaEV?w=324&h=190&c=7&r=0&o=5&pid=1.7',
        },
        {
            id: 2,
            name: "Lunch",
            price: 60,
            people: 0,
            selected: false,
            imageUrl: 'https://th.bing.com/th/id/OIP.U30CWqtV3sCtnc2zYwlkdQHaFB?w=237&h=180&c=7&r=0&o=5&pid=1.7',
        },
        {
            id: 3,
            name: "High Tea",
            price: 25,
            people: 0,
            selected: false,
            imageUrl: 'https://th.bing.com/th/id/OIP.llrUbHPL0jYaw6_40GSuBAHaFQ?rs=1&pid=ImgDetMain',
        },
        {
            id: 4,
            name: "Dinner",
            price: 70,
            people: 0,
            selected: false,
            imageUrl: 'https://th.bing.com/th/id/OIP.HWBU50Sjl7-XG-HG7bilnwHaF1?rs=1&pid=ImgDetMain',
        }
    ];

    const handlePeopleChange = (e) => {
        setPeople(e.target.value);
        dispatch(changePeople(e.target.value));
    }

    const handleMealChange = (e, index, meal) => {
        console.log("e : ", e);
        setMealsType({[index] : e.target.checked});
        dispatch(changeMeal({id : meal.id, selected: e.target.checked}));
    }
    

    // const handleMealsIncrease = (meal) => {
    //     dispatch(increaseMeals(meal.id));
    // }


    // const handleMealsDecrease = (meal) => {
    //     dispatch(decreaseMeals(meal.id));
    // }

    const TotalCost = () => {
        return selector.filter(item => item.selected === true).reduce((total, meal) => total + meal.people * meal.price , 0);
    }

    return (
        <>
            {/* <div className="venue-list">
                    <ul className="venue-list-items">
                        {mealsList && mealsList.length> 0 ? mealsList.map((meal, index) => (
                            <li key={index} className='venue-list-item'>
                                <img src={meal.imageUrl} style={{width : '-webkit-fill-available' }} width="auto" height="150" />
                                <p>{meal.name}</p>
                                <p>(Capacity : {meal.capacity})</p>
                                <p>$ {meal.price}</p>
                                <button className={`increase-decrease-btn`}
                                    onClick={() => handleMealsDecrease(meal)}>
                                    -
                                </button>
                                &nbsp;
                                 {selector[index]?.quantity}
                                 &nbsp;
                                <button className={`increase-decrease-btn`}
                                    onClick={() => handleMealsIncrease(meal)}>
                                    +
                                </button>
                            </li>
                        )) : ''}
                    </ul>
                </div> */}
            <div style={{ color: "black" }}>
                <h2 style={{ display: 'inline' }}>Number of people :&nbsp;
                    <input type="number" style={{ height: '24px', width: '200px', 'font-size': '20px' }} value={people} onChange={handlePeopleChange} />
                </h2>
                <br /><br /><br /><br />
                <div style={{fontSize: "20px", fontWeight: "bolder" }}>
                    {mealsList.map((meal, index) => (
                        <>
                            <input type="checkbox" style={{ height: '20px', width: '20px' }} onChange={(e) => handleMealChange(e, index, meal)} /> {meal.name} &nbsp;&nbsp;
                            <p>$ {meal.price}</p>
                        </>
                    ))}
                    {/* <input type="checkbox" style={{ height: '20px', width: '20px' }} onChange={(e) => setMealsType(e.target.value)} /> BreakFast &nbsp;&nbsp;
                    <input type="checkbox" style={{ height: '20px', width: '20px' }} onChange={(e) => setMealsType(e.target.value)} /> High Tea &nbsp;&nbsp;
                    <input type="checkbox" style={{ height: '20px', width: '20px' }} onChange={(e) => setMealsType(e.target.value)} /> Lunch &nbsp;&nbsp;
                    <input type="checkbox" style={{ height: '20px', width: '20px' }} onChange={(e) => setMealsType(e.target.value)} /> Dinner &nbsp;&nbsp; */}
                </div>
            </div>
            <br />
            <button style={{ color: 'black' }} disabled>Total Cost: ${<TotalCost />}</button>

        </>
    )
}

export default Meals;