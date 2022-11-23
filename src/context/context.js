import React, { useState, createContext, useContext } from "react";

const Context = createContext();

export const UseContextProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);
    return (
        <Context.Provider value={{
            search,
            setSearch,
            cart,
            setCart
        }}>
            {children}
        </Context.Provider>
    )
};

export const UseSearchContext = () => {
    let context = useContext(Context);
    let { search, setSearch } = context;
    return { search, setSearch };
}

export const UseCartContext = () => {
    let context = useContext(Context);
    let { cart, setCart } = context;
    return { cart, setCart };
}