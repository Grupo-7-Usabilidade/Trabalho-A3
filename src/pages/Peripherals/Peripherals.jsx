import React from "react";
import styles from "./styles.module.css";
import { Cards } from "../../components/cards/Cards";
import { useNavigate } from "react-router-dom";
import { filter_array } from "../../utils/filter_array";
import { peripherals } from "../../components/database/data/data";
import { containsInObject } from "../../utils/contains_in_object";
import { UseCartContext } from "../../context/context";

const Peripherals = ({ search }) => {
    const navigate = useNavigate();
    const { cart, setCart } = UseCartContext([]);
    const class_filter = filter_array(search, peripherals);

    const add_in_cart = (product) => {
        const itIsInCart = containsInObject(product, cart);
        if (!itIsInCart) {
            setCart(prevState => [...prevState, product]);
            return;
        }
        return alert(`"${product.title}" já adicionado no carrinho!`);
    };
    return (
            <div className={styles.cards}>
                <ul>
                    {
                        class_filter.map((card, index) => {
                            return <li key={index} onClick={() => navigate(card.route)}>
                                <Cards
                                    title={card.title}
                                    icon={card.icon}
                                    isCartTrue={true}
                                    handleCart={() => add_in_cart(card, index)}
                                    change_name="Adicionar ao carrinho"
                                />
                            </li>
                        })
                    }
                </ul>
            </div>
    )
};

export default Peripherals;