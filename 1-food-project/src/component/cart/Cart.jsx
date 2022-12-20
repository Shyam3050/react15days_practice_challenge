import React, { useContext } from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  function add_to_cartHandler(item) {
    cartCtx.addItem({
      ...item, amount: 1
    });
  }

  function remove_from_cartHandler(id) {
    cartCtx.removeItem(id);
  }

  const cartItems = cartCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        src={item.src}
        id={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onAdd={add_to_cartHandler.bind(null, item)}
        onRemove={remove_from_cartHandler.bind(null, item.id)}
      />
    );
  });
  return (
    <Modal onClose={props.onCloseCart}>
      <div>
        <ul>{cartItems}</ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{cartCtx.totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.onCloseCart}
          >
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
