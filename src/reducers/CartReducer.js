import { ADD_ITEM, REMOVE_ITEM } from "../actions/CartAction";

const initState = {
  cartList: [],
};

export default function CartReducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_ITEM:
      state.cartList.push(payload.product);
      return {
        cartList: state.cartList,
      };
    case REMOVE_ITEM:
      state.cartList.splice(payload.id, 1);
      return {
        cartList: state.cartList,
      };
    default:
      return state;
  }
}