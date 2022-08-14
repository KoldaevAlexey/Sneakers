import React from "react";
import { Link } from "react-router-dom";
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
                {favoriteItems.length === 0 ? (
                    <div className="favorite_empty">
                        <img src="/img/empty_favorite.png" alt="smile" />
                        <h2>Закладок нет :(</h2>
                        <span>Вы ничего не добавляли в закладки</span>
                        <Link to="/">
                            <button>Вернуться назад</button>
                        </Link>
                    </div>
                ) : (
                    <>
                        {favoriteItems.map((item) => (
                            <Card
                                favorited={true}
                                addToFavorite={handlerAddToFavorite}
                                {...item}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}

export default Favorites;
