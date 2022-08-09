import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [searchItem, setSearchItems] = React.useState();
    const [toggleCart, setToggleCart] = React.useState(false);

    const handlerAddItemCart = (card) => {
        axios.post(
            "https://62efc45857311485d127eb48.mockapi.io/cartItems",
            card
        );
        setCartItems([...cartItems, card]);
    };

    const removeItemCart = (id) => {
        axios.delete(
            `https://62efc45857311485d127eb48.mockapi.io/cartItems/${id}`
        );
        setCartItems((prev) => prev.filter((item) => item.id !== id));
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
            .get("https://62efc45857311485d127eb48.mockapi.io/cartItems")
            .then((res) => setCartItems(res.data));
    }, []);

    return (
        <div className="wrapper clear">
            {toggleCart && (
                <Cart
                    items={cartItems}
                    deleteCard={(id) => removeItemCart(id)}
                    closeCart={() => setToggleCart(false)}
                />
            )}
            <Header showCart={() => setToggleCart(true)} />
            <div className="content p-40">
                <div className="d-flex mb-40 align-center justify-between">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="search" />
                        <input
                            onChange={changeSearchInput}
                            value={searchItem}
                            placeholder="Поиск..."
                        />
                        {searchItem && (
                            <img
                                src="/img/btn_remove.svg"
                                alt="clear"
                                onClick={clearSeacrhInput}
                            />
                        )}
                    </div>
                </div>
                <div className="cards_container d-flex flex-wrap">
                    {items.map((card) => (
                        <Card
                            title={card.title}
                            price={card.price}
                            imageUrl={card.imageUrl}
                            addFavorite={1}
                            addItemCart={() => handlerAddItemCart(card)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
