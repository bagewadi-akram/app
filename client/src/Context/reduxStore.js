export const initialState = {
  cart: [],
  user: null,
};

// Selector
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.newPrice + amount, 0);

const reducer = (state, action) => {
  console.log(action, action.user);
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(`"${action.item.name} Added to Cart"`);
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "EMPTY_CART":
      console.log("Removed All Items in Cart");
      return {
        ...state,
        cart: [],
      };

    case "REMOVE_FROM_CART":
      console.log(`"Removed ${action.name} from cart "`);

      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in cart!`
        );
      }
      return {
        ...state,
        cart: newCart,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_USER":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;
