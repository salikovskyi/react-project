
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/authOperations";
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { Link } from "react-router-dom";

const initialForm = { email: "", password: "" };

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(`* E-mail адрес введен неверно!`)
    .min(5, "* Минимум 5 символов")
    .required("*Поле обязательно!"),
  password: Yup.string()
    .required("* Поле обязательно!")
    .min(3, "* Минимум 3 символа")
    .max(20, "* Максимум 20 символов"),
});

export const FormControl = ({ label, ...props }) => {
  const id = useMemo(() => Math.floor(Math.random() * 99999).toString(), []);
  const [field, meta] = useField(props);
  return (
    <div className={css.form_control_container}>
      <label className={css.label} htmlFor={id}>
        {label}
        <input
          id={id}
          className={
            meta.error && meta.touched ? `${css.input_error}` : `${css.input}`
          }
          {...field}
          {...props}
        />
        <div className={css.box_error_message}>
          {meta.error && meta.touched && (
            <p className={css.error_message_text}>{meta.error}</p>
          )}
        </div>
      </label>
    </div>
  );
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const onLogin = (state) => dispatch(loginUser(state));

  const handleSubmit = (values) => {
    onLogin(values);
  };

  return (
    <div className={css.form_container}>
      <h2 className={css.form_title}>ВХОД</h2>
      <Formik
        initialValues={initialForm}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <FormControl label="Логин *" name="email" type="email" />
          <FormControl label="Пароль *" type="password" name="password" />
          <div className={css.btn_container}>
            <button type="submit" className={css.form_btn}>
              Вход
            </button>
            <Link to="/registration" exact>
              <button type="button" className={css.secondary_form_btn}>
                Регистрация
              </button>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;