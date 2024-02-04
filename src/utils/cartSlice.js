import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({  // I need some information to the slice that is name , initialState of my cart
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {  // modified a card using reducer function and this reducer call whendispath and action
        addItem: (state, action) => {  // action when the reducer function will call. reduecr function takes 2 things state and action. here the state is the initial state and action is the data which is coming in
          state.items.push(action.payload);  // modify the state .ans action.payload is that data which we passing at the + add button.  this function doesn't return anything.
        },
        removeItem: (state, action) => {
             state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer; // wrap up all the reducers into a reducer. or combine all reducers into one reducer and export it.