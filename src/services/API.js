// const url = "https://fakestoreapi.com/";

export const API = {
    get: (products) => {
        // return fetch(`https://fakestoreapi.com/${products}`).then((response) => response.json()).then((JSON) => JSON);
        return fetch(`https://fakestoreapi.com/products`).then((response) => response.json()).then((JSON) => JSON);
    }
}