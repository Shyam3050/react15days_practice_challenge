import React from "react";
import styles from "./Header.module.css";
import Blinkit from "../../assets/blinkit_icon.svg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
       <header className={styles.header}>
         <img src={Blinkit} alt="blinkit" />
         <HeaderCartButton cartShow = {props.cartShow}/>
       </header>
      <div className={styles["main-image"]}>
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
          alt="pancorner banner"
        />
      </div>
    </>
  );
};

export default Header;
