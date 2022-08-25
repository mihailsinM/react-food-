function CartDrawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30 ">
                    Shopping cart<img className="cu-p" width={18} height={18} src="/img/minus.png" alt="Remove" /></h2>
                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/food.png)' }} className="cartItemImg"></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Vegetarian food</p>
                            <b>100$</b>
                        </div>
                        <img className="removeBtn" width={18} height={18} src="/img/minus.png" alt="Remove" />
                    </div>

                    <div className="cartItem d-flex align-center">
                        <div style={{ backgroundImage: 'url(/img/food.png)' }} className="cartItemImg">
                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Vegetarian food</p>
                            <b>100$</b>
                        </div>
                        <img className="removeBtn" width={18} height={18} src="/img/minus.png" alt="Remove" />
                    </div>
                </div>
                <div className="cartTotalBlock ">
                    <ul >
                        <li >
                            <span >Sum: </span>
                            <div></div>
                            <b> 200$</b>
                        </li>
                        <li >
                            <span >tax: 5% </span>
                            <div></div>
                            <b> 10$</b>
                        </li>
                    </ul>
                    <button className="greenButton">Make a purchase <img width={10} src="/img/arrow.png" alt="Arrow" /></button>
                </div>
            </div>
        </div >
    );
}
export default CartDrawer;