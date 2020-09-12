export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: []
      }
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("cannot remove the item");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "LOGIN":
    case "LOGOUT":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
