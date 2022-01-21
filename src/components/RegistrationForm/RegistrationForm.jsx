import { useFormik} from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/authOperations";
import * as Yup from "yup";
//import Button from "../../_styled/Button.styled";
//import css from "./RegistrationForm.module.css";

 const validationSchema = Yup.object().shape({
   username: Yup.string()
     .required("*Поле обязательно!")
     .min(2, "* Минимум 2 символa"),
   email: Yup.string()
    .email(`* E-mail адрес введен неверно!`)
     .min(5, "* Минимум 5 символов")
     .required("*Поле обязательно!"),
   password: Yup.string()
     .required("* Поле обязательно!")
     .min(3, "* Минимум 3 символа")
     .max(20, "* Максимум 20 символов"),
 });

function RegistrationForm() {
  const dispatch = useDispatch();
  const state = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(registerUser(values));
    },
  });
  return (
    <form onSubmit={state.handleSubmit}>
      <input
        id="username"
        name="username"
        type="text"
        onChange={state.handleChange}
        value={state.values.username}
      />
      <label>Имя*</label>
      <label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={state.handleChange}
          value={state.values.email}
        />
        Логин*
      </label>
      <label>
        <input
          id="password"
          name="password"
          type="text"
          onChange={state.handleChange}
          value={state.values.password}
        />
        Пароль*
      </label>
      <button>Вход</button>
      <button>Регистрация</button>
    </form>
  );
}
export default RegistrationForm;