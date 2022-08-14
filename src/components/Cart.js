function Cart({ closeCart, removeItem, items = [], cartTotalPrice }) {
    return (
        <div className="cart_wrapper">
            <div className="cart">
                {items.length === 0 ? (
                    <div className="cart_empty">
                        <img
                            src="/img/empty_cart.jpg"
                            alt="cart"
                            width={120}
                            height={120}
                        />
                        <h2>Корзина пустая</h2>
                        <span>
                            Добавьте хотя бы одну пару <br /> кроссовок, чтобы
                            сделать заказ.
                        </span>
                        <button onClick={closeCart}>Вернуться назад</button>
                    </div>
                ) : (
                    <>
                        <h2 className="d-flex justify-between">
                            Корзина{" "}
                            <img
                                onClick={closeCart}
                                className="btn_remove"
                                src="img/btn_remove.svg"
                                alt="remove"
                            />
                        </h2>
                        <div className="cart_items_wrapper">
                            {items.map((card) => (
                                <div className="cart_item d-flex align-center">
                                    <img
                                        className="mr-20"
                                        width={70}
                                        height={70}
                                        src={card.imageUrl}
                                        alt="item"
                                    />
                                    <div>
                                        <p className="mb-5">{card.title}</p>
                                        <b>{card.price} руб.</b>
                                    </div>
                                    <img
                                        onClick={() => removeItem(card)}
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
                                    <b>{cartTotalPrice(items)} руб.</b>
                                </li>
                                <li className="d-flex justify-between">
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b> руб.</b>
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
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;
