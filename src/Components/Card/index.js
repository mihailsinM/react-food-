import styles from './Card.module.scss';


function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavorite}>
                <img width={20} height={20} src="/img/heart_Un.png" alt="Unliked" />
            </div>
            <img width={133} height={133} src={props.imageUrl} alt="Food" />
            <h5>{props.title} </h5>
            <div className="d-flex justify-between align-centr">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>{props.price}$</b>
                </div>
                <button className="button" onClick={props.onPlus}>
                    <img width={18} height={18} src="/img/plus.png" alt="Plus" />
                </button>
            </div>
        </div>
    );
}
export default Card;