import { createSlice } from "@reduxjs/toolkit";

const loadStateFromLocalStorage = () => {
  try {
    if (typeof window !== "undefined") {
      const serializedState = localStorage.getItem("cart");
      const parsedState = serializedState ? JSON.parse(serializedState) : null;

      if (parsedState && typeof parsedState === "object" && parsedState.cart) {
        // Recalculate cartTotal based on the cart items
        const cartTotal = parsedState.cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );

        return {
          cart: parsedState.cart,
          cartTotal: cartTotal,
        };
      }
    }

    return { cart: [], cartTotal: 0 };
  } catch (e) {
    console.error("Could not load state from localStorage", e);
    return { cart: [], cartTotal: 0 };
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    if (typeof window !== "undefined") {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("cart", serializedState);
    }
  } catch (e) {
    console.error("Could not save state to localStorage", e);
  }
};

const initialState = loadStateFromLocalStorage();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.cart.find((item) => item.id === action.payload.id);

      if (isExist) {
        isExist.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }

      state.cartTotal = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      saveStateToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.cartTotal = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      saveStateToLocalStorage(state);
    },
    incrementCartItem: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.cartTotal += item.price;
        saveStateToLocalStorage(state);
      }
    },
    decrementCartItem: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.cartTotal -= item.price;
      } else if (item && item.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
        state.cartTotal -= item.price;
      }

      saveStateToLocalStorage(state);
    },
    clearCart: (state) => {
      state.cart = [];
      state.cartTotal = 0;
      saveStateToLocalStorage(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
