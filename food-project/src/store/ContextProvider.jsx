import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  //
  if (action.type === "ADD") {
    // ADD item to cart
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingCartIndex];
    let updatedItems;
    if (existingItem) {
      const fullyUpdatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = fullyUpdatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  if (action.type === "REMOVE") {
    // REMOVE item from cart
    console.log(state.items);
    console.log(action);

    const array = [...state.items];
    console.log(array);
    const existingCartIndex = array.findIndex((item) => item.id == action.id);

    const existingCartItem = state.items[existingCartIndex];
    console.log(existingCartItem);

    const updatedAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const reduceAmountItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = reduceAmountItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
}

const ContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item,
    });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id,
    });
  };

  const clearCart = () => {
    dispatchCartAction({
      type: "CLEAR",
    });
  };

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCart,
    clearCart: clearCart,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
