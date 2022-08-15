import React from "react";
import Card from "../components/Card";
import StoreContext from "../context";

function Orders() {
    const { orders } = React.useContext(StoreContext);

    return (
        <div className="content p-40">
            <div className="d-flex mb-40 align-center justify-between">
                <h1>Мои покупки</h1>
            </div>
            <div className="cards_container d-flex flex-wrap">
                {orders.map((item) => (
                    <>
                        <h2>{`Заказ #${item.orderNumber}`}</h2>
                        {item.items.map((orderItem) => (
                            <Card
                                title={orderItem.title}
                                price={orderItem.price}
                                imageUrl={orderItem.imageUrl}
                            ></Card>
                        ))}
                    </>
                ))}
            </div>
        </div>
    );
}

export default Orders;
