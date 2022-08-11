import React from "react";
import { Routes, Route } from "react-router-dom";
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

    const handlerAddItemCart = (card) => {
        setCartItems([...cartItems, card]);
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

    const removeItemCart = (title) => {
        setCartItems((prev) => prev.filter((item) => item.title !== title));
    };

    const changeSearchInput = (event) => {
        setSearchItems(event.target.value);
    };

    const clearSeacrhInput = () => {
        setSearchItems("");
    };

    React.useEffect(() => {
        axios
            .get("https://62efc45857311485d127eb48.mockapi.io/items")
            .then((res) => setItems(res.data));

        axios
            .get("https://62efc45857311485d127eb48.mockapi.io/favorite")
            .then((res) => setFavoriteItems(res.data));
    }, []);

    return (
        <div className="wrapper clear">
            {toggleCart && (
                <Cart
                    items={cartItems}
                    removeItem={removeItemCart}
                    closeCart={() => setToggleCart(false)}
                />
            )}

            <Header showCart={() => setToggleCart(true)} />

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
                        />
                    }
                ></Route>
                <Route
                    path="/favorites"
                    exact
                    element={
                        <Favorites
                            items={favoriteItems}
                            handlerAddToFavorite={handlerAddToFavorite}
                        />
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
