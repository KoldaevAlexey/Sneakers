import React from "react";
import StoreContext from "../context";

import styles from "../components/Card/Card.module.scss";

function Orders() {
    const { orders } = React.useContext(StoreContext);

    return (
        <div className="content p-40">
            <div className="d-flex mb-40 align-center justify-between">
                <h1>Мои покупки</h1>
            </div>
            <div className="cards_container d-flex orders">
                {orders.map((item) => (
                    <>
                        <h2>{`Заказ #${item.orderNumber}`}</h2>
                        <div className="order_card_wrapper">
                            {item.items.map((orderItem) => (
                                <div className={styles.card}>
                                    <img
                                        width={133}
                                        height={112}
                                        src={orderItem.imageUrl}
                                        alt="nike_blazer"
                                    />
                                    <h5>{orderItem.title}</h5>
                                    <div className="d-flex justify-between align-center">
                                        <div className="d-flex flex-column">
                                            <span>Цена:</span>
                                            <b>{orderItem.price} руб.</b>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Orders;
