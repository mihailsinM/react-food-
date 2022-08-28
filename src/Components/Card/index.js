
import React from 'react';
import styles from './Card.module.scss';


function Card({ title, imageUrl, price, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img width={20} height={20} src="/img/heart_Un.png" alt="Unliked" />
            </div>
            <img width={133} height={133} src={imageUrl} alt="Food" />
            <h5>{title} </h5>
            <div className="d-flex justify-between align-centr">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>{price}$</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    width={25}
                    height={25}
                    src={isAdded ? "/img/Check_mark.png" : "/img/plus1.png"}
                    alt="Plus" />
            </div>
        </div>
    );
}
export default Card;