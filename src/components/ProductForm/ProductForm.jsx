import { Field, Formik } from "formik";
import * as Yup from "yup";
import { debounce } from "lodash";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../redux/filter/filterOperations";
import css from "../DailyRateForm/CalorieForm/CalorieForm.module.css";
import { getProducts } from "../../redux/filter/filterSelectors";
import { addEatenProduct } from "../../redux/userData/userDataOperations";
const validationSchema = Yup.object().shape({
  query: Yup.string().required("Обязательное поле!"),
  weight: Yup.number()
    .min(1, "Минимум 1")
    .max(1000, "Максимум 1000")
    .required(),
});

export default function ProductForm() {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const [productId, setProductId] = useState("");

  const findProducts = (query) => {
    query && dispatch(searchProduct(query));
  };

  const debouncedFindProducts = debounce(findProducts, 400);

  const onSubmitForm = (weight) => {
    weight &&
      dispatch(addEatenProduct({ date: new Date(), productId, weight }));
  };

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          query: "",
          weight: "",
        }}
      >
        {({ errors, touched, values, resetForm, setFieldValue }) => (
          <form
            onSubmit={() => {
              onSubmitForm(values.weight);
              resetForm();
            }}
          >
            <Field
              className={css.input}
              type="text"
              name="query"
              placeholder="Введите название продукта"
              value={values.query}
              onChange={(e) => {
                setFieldValue("query", e.target.value);
                debouncedFindProducts(values.query);
              }}
            />
            {touched.query && errors.query && (
              <p className={css.error}>{errors.query}</p>
            )}
            <Field
              className={css.input}
              type="number"
              name="weight"
              placeholder="Граммы"
            />
            {touched.weight && errors.weight && (
              <p className={css.error}>{errors.weight}</p>
            )}
            <button type="submit"></button>
            <ul>
              {products.map((product) => (
                <li
                  key={product._id}
                  onClick={() => {
                    setProductId(product._id);
                    setFieldValue("query", product.title.ru);
                  }}
                >
                  <p>{product.title.ru}</p>
                </li>
              ))}
            </ul>
          </form>
        )}
      </Formik>
    </>
  );
}