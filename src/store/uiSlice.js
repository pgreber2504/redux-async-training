import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isSending: {
            message: '',
            title: '',
            status: '',
        }
    },
    reducers: {
        sendingData(state) {
            state.isSending = {
                message: 'Your data is sending',
                title: 'Sending',
                status: 'sending'
            }
        },
        successedFetch(state) {
            state.isSending = {
                message: 'Your data was sended succesfully',
                title: 'Sended',
                status: 'success'
            }
        },
        catchError(state, action) {
            state.isSending = {
                message: action.payload,
                title: 'Error',
                status: 'error',
            }
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice