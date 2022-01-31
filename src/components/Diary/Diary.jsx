import { useSelector } from "react-redux";

import ProductItem from "../ProductItem/ProductItem";
import CalendarPicker from "../CalendarPicker";
import ProductForm from "../ProductForm/ProductForm";
import { getEatenProducts } from "../../redux/userData/userDataSelectors";

import css from "./Diary.module.css";

export default function Diary() {
  const products = useSelector(getEatenProducts);

  return (
    <div className={css.flex}>
      <CalendarPicker />
      <ProductForm />
      {products ? (
        <ul>
          {products?.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
