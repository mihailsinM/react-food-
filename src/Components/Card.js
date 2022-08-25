function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img width={20} height={20} src="/img/heart_Un.png" alt="Unliked" />
            </div>
            <img width={133} height={133} src="/img/food.png" alt="Food" />
            <h5>Vegetarian food</h5>
            <div className="d-flex justify-between align-centr">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>100$</b>
                </div>
                <button className="button">
                    <img width={18} height={18} src="/img/plus.png" alt="Plus" />
                </button>
            </div>

        </div>
    );
}
export default Card;