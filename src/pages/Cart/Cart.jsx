import React from "react";
import styles from "./styles.module.css";
import Tooltip from '@mui/material/Tooltip';
import { UseCartContext } from "../../context/context";
import { filter_array } from "../../utils/filter_array";
import { Cards } from "../../components/cards/Cards";

const Cart = ({ search }) => {
    const { cart, setCart } = UseCartContext([]);
    const cart_filter = filter_array(search, cart);
    
    const remove_cart_item = (id) => {
        const remove_item = cart.filter(item => item.rank !== id);
        return setCart(remove_item);
    };
    return (
        <>
            <ul className={styles.cart}>
                {
                    cart_filter.map((cart, index) => {
                        return <li key={index}>
                            <Cards
                                title={cart.title}
                                icon={cart.book_image}
                                isCartTrue={true}
                                handleCart={() => remove_cart_item(cart.rank)}
                                change_name="Remover do carrinho"
                            />
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default Cart