import React from "react";
import styles from "./Card.module.scss";

function Card({
    id,
    title,
    price,
    imageUrl,
    addToFavorite,
    addItemCart,
    favorited = false,
    itemInCart = false,
}) {
    const [addBtnToggle, setAddChecked] = React.useState(itemInCart);
    const [favorite, setFavorite] = React.useState(favorited);

    const handleAddBtn = () => {
        addItemCart({ id, title, price, imageUrl });
        setAddChecked(!addBtnToggle);
    };

    const handleAddToFavorite = () => {
        setFavorite(!favorite);
        addToFavorite({ id, title, price, imageUrl });
    };

    return (
        <div className={styles.card}>
            <div onClick={handleAddToFavorite} className={styles.favorite}>
                {favorite ? (
                    <img src="/img/like-checked.svg" alt="liked" />
                ) : (
                    <img src="/img/like.svg" alt="unliked" />
                )}
            </div>

            <img width={133} height={112} src={imageUrl} alt="nike_blazer" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <div className={styles.add_btn}>
                    <img
                        onClick={handleAddBtn}
                        src={
                            !addBtnToggle
                                ? "/img/add.svg"
                                : "/img/add-checked.svg"
                        }
                        alt="Добавить"
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;
