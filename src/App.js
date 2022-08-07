import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
    const [items, setItems] = React.useState([]);
    const [toggleCart, setToggleCart] = React.useState(false);

    return (
        <div className="wrapper clear">
            {toggleCart && <Cart closeCart={() => setToggleCart(false)} />}
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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
