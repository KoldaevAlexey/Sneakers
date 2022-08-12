import Card from "../components/Card";

function Home({
    items,
    searchItem,
    changeSearchInput,
    clearSeacrhInput,
    handlerAddItemCart,
    handlerAddToFavorite,
    cartItems,
}) {
    return (
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
                {items
                    /* .filter((item) =>
                    item.title
                        .toLowerCase()
                        .includes(
                            searchItem && searchItem.toLowerCase()
                        )
                ) */
                    .map((card, index) => (
                        <Card
                            key={index}
                            id={card.id}
                            title={card.title}
                            price={card.price}
                            imageUrl={card.imageUrl}
                            addToFavorite={(obj) => handlerAddToFavorite(obj)}
                            addItemCart={() => handlerAddItemCart(card)}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Home;
