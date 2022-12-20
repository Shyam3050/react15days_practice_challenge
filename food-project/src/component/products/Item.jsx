import { useState, useContext, useEffect } from "react";
import styles from "./Item.module.css";
import CartContext from "../../store/cart-context";

const Item = (props) => {
  const cartCtx = useContext(CartContext);
  const findItem = cartCtx.items.find((item) => item.id === props.id);
  if (findItem) {
    console.log(findItem.amount);
  }

  function add_to_cart(item) {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  function remove_from_cart(id) {
    cartCtx.removeItem(id);
  }
  const findItemOnItemsArray = cartCtx.items.find(
    (item) => item.id === props.id
  );

  const itemBtns = !findItemOnItemsArray ? (
    <button className={styles.btn} onClick={add_to_cart.bind(null, props.item)}>
      ADD
    </button>
  ) : (
    <div className={styles.btnFlex}>
      <button
        className={styles.button}
        onClick={remove_from_cart.bind(null, props.id)}
      >
        −
      </button>
      <span className={styles.amount}>{findItemOnItemsArray.amount}</span>
      <button
        className={styles.button}
        onClick={add_to_cart.bind(null, props.item)}
      >
        +
      </button>
    </div>
  );
  return (
    <div className={styles.item}>
      <div className={styles.image_container}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.item_description}>
        <div className={styles.title}>
          <h3>{props.name}</h3>
          <p className={styles.weight}>{props.weight}</p>
        </div>
        <div className={styles.item_price_add}>
          <p className={styles.price}>₹{props.price}</p>
          {itemBtns}
        </div>
      </div>
    </div>
  );
};

export default Item;
