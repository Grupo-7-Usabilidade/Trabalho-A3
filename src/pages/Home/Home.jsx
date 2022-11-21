import React from "react";
import styles from "./styles.module.css";
import { Cards } from "../../components/cards/Cards";
import Header from "../../components/header/Header";

import Laptop from "../../assets/images/laptop-screen.png";
import Book from "../../assets/images/open-book (1).png";
import Blender from "../../assets/images/blender.png"
import Peripherals from "../../assets/images/ssd.png"
import Film from "../../assets/images/film-slate.png"

const Home = () => {
    const HOME_ICONS = [
        {
            name: "ELETRÔNICOS",
            icon: Laptop,
        },
        {
            name: "ELETRODOMÉSTICOS",
            icon: Blender,
        },
        {
            name: "PERIFÉRICOS",
            icon: Peripherals,
        },
        {
            name: "LIVROS",
            icon: Book,
        },
        {
            name: "FILMES",
            icon: Film,
        },
    ]
    return (
        <>
            <div className={styles.cards}>
                <ul>
                    {
                        HOME_ICONS.map(card => {
                            return <li>
                                <Cards
                                    title={card.name}
                                    icon={card.icon}
                                />
                            </li>
                        })
                    }
                </ul>
            </div>
        </>
    )
};

export default Home;