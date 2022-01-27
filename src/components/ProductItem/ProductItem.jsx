import { useDispatch, useSelector } from "react-redux";
import { removeEatenProduct } from "../../redux/userData/userDataOperations";
import { getDayId } from "../../redux/userData/userDataSelectors";
import styles from "./ProductItem.module.css";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const dayd = useSelector(getDayId);
  return (
    <li className={styles.item}>
      <p className={styles.name}>{product.title}</p>
        <p className={styles.weight}>{product.weight} г</p>
        <p className={styles.kcal}>{product.kcal} ккaл</p>
      <button
        onClick={() =>
          dispatch(
            removeEatenProduct(
              JSON.stringify({
                dayId: dayd,
                eatenProductId: product.id,
              })
            )
          )
        }
        className={styles.buttonCross}
      >
        X
      </button>
    </li>
  );
}
