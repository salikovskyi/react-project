import { useDispatch, useSelector } from "react-redux";
import { removeEatenProduct } from "../../redux/userData/userDataOperations";
import { getDayId } from "../../redux/userData/userDataSelectors";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const dayd = useSelector(getDayId);
  return (
    <li>
      <p>{product.title}</p>
      <span className={styled.product}>{product.weight} г</span>
      <span>{product.kcal} ккал</span>
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
      >
        <svg width="5" height="5">
          <use href="../../assets/images/sprite/cross.svg"></use>
        </svg>
      </button>
    </li>
  );
}
