import React, {useContext, useState, createContext} from "react"; 
import {db} from "../components/Firebase/Firebase"
export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
console.log(cart)



    const isInCart = (id) => cart.some((data) => data.id === id);

    const addToCart = (data, quantity) => {
        if (isInCart(data.id)) {
            const newCart = cart.map((cartElement) => {
                if (cartElement.id === data.id) {
                    return { ...cartElement, quantity: cartElement.quantity + quantity };
                } else return cartElement;
            });
            setCart(newCart);
        } else {
            setCart((element) => [ ...element, { ...data, quantity}])
        }
    };

const totalPrice = cart.reduce((acc, item) => { return parseInt(acc + (item.quantity * item.price)) }, 0)

const removeItem = (itemId) => {

    setCart(cart.filter((e) => e.id !== itemId))
};

const clear = () => setCart([])

const updateItemStock = async (id, quantity) => {
    const updateStock = db.collection("items").doc(id);
    await updateStock.update({
"stock": quantity
    })
}



    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clear, totalPrice, updateItemStock }}>
            {children}
        </CartContext.Provider>
    )
}

