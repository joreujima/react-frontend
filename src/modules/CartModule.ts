const ADD_PRODUCT = "@cart/ADD_PRODUCT";
const CLEAR_ALL_PRODUCT = "@cart/CLEAR_ALL_PRODUCT";

const initialState: CartType = {
  products: []
};

export interface CartType {
  products: Array<CartProductItem>;
}

type ActionType = {
  type: string;
  payload?: any;
};

type CartProductItem = {
  id: number;
  name: string;
  price: number;
  amount: number;
};

type CartAddProductType = {
  id: number;
  name: string;
  price: number;
};

const onAddProduct = (state: CartType, payload: CartAddProductType) => {
  let _state = state;
  const _findSameItem = state.products.findIndex(
    product => product.id == payload.id
  );

  if (!(_findSameItem < 0)) {
    _state.products[_findSameItem].amount++;
  } else {
    _state.products = state.products.concat({
      id: payload.id,
      amount: 1,
      price: payload.price,
      name: payload.name
    });
  }

  return _state.products;
};

export default function(state = initialState, action: ActionType) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: onAddProduct(state, action.payload)
      };
    case CLEAR_ALL_PRODUCT:
      return {
        ...state,
        products: []
      };
    default:
      return state;
  }
}

export const addProductToCart = (payload: CartAddProductType) => ({
  type: ADD_PRODUCT,
  payload
});

export const clearAllProducts = () => ({
  type: CLEAR_ALL_PRODUCT
});
