import { Field, Formik } from "formik";
import * as Yup from "yup";
import { debounce } from "lodash";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../redux/filter/filterOperations";
import css from "./ProductForm.module.css";
import { getProducts } from "../../redux/filter/filterSelectors";
import { addEatenProduct } from "../../redux/userData/userDataOperations";
import { clearHintList } from "../../redux/filter/filterSlice";
import dateFormatter from "../../utils/helpers/dateFormatter";
import { getUserData } from "../../redux/userData/userDataSelectors";
import ProductModal from "./ProductModal/ProductModal";
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
  const [showDiaryMenu, setShowDiaryMenu] = useState(false);

  const [productId, setProductId] = useState("");

  const findProducts = (query) => {
    query && dispatch(searchProduct(query));
  };

  const debouncedFindProducts = debounce(findProducts, 400);

  const onSubmitForm = (weight) => {
    const product = { date: dateFormatter, productId, weight };
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
              className={css.input}
              type="text"
              name="query"
              placeholder="Введите название продукта"
              autocomplete="off"
              value={values.query}
              onChange={(e) => {
                setFieldValue("query", e.target.value);
                debouncedFindProducts(values.query);
              }}
              className={css.ProductSearch}
            />
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
            <button
            onClick={() => setShowDiaryMenu(!showDiaryMenu)}
            className={css.product_btn}>Добавить</button> 
            <ProductModal active={showDiaryMenu} setActive={setShowDiaryMenu} /> 
            <ul>
              {products.map((product) => (
                <li
                  key={product._id}
                  onClick={() => {
                    setProductId(product._id);
                    setFieldValue("query", product.title.ru);
                    dispatch(clearHintList());
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
