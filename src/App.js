import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

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
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default App;
