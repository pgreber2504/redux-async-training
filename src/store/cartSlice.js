import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    isActive: false,
    items: [],
    isChanged: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        cartShow(state) {
            if (state.items.length > 0) state.isActive = !state.isActive
        },
        addToCart(state, action) {
            const meal = {
                id: action.payload.id,
                title: action.payload.title,
                price: action.payload.price,
                description: action.payload.description,
                amount: action.payload.amount,
                total: action.payload.price * action.payload.amount,
            }
            state.isChanged = true
            if (state.items.length === 0) state.items.push(meal);
            else if (state.items.some(el => el.id === action.payload.id)) {
                const index = state.items.findIndex(el => el.id === action.payload.id);
                state.items[index].amount += meal.amount;
                state.items[index].total += meal.total;
            } else state.items.push(meal)
        },
        changeAmount(state, action) {
            const id = action.payload.id;
            const index = state.items.findIndex(el => el.id === id);
            state.isChanged = true
            if (index < 0) return;
            if (state.items[index].amount <= 1 && action.payload.amount === -1) {
                state.items = state.items.filter(el => el.id !== id);
                if (state.items.length === 0) state.isActive = false;
                return
            }
            state.items[index].amount += action.payload.amount;
            state.items[index].total += state.items[index].price * action.payload.amount;
        },
        replaceItems(state, action) {
            state.items = action.payload;
        }
    }
})



export const cartActions = cartSlice.actions;

export default cartSlice