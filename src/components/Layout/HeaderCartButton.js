import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import cartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {

    const cartCtx = useContext(cartContext);
    const totalNumberOfItems = cartCtx.items.reduce((acc,item)=>{
        return acc+item.amount;
    },0)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span >Your Cart</span>
            <span className={classes.badge}>
                {totalNumberOfItems}
            </span>
        </button>
    )
}

export default HeaderCartButton
