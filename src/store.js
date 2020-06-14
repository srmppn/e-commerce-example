import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import CartReducer from "./reducers/CartReducer";
import ProductReducer from "./reducers/ProductReducer";


const initialState = {}
const middleWare = [thunk]

const allReducers = combineReducers({
    product: ProductReducer,
    cartList: CartReducer
});

const store = createStore(
    allReducers,
    initialState,
    applyMiddleware(...middleWare)
);

export default store;