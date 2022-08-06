import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

const dataSneakers = [
    {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 12999,
        imageUrl: "/sneakers/nike_blazer.jpg",
    },
    {
        title: "Мужские Кроссовки Nike Air Max 270",
        price: 12999,
        imageUrl: "/sneakers/nike_air.jpg",
    },
];

function App() {
    return (
        <div className="wrapper clear">
            <Cart />
            <Header />
            <div className="content p-40">
                <div className="d-flex mb-40 align-center justify-between">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>

                <div className="cards_container d-flex justify-between">
                    {dataSneakers.map((card) => (
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
