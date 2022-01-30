import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../redux/filter/filterOperations";
import css from "./ProductForm.module.css";
import { getProducts } from "../../redux/filter/filterSelectors";
import { addEatenProduct } from "../../redux/userData/userDataOperations";
import { clearHintList } from "../../redux/filter/filterSlice";
import dateFormatter from "../../utils/helpers/dateFormatter";

import useDebouncedInput from "../../hooks/hook";
import { useState } from "react";
import { useEffect } from "react";
import { debounce } from "lodash-es";
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

  const [sentQuery, setSentQuery] = useState("");

  const fetchProducts = (e) => {
    setSentQuery(e.target.value);
  };
  const debouncedFetchProduct = debounce(fetchProducts, 500);

  useEffect(() => {
    sentQuery && dispatch(searchProduct(sentQuery));
  }, [sentQuery]);

  const onSubmitForm = (weight) => {
    const product = { date: dateFormatter, productId: products[0]._id, weight };
    console.log(`product`, product);
    weight && dispatch(addEatenProduct(product));
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
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitForm(values.weight);
              resetForm();
            }}
            className={css.ProductForm}
          >
            <Field
              type="search"
              name="query"
              list="products"
              placeholder="Введите название продукта"
              autoComplete="off"
              value={values.query}
              onChange={(e) => {
                setFieldValue("query", e.target.value);
                debouncedFetchProduct(e);
              }}
              className={css.ProductSearch}
            />
            <datalist id="products">
              {products.map((product) => (
                <option key={product._id}>{product.title.ru}</option>
              ))}
            </datalist>
            {touched.query && errors.query && (
              <p className={css.error}>{errors.query}</p>
            )}
            <Field
              className={css.ProductInput}
              type="number"
              name="weight"
              placeholder="Граммы"
            />
            {touched.weight && errors.weight && (
              <p className={css.error}>{errors.weight}</p>
            )}
            <button className={css.ProductAddBtn}></button>
            {/* <ProductModal active={showDiaryMenu} setActive={setShowDiaryMenu} /> */}
          </form>
        )}
      </Formik>
    </>
  );
}
