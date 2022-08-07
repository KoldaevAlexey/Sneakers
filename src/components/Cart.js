function Cart(props) {
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
                    <div className="cart_item d-flex align-center">
                        <img
                            className="mr-20"
                            width={70}
                            height={70}
                            src="sneakers/nike_air.jpg"
                            alt="nike_air_min."
                        />
                        <div>
                            <p className="mb-5">
                                Мужские Кроссовки <br /> Nike Air Max 270
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        <img
                            className="btn_remove"
                            src="img/btn_remove.svg"
                            alt="remove"
                        />
                    </div>
                    <div className="cart_item d-flex align-center">
                        <img
                            className="mr-20"
                            width={70}
                            height={70}
                            src="sneakers/nike_air.jpg"
                            alt="nike_air_min."
                        />
                        <div>
                            <p className="mb-5">
                                Мужские Кроссовки <br /> Nike Air Max 270
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        <img
                            className="btn_remove"
                            src="img/btn_remove.svg"
                            alt="remove"
                        />
                    </div>
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
