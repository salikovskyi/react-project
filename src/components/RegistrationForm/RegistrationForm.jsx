import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/authOperations";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import css from "./RegistrationForm.module.css";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Минимум 2 символa")
    .max(50, "Масимум 50 символов")
    .required("Обязательное поле!"),
  email: Yup.string()
    .min(5, "Минимум 5 символов")
    .max(50, "Слишком длинный")
    .required("Обязательное поле!"),
  password: Yup.string()
    .min(8, "Минимум 8 символа")
    .max(40, "Максимум 40 символов")
    .required("Обязательное поле!"),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
};
export default function RegistrationForm() {
  const dispatch = useDispatch();
  const onRegister = (state) => dispatch(registerUser(state));

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onRegister(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <div className={css.register_section}>
      <form className={css.form_container} onSubmit={handleSubmit}>
        <h2 className={css.form_title}>Регистрация</h2>
        <label className={css.form_label}>
          <input
            className={`${css.input} ${
              errors.username && touched.username ? css.error_input : ""
            }`}
            type="text"
            placeholder="Имя *"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          {touched.username && errors.username && (
            <p className={css.error}>{errors.username}</p>
          )}
        </label>
        <label className={css.form_label}>
          <input
            className={`${css.input} ${
              errors.email && touched.email ? css.error_input : ""
            }`}
            type="text"
            placeholder="Логин *"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {touched.email && errors.email && (
            <p className={css.error}>{errors.email}</p>
          )}
        </label>
        <label className={css.form_label}>
          <input
            className={`${css.input} ${
              errors.password && touched.password ? css.error_input : ""
            }`}
            type="password"
            placeholder="Пароль *"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {touched.password && errors.password && (
            <p className={css.error}>{errors.password}</p>
          )}
        </label>
        <div className={css.btn_container}>
          <Link to="/login">
            <button type="button" className={css.form_btn}>
              Вход
            </button>
          </Link>
          <button type="submit" className={css.secondary_form_btn}>
            Регистрация
          </button>
        </div>
      </form>
    </div>
  );
}
