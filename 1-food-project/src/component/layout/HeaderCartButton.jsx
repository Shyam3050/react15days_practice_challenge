import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../../assets/cart-icon.svg";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const noOfCartItem = cartCtx.items.reduce(
    (totalCart, item) => totalCart + item.amount,
    0
  );
  return (
    <button className={styles.button} onClick={props.cartShow}>
      <span className={styles.icon}>
        <img src={CartIcon} alt="cart_Icon" />
      </span>
      <div className={styles.price}>
        <span className={styles.badge}>
          <span>{noOfCartItem}</span> items
        </span>
        <span>
          ₹<span>{cartCtx.totalAmount}</span>
        </span>
      </div>
    </button>
  );
};

export default HeaderCartButton;
