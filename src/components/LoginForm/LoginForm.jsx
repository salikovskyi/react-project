import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/authOperations";
// import { Form, Formik, useField } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(5, "Минимум 5 символов")
    .max(50, "Слишком длинный")
    .required("Обязательное поле!"),
  password: Yup.string()
    .min(8, "Минимум 8 символа")
    .max(40, "Максимум 40 символов")
    .required("Обязательное поле!")
});

const initialValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const onLogin = (state) => dispatch(loginUser(state));

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onLogin(values);
    }
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <div className={css.login_section}>
      <form className={css.form_container} onSubmit={handleSubmit}>
        <h2 className={css.form_title}>Вход</h2>
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
          <button type="submit" className={css.form_btn}>
            Вход
          </button>
          <Link to="/registration" className={css.secondary_form_btn}>
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
}
