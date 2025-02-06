import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addOns : 
    [
        {
         id : 1,
         name : "Speakers",
         price : 35,
         quantity : 0,
         imageUrl : '',
        },
        {
         id : 2,
         name : "Microphones",
         price : 45,
         quantity : 0,
         imageUrl : '',
        },
        {
         id : 3,
         name : "Whiteboards",
         price : 80,
         quantity : 0,
         imageUrl : '',
        },
        {
         id : 4,
         name : "Projectors",
         price : 200,
         quantity : 0,
         imageUrl : '',
        },
        {
         id : 5,
         name : "Signage",
         price : 80,
         quantity : 0,
         imageUrl : '',
        }
]}
const AddOnSlice = createSlice({
    name : "addons",
    initialState,
    reducers : {
        increaseAddOns(state, action){
          const addOnToIncrease = state.addOns.find((state) => state.id === action.payload);
          if(addOnToIncrease){
            addOnToIncrease.quantity++;
          }
        },
        decreaseAddOns(state, action){
            const addOnsToDecrease = state.addOns.find(state => state.id === action.payload);
            if(addOnsToDecrease && addOnsToDecrease?.id && addOnsToDecrease.quantity >=1){
                addOnsToDecrease.quantity--;
            }
        }
    }
})

export const {
    increaseAddOns,
    decreaseAddOns
} = AddOnSlice.actions;

export default AddOnSlice.reducer;