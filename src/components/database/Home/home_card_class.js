import Laptop from "../../../assets/images/laptop-screen.png";
import Book from "../../../assets/images/open-book (1).png";
import Blender from "../../../assets/images/blender.png";
import Hardwares from "../../../assets/images/ssd.png";
import Film from "../../../assets/images/film-slate.png";

export const HOME_CARD_CLASS = [
    {
        name: "ELETRÔNICOS",
        icon: Laptop,
    },
    {
        name: "ELETRODOMÉSTICOS",
        icon: Blender,
    },
    {
        name: "HARDWARES",
        icon: Hardwares,
    },
    {
        name: "LIVROS",
        icon: Book,
        route: "/books"
    },
    {
        name: "FILMES",
        icon: Film,
    },
];