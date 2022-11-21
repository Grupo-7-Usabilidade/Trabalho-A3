import React, {useState} from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    // const [nameUser, setNameUser] = useState("Matheus Gonçalves Rocha");
    return <nav className={styles.container}>
        <Link to="/">
            <div className={styles.logo}>
                <img
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon_logo"
                />
            </div>
        </Link>
        <div className={styles.search}>
            <input type="text" placeholder="digite o nome do produto..." />
            <SearchIcon />
        </div>

        <div className={styles.signIn}>
            {/* <div>
                <p>Olá, {nameUser.split(" ")[0]}</p>
                <p>Contas e Listas</p>
            </div> */}
            <PersonIcon />
        </div>

        <div className={styles.shoppingCart}>
            <ShoppingCartIcon />
            <p>0</p>
        </div>
    </nav>
};

export default Header;