import React from "react";
import ShoppingCart from "../../components/shopping-cart";
import Header from "../../components/UI/Header";

function ShoppingCartPage() {
  return (
    <div className="shopping-cart">
      <div className="shopping-cart__header">
        <Header absolute={false} />
      </div>
      <ShoppingCart />
    </div>
  );
}

export default ShoppingCartPage;
