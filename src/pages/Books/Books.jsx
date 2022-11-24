import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Cards } from "../../components/cards/Cards";
import { filter_array } from "../../utils/filter_array";
import { UseCartContext } from "../../context/context";
import { containsInObject } from "../../utils/contains_in_object";

const Books = ({ search }) => {
    const [books, setBooks] = useState([]);
    const { cart, setCart } = UseCartContext([]);
    const book_filter = filter_array(search, books);
    useEffect(() => {
        fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=RQsjWFRxTUttxxEfXAvgFDR7rO1ZMYmz")
            .then(response => response.json()).then((e, index) => {
                const newObj = e.results.books.map(items => {
                    items["icon"] = items.book_image;
                    items["id"] = items.rank;
                    return items;
                })
                return setBooks(newObj);
            });
    }, [setBooks]);

    const add_in_cart = (book) => {
        const itIsInCart = containsInObject(book, cart);
        if (!itIsInCart) {
            setCart(prevState => [...prevState, book]);
            return;
        }
        return alert(`"${book.title}" já adicionado no carrinho!`);
    }

    return (
        <div className={styles.container}>
            <ul className={styles.books}>
                {
                    book_filter.map((book, index) => {
                        return <li key={index}>
                            <Cards
                                title={book.title}
                                icon={book.icon}
                                isCartTrue={true}
                                handleCart={() => add_in_cart(book, index)}
                                change_name="Adicionar ao carrinho"
                            />
                        </li>
                    })
                }
            </ul>
        </div>
    )
};

export default Books;