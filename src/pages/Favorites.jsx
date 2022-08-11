import Card from "../components/Card";

function Favorites({ items, handlerAddToFavorite }) {
    return (
        <div className="content p-40">
            <div className="d-flex mb-40 align-center justify-between">
                <h1>Избранное</h1>
            </div>
            <div className="cards_container d-flex flex-wrap">
                {items.map((item) => (
                    <Card
                        favorited={true}
                        addToFavorite={handlerAddToFavorite}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favorites;
