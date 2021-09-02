import React, {useContext, useState, createContext} from "react"; 

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
                    return { ... cartElement, quantity: cartElement.quantity + quantity };
                } else return cartElement;
            });
            setCart(newCart);
        } else {
            setCart((element) => [ ...element, { ...data, quantity}])
        }
    };

const removeItem = (itemId) => {
    setCart(cart.filter((element) => element.data.id !== itemId))
};

const clear = () => setCart([])

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}

