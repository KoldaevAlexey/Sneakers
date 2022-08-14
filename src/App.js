import React from "react";
import { Routes, Route } from "react-router-dom";
import StoreContext from "./context";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favoriteItems, setFavoriteItems] = React.useState([]);
    const [searchItem, setSearchItems] = React.useState();
    const [toggleCart, setToggleCart] = React.useState(false);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function handlerFetchToApi() {
            const itemsResponse = await axios.get(
                "https://62efc45857311485d127eb48.mockapi.io/items"
            );

            setCartItems(
                localStorage.getItem("cart")
                    ? JSON.parse(localStorage.getItem("cart"))
                    : []
            );

            const favoriteResponse = await axios.get(
                "https://62efc45857311485d127eb48.mockapi.io/favorite"
            );

            setItems(itemsResponse.data);
            setFavoriteItems(favoriteResponse.data);
            setLoaded(true);
        }
        handlerFetchToApi();
    }, []);

    const handlerAddItemCart = (card) => {
        /* if (cartItems.find((item) => Number(item.id) === Number(card.id))) {
            await axios.delete(
                `https://62efc45857311485d127eb48.mockapi.io/cart/${card.id}`
            );
            setCartItems((prev) =>
                prev.filter((item) => Number(item.id) !== Number(card.id))
            ); */
        /* } else {
             axios.post(
                "https://62efc45857311485d127eb48.mockapi.io/cart",
                card
            ); */
        setCartItems([...cartItems, card]);
        localStorage.setItem("cart", JSON.stringify([...cartItems, card]));
    };

    const handlerAddToFavorite = async (card) => {
        try {
            if (favoriteItems.find((obj) => obj.id === card.id)) {
                axios.delete(
                    `https://62efc45857311485d127eb48.mockapi.io/favorite/${card.id}`
                );
                setFavoriteItems((prev) =>
                    prev.filter((item) => item.id !== card.id)
                );
            } else {
                const { data } = await axios.post(
                    "https://62efc45857311485d127eb48.mockapi.io/favorite",
                    card
                );

                setFavoriteItems((prev) => [...prev, data]);
            }
        } catch (error) {
            alert("Ошибка при добавлении в Избранное");
        }
    };

    const removeItemCart = (card) => {
        try {
            if (cartItems.find((obj) => Number(obj.id) === Number(card.id))) {
                setCartItems((prev) =>
                    prev.filter((item) => item.id !== card.id)
                );
                localStorage.clear();
                localStorage.setItem("cart", JSON.stringify(cartItems));
            }
        } catch (error) {
            alert("Ошибка при удалении из корзины");
        }
    };

    const changeSearchInput = (event) => {
        setSearchItems(event.target.value);
    };

    const clearSeacrhInput = () => {
        setSearchItems("");
    };

    function cartTotalPrice(items) {
        let sum = 0;
        cartItems.forEach((item) => {
            sum += item.price;
        });
        return sum;
    }

    return (
        <StoreContext.Provider value={{ items, cartItems, favoriteItems }}>
            <div className="wrapper clear">
                {toggleCart && (
                    <Cart
                        items={cartItems}
                        removeItem={removeItemCart}
                        closeCart={() => setToggleCart(false)}
                        cartTotalPrice={cartTotalPrice}
                    />
                )}

                <Header
                    showCart={() => setToggleCart(true)}
                    cartTotalPrice={cartTotalPrice}
                />

                <Routes>
                    <Route
                        path="/"
                        exact
                        element={
                            <Home
                                items={items}
                                searchItem={searchItem}
                                changeSearchInput={changeSearchInput}
                                clearSeacrhInput={clearSeacrhInput}
                                handlerAddItemCart={handlerAddItemCart}
                                handlerAddToFavorite={handlerAddToFavorite}
                                loaded={loaded}
                            />
                        }
                    ></Route>
                    <Route
                        path="/favorites"
                        exact
                        element={
                            <Favorites
                                handlerAddToFavorite={handlerAddToFavorite}
                            />
                        }
                    ></Route>
                </Routes>
            </div>
        </StoreContext.Provider>
    );
}

export default App;
