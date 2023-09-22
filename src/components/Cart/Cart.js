import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import cartContext from '../../store/cart-context';

const Cart = (props) => {

  const cartCtx = useContext(cartContext);

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addToCart({ ...item, amount: 1 });
  }

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeFromCart(id)
  }
  const cartItems = (
    <ul className={classes['cart-items']}>
      {
        cartCtx.items
          .map((item) => (
            <CartItem
              name={item.name}
              price={item.price}
              amount={item.amount}
              key={item.id}
              onAdd={cartItemAddHandler.bind(null, item)}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
            />
          ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;