import css from "./CalorieForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import Button from "../../_styled/Button.styled";
import { getUserData } from "../../../redux/userData/userDataSelectors";
import { useHistory } from "react-router";
import {
  dailyRateInfo,
  userDaily
} from "../../../redux/userData/userDataOperations";
import { getIsLoggedIn, getUserId } from "../../../redux/auth/authSelectors";
import {openModal , closeModal} from '../../../redux/userData/userDataSlice'
import convertFormValuesToNumbers from '../../../utils/helpers/convertFormValuesToNumbers'

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

const initialState = {
  height: "",
  age: "",
  weight: "",
  desiredWeight: "",
  bloodType: "",
};

export default function CalorieForm() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const id = useSelector(getUserId);
  const history = useHistory();

  const onSubmitForm = (values) => {
    if (isLoggedIn) {
      dispatch(userDaily(convertFormValuesToNumbers({ id, values })));
    } else {
      dispatch(dailyRateInfo(convertFormValuesToNumbers(values)));
    }


  };

  return (
    <div className={css.form_section}>
      <Formik validationSchema={validationSchema} initialValues={initialState}>
        {({ errors, touched, values, resetForm }) => (
          <Form
            className={css.form}
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitForm(values);
              resetForm();
            }}
          >
            <h2 className={css.form_title}>
              Узнай свою суточную норму калорий
            </h2>
            <div className={css.form_wrapper}>
              <div className={css.form_value}>
                <label className={css.form_label}>
                  <Field
                    className={`${css.input} ${
                      errors.height && touched.height ? css.error_input : ""
                    }`}
                    placeholder="Рост *"
                    name="height"
                    type="text"
                    value={values.height}
                  />
                  {touched.height && errors.height && (
                    <p className={css.error}>{errors.height}</p>
                  )}
                </label>
                <label className={css.form_label}>
                  <Field
                    className={`${css.input} ${
                      errors.age && touched.age ? css.error_input : ""
                    }`}
                    placeholder="Возраст *"
                    name="age"
                    type="text"
                    value={values.age}
                  />
                </label>
                {touched.age && errors.age && (
                  <p className={css.error}>{errors.age}</p>
                )}
                <label className={css.form_label}>
                  <Field
                    className={`${css.input} ${
                      errors.weight && touched.weight ? css.error_input : ""
                    }`}
                    placeholder="Текущий вес *"
                    name="weight"
                    type="text"
                    value={values.weight}
                  />
                </label>
                {touched.weight && errors.weight && (
                  <p className={css.error}>{errors.weight}</p>
                )}
              </div>
              <div>
                <label className={css.form_label}>
                  <Field
                    className={`${css.input} ${
                      errors.desiredWeight && touched.weight
                        ? css.error_input
                        : ""
                    }`}
                    placeholder="Желаемый вес *"
                    name="desiredWeight"
                    type="text"
                    value={values.desiredWeight}
                  />
                </label>
                {touched.desiredWeight && errors.desiredWeight && (
                  <p className={css.error}>{errors.desiredWeight}</p>
                )}

                <p className={css.form_subtitle}>Группа крови *</p>
                <div className={css.form_radio}>
                  <Field
                    id="first"
                    type="radio"
                    value="1"
                    name="bloodType"
                    className={css.form_radioField}
                  />
                  <label htmlFor="first" className={css.form_radioLabel}>
                    1
                  </label>
                  <Field
                    id="second"
                    type="radio"
                    value="2"
                    name="bloodType"
                    className={css.form_radioField}
                  />
                  <label htmlFor="second" className={css.form_radioLabel}>
                    2
                  </label>
                  <Field
                    id="third"
                    type="radio"
                    value="3"
                    name="bloodType"
                    className={css.form_radioField}
                  />
                  <label htmlFor="third" className={css.form_radioLabel}>
                    3
                  </label>
                  <Field
                    id="fourth"
                    type="radio"
                    value="4"
                    name="bloodType"
                    className={css.form_radioField}
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
              <Button>Похудеть</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
