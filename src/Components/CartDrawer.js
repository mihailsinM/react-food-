function CartDrawer({ onClose, onRemove, items = [] }) {
    return (
        // style={{ display: 'none' }}
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30 ">
                    Shopping cart{' '}
                    <img onClick={onClose} className="cu-p" width={18} height={18} src="/img/close.png" alt="Close" /></h2>
                <div className="items">

                    {items.map((obj) => (

                        <div className="cartItem d-flex align-center mb-20">
                            <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price}$</b>
                            </div>
                            <img
                                onClick={() => onRemove(obj.id)}
                                className="removeBtn"
                                width={18}
                                height={18}
                                src="/img/minus.png"
                                alt="Remove" />
                        </div>
                    ))}
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