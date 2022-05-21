import { uiActions } from "./uiSlice";
import { cartActions } from './cartSlice';

export const fetchData = () => {
    return async dispatch => {
        const fetchFromApi = async () => {
            dispatch(uiActions.sendingData());
            const res = await fetch('https://react-training-dummy-data-default-rtdb.firebaseio.com/cart.json');
            if (!res.ok) {
                throw new Error('something went wrond')
            };
            const data = res.json();
            return (data)
        }

        try {
            const items = await fetchFromApi()
            dispatch(cartActions.replaceItems(items))
            dispatch(uiActions.successedFetch())
        } catch (error) {
            dispatch(uiActions.catchError(error.message))
        }
    }
}

export const fetchCart = (items) => {
    return (dispatch) => {
        const fetchAfterAdd = async () => {
            dispatch(uiActions.sendingData());

            const res = await fetch('https://react-training-dummy-data-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(items),
                headers: {
                    "Content-Type": 'application/json'
                }
            })

            if (!res.ok) throw new Error('Something went wrong')

            dispatch(uiActions.successedFetch())
        };
        try {
            fetchAfterAdd()
        } catch (error) {
            dispatch(uiActions.catchError(error.message))
        }
    }
}