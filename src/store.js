import { configureStore } from "@reduxjs/toolkit";
import venueReducer from "./VenueSlice"; 
import addOnReducer from "./AddOnsSlice";
import mealsReducer from "./MealsSlice";

const store =  configureStore({
    reducer : {
        venue : venueReducer,
        addon : addOnReducer,
        meals : mealsReducer
    }
})

export default store;