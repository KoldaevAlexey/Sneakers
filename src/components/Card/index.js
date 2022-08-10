import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
    const [addBtnToggle, setAddChecked] = React.useState(false);
    const [favorite, setFavorite] = React.useState(false);

    const handleAddBtn = () => {
        props.addItemCart();
        setAddChecked(!addBtnToggle);
        console.log(props.id);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                {!favorite ? (
                    <img
                        onClick={() => setFavorite(true)}
                        src="/img/like.svg"
                        alt="unliked"
                    />
                ) : (
                    <img
                        onClick={() => setFavorite(false)}
                        src="/img/like-checked.svg"
                        alt="liked"
                    />
                )}
            </div>

            <img
                width={133}
                height={112}
                src={props.imageUrl}
                alt="nike_blazer"
            />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
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
