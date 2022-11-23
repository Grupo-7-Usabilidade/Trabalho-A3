import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { UseCartContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

const Header = ({ search, handleSearch }) => {
    // const [nameUser, setNameUser] = useState("Matheus Gonçalves Rocha");
    const { cart } = UseCartContext([]);
    const navigate = useNavigate();

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
            <input
                type="text"
                placeholder="digite o nome do produto..."
                onChange={(event) => handleSearch(event.target.value)}
                value={search}
            />
            <SearchIcon />
        </div>

        <div className={styles.signIn}>
            {/* <div>
                <p>Olá, {nameUser.split(" ")[0]}</p>
                <p>Contas e Listas</p>
            </div> */}
            <PersonIcon />
        </div>

        <div className={styles.shoppingCart} onClick={() => navigate("/cart")}>
            <ShoppingCartIcon />
            <p>{cart.length}</p>
        </div>
    </nav>
};

export default Header;