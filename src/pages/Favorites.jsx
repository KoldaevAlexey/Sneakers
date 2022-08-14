import React from "react";
import Card from "../components/Card";
import StoreContext from "../context";

function Favorites({ handlerAddToFavorite }) {
    const { favoriteItems } = React.useContext(StoreContext);

    return (
        <div className="content p-40">
            <div className="d-flex mb-40 align-center justify-between">
                <h1>Избранное</h1>
            </div>
            <div className="cards_container d-flex flex-wrap">
                {favoriteItems.map((item) => (
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
