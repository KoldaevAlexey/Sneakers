function Cart(props) {
    const deleteItem = (item) => {
        props.deleteCard(item);
    };

    return (
        <div className="cart_wrapper">
            <div className="cart">
                <h2 className="d-flex justify-between">
                    Корзина{" "}
                    <img
                        onClick={props.closeCart}
                        className="btn_remove"
                        src="img/btn_remove.svg"
                        alt="remove"
                    />
                </h2>
                <div className="cart_items_wrapper">
                    {props.items.map((card) => (
                        <div className="cart_item d-flex align-center">
                            <img
                                className="mr-20"
                                width={70}
                                height={70}
                                src={card.imageUrl}
                                alt="nike_air_min."
                            />
                            <div>
                                <p className="mb-5">{card.title}</p>
                                <b>{card.price} руб.</b>
                            </div>
                            <img
                                onClick={() => deleteItem(card)}
                                className="btn_remove"
                                src="img/btn_remove.svg"
                                alt="remove"
                            />
                        </div>
                    ))}
                </div>

                <div className="total_wrapper">
                    <ul>
                        <li className="d-flex justify-between">
                            <span>Итого:</span>
                            <div></div>
                            <b>21498 руб.</b>
                        </li>
                        <li className="d-flex justify-between">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button>
                        <img
                            className="btn_arrow"
                            src="img/arrow.svg"
                            alt="arrow"
                        />
                        Оформить заказ
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
