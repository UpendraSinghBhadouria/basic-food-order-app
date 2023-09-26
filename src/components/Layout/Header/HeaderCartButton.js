import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import cartContext from '../../../store/cart-context';

const HeaderCartButton = (props) => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCtx = useContext(cartContext);
    const {items} = cartCtx;
    const totalNumberOfItems = items.reduce((acc,item)=>{
        return acc+item.amount;
    },0)

    const cartBtns = `${classes.button} ${btnIsHighlighted ? classes.bump: ''}`;

    useEffect(()=>{
        if(items.length===0){
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false);
        },300)
        return ()=>{
            clearTimeout(timer);
        }
    },[items])

    return (
        <button className={cartBtns} onClick={props.onClick}>
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
