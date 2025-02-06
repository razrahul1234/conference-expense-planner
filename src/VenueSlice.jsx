import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    venueRooms: [
        {
            name: "Auditorium hall",
            capacity: 200,
            price: 5500,
            quantity: 0,
            id: 1
        },
        {
            name: "Conference room",
            capacity: 15,
            price: 3500,
            quantity: 0,
            id: 2
        },
        {
            name: "Presentation room",
            capacity: 50,
            price: 5500,
            quantity: 0,
            id: 3
        },
        {
            name: "Large meeting room",
            capacity: 10,
            price: 900,
            quantity: 0,
            id: 4
        },
        {
            name: "Small meeting room",
            capacity: 5,
            price: 1100,
            quantity: 0,
            id: 5
        }
]
};

const VenuSlice = createSlice({
    name: "venu",
    initialState,
    reducers: {
        increaseVenueRoom(state, action) {
            const venueToIncrease = state.venueRooms.find((venue) => venue.id === action.payload);
            if (venueToIncrease && venueToIncrease?.id) {
                venueToIncrease.quantity += 1;
            }
        },
        decreaseVenueRoom(state, action) {
            const venueToDecrease = state.venueRooms.find((venue) => venue.id === action.payload);
            if (venueToDecrease && venueToDecrease?.id && venueToDecrease.quantity >= 1) {
                venueToDecrease.quantity -= 1;
            }
        }
    }
})

export const {
    increaseVenueRoom,
    decreaseVenueRoom
} = VenuSlice.actions;

export default VenuSlice.reducer;