import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase.config.js";

function Header() {
  const history = useHistory();
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    } else {
      history.push('/login');
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
          alt="amazon_logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        
          <div onClick={handleAuthentication} className="header__navOption">
            <span className="header__navOptionOne">Hello {user?.email} </span>
            <span className="header__navOptionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
       

        <div className="header__navOption">
          <span className="header__navOptionOne">Return</span>
          <span className="header__navOptionTwo"> & Orders</span>
        </div>
        <div className="header__navOption">
          <span className="header__navOptionOne">Your </span>
          <span className="header__navOptionTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__navOptionBasket">
            <ShoppingBasketIcon />
            <span className="header__navOptionTwo header__basketCount">
              &nbsp;{basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
