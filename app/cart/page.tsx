import React from 'react';

const cart = () => {
  return (
    <div>
      <h4>cart</h4>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};

const CartItem = () => {
  return (
    <div>
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
};

export default cart;
