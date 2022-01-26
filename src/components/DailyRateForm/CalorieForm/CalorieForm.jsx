import css from "./CalorieForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { input, Form, Formik, useFormik } from "formik";
import Button from "../../_styled/Button.styled";
import {
  dailyRateInfo,
  userDaily,
} from "../../../redux/userData/userDataOperations";
import { getIsLoggedIn, getUserId } from "../../../redux/auth/authSelectors";
import { openModal, closeModal } from "../../../redux/userData/userDataSlice";
import convertFormValuesToNumbers from "../../../utils/helpers/convertFormValuesToNumbers";

const validationSchema = Yup.object().shape({
  height: Yup.number()
    .min(100, "Минимальный рост 100см")
    .max(250, "Mаксимальный рост 250см")
    .required("Обязательное поле!"),
  age: Yup.number()
    .min(18, "Минимальный возраст 18")
    .max(100, "Максимальный возраст 100")
    .required("Обязательное поле!"),
  weight: Yup.number()
    .min(20, "Минимальный вес 20кг")
    .max(500, "Максимальный вес 500кг")
    .required("Обязательное поле!"),
  desiredWeight: Yup.number()
    .min(20, "Минимальный желательный вес 20кг")
    .max(500, "Максимальный жедательный вес 500кг")
    .required("Обязательное поле!")
    .when("weight", (weight, schema) => {
      return schema.test({
        test: (desiredWeight) => !!weight && desiredWeight < weight,
        message: "Желаемый вес должен быть МЕНЬШЕ чем указаный вес",
      });
    }),
  bloodType: Yup.number().required(
    "Група крови должна быть обязательно указана!"
  ),
});

const initialValues = {
  height: "",
  age: "",
  weight: "",
  desiredWeight: "",
  bloodType: "1",
};
export default function CalorieForm({ userId }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const onSubmitForm = (values) => {
    const numValues = convertFormValuesToNumbers(values);
    console.log(numValues);
    if (isLoggedIn) {
      dispatch(userDaily({ userId, values: { weight: numValues.weight } }));
    } else {
      dispatch(dailyRateInfo(numValues));
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onSubmitForm(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit, resetForm } =
    formik;
  return (
    <div className={css.form_section}>
      <form className={css.form} onSubmit={handleSubmit}>
        <h2 className={css.form_title}>Узнай свою суточную норму калорий</h2>
        <div className={css.form_wrapper}>
          <div className={css.form_value}>
            <label className={css.form_label}>
              <input
                className={`${css.input} ${
                  errors.height && touched.height ? css.error_input : ""
                }`}
                placeholder="Рост *"
                name="height"
                type="text"
                value={values.height}
                onChange={handleChange}
              />
              {touched.height && errors.height && (
                <p className={css.error}>{errors.height}</p>
              )}
            </label>
            <label className={css.form_label}>
              <input
                className={`${css.input} ${
                  errors.age && touched.age ? css.error_input : ""
                }`}
                placeholder="Возраст *"
                name="age"
                type="text"
                value={values.age}
                onChange={handleChange}
              />
            </label>
            {touched.age && errors.age && (
              <p className={css.error}>{errors.age}</p>
            )}
            <label className={css.form_label}>
              <input
                className={`${css.input} ${
                  errors.weight && touched.weight ? css.error_input : ""
                }`}
                placeholder="Текущий вес *"
                name="weight"
                type="text"
                value={values.weight}
                onChange={handleChange}
              />
            </label>
            {touched.weight && errors.weight && (
              <p className={css.error}>{errors.weight}</p>
            )}
          </div>
          <div>
            <label className={css.form_label}>
              <input
                className={`${css.input} ${
                  errors.desiredWeight && touched.weight ? css.error_input : ""
                }`}
                placeholder="Желаемый вес *"
                name="desiredWeight"
                type="text"
                value={values.desiredWeight}
                onChange={handleChange}
              />
            </label>
            {touched.desiredWeight && errors.desiredWeight && (
              <p className={css.error}>{errors.desiredWeight}</p>
            )}
            <p className={css.form_subtitle}>Группа крови *</p>
            <div className={css.form_radio}>
              <input
                id="first"
                type="radio"
                value="1"
                name="bloodType"
                className={css.form_radioinput}
                onChange={handleChange}
                checked={"1" === values.bloodType}
              />
              <label htmlFor="first" className={css.form_radioLabel}>
                1
              </label>
              <input
                id="second"
                type="radio"
                value="2"
                name="bloodType"
                className={css.form_radioinput}
                onChange={handleChange}
                checked={"2" === values.bloodType}
              />
              <label htmlFor="second" className={css.form_radioLabel}>
                2
              </label>
              <input
                id="third"
                type="radio"
                value="3"
                name="bloodType"
                className={css.form_radioinput}
                onChange={handleChange}
                checked={"3" === values.bloodType}
              />
              <label htmlFor="third" className={css.form_radioLabel}>
                3
              </label>
              <input
                id="fourth"
                type="radio"
                value="4"
                name="bloodType"
                className={css.form_radioinput}
                onChange={handleChange}
                checked={"4" === values.bloodType}
              />
              <label htmlFor="fourth" className={css.form_radioLabel}>
                4
              </label>
              {touched.bloodType && errors.bloodType && (
                <p className={css.error}>{errors.bloodType}</p>
              )}
            </div>
          </div>
        </div>
        <div className={css.button}>
          <Button type="submit">Похудеть</Button>
        </div>
      </form>
    </div>
  );
}
