import React from "react";
import styles from "./styles.module.css";
import { Cards } from "../../components/cards/Cards";
import { useNavigate } from "react-router-dom";
import { HOME_CARD_CLASS } from "../../components/database/Home/home_card_class";
import { filter_array } from "../../utils/filter_array";

const Home = ({ search }) => {
    const navigate = useNavigate();
    const class_filter = filter_array(search, HOME_CARD_CLASS)



    fetch("https://weather-station-una.herokuapp.com/api/v1/estacoes/").then(e => e.json()).then(e => console.log(e))


    return (
        <>
            <div className={styles.cards}>
                <ul>
                    {
                        class_filter.map((card, index) => {
                            return <li key={index} onClick={() => navigate(card.route)}>
                                <Cards
                                    title={card.name}
                                    icon={card.icon}
                                    isCartTrue={false}
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