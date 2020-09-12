import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Headers() {
  return (
    <div className="header">
      {/* Amazon Logo */}
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      {/* Search Bar */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {/* Sign In */}
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest </span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        {/* Returns & Orders */}
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        {/* Prime */}
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        {/* Basket */}
        <div className="header__optionBasket">
          <ShoppingCartOutlinedIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Headers;
