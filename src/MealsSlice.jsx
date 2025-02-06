import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    meals : 
    [
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
]
}
const MealsSlice = createSlice({
    name : "meals",
    initialState,
    reducers : {
        changePeople(state, action){
          console.log("request coming ", action);
          state.meals.map((meal) => meal.people = action.payload);
        },
        changeMeal(state, action){
            const mealsToChange = state.meals.find((state) => state.id === action.payload.id);
            if(mealsToChange){
                mealsToChange.selected = action.payload.selected;
            }
          },
        // increaseMeals(state, action){
        //   const mealsToIncrease = state.meals.find((state) => state.id === action.payload);
        //   if(mealsToIncrease){
        //     mealsToIncrease.quantity++;
        //   }
        // },
        // decreaseMeals(state, action){
        //     const mealsToDecrease = state.meals.find(state => state.id === action.payload);
        //     if(mealsToDecrease && mealsToDecrease?.id && mealsToDecrease.quantity >=1){
        //         mealsToDecrease.quantity--;
        //     }
        // }
    }
})

export const {
    changePeople,
    changeMeal
} = MealsSlice.actions;

export default MealsSlice.reducer;