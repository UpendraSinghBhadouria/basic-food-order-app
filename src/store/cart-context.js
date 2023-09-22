import { createContext, useReducer } from "react";

const cartContext = createContext();

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return { items: updatedItems, totalAmount: updatedAmount }
    }
}

export const CartContextProvider = (props) => {
    const defaultCartState = {
        items: [],
        totalAmount: 0
    }

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })
    }

    const removeFromCartHandler = (id) => {

    }
    const CartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler
    }

    return (
        <cartContext.Provider value={CartContext} >
            {props.children}
        </cartContext.Provider>
    )
}



















export default cartContext;