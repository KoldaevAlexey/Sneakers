import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [toggleCart, setToggleCart] = React.useState(false);

    const handlerAddItemCart = (card) => {
        setCartItems([...cartItems, card]);
    };

    const handlerRemoveItemCart = (card) => {
        setCartItems(
            cartItems.filter((element) => element.title !== card.title)
        );
    };

    React.useEffect(() => {
        fetch("https://62efc45857311485d127eb48.mockapi.io/items")
            .then((data) => {
                return data.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);

    return (
        <div className="wrapper clear">
            {toggleCart && (
                <Cart
                    items={cartItems}
                    deleteCard={(item) => handlerRemoveItemCart(item)}
                    closeCart={() => setToggleCart(false)}
                />
            )}
            <Header showCart={() => setToggleCart(true)} />
            <div className="content p-40">
                <div className="d-flex mb-40 align-center justify-between">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>
                <div className="cards_container d-flex flex-wrap justify-between">
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
