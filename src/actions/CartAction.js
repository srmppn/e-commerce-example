export const ADD_ITEM = "user:addItemToCart";
export const REMOVE_ITEM = "user:removeItemFromCart";

export function addItem(product) {
  return {
    type: ADD_ITEM,
    payload: {
        product: product
    },
  };
}

export function removeItem(key, id) {
  return {
    type: REMOVE_ITEM,
    payload: {
        productId: id
    },
  };
}
