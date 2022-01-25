import { useDispatch, useSelector } from "react-redux";
import { removeEatenProduct } from "../../redux/userData/userDataOperations";
import { daySummary } from "../../redux/userData/userDataSelectors";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const { date, id: dayId } = useSelector(daySummary);
  return (
    <li>
      <p>{product.title}</p>
      <span>{product.weight} г</span>
      <span>{product.kcal} ккал</span>
      <button
        onClick={() =>
          dispatch(removeEatenProduct({ eatenProductId: product.id, dayId }))
        }
      >
        <svg>
          <use href="../../assets/images/sprite/cross.svg"></use>
        </svg>
      </button>
    </li>
  );
}
