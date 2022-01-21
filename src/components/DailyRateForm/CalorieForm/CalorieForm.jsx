import css from "./CalorieForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import Button from "../../_styled/Button.styled";

const validationSchema = Yup.object().shape({
  height: Yup.number()
    .min(100, "Minimum value 100см")
    .max(250, "Maximum value 250см")
    .required("Necessarily"),
  age: Yup.number()
    .min(18, "Minimum value 18")
    .max(100, "Maximum value 100")
    .required("Necessarily"),
  weight: Yup.number()
    .min(20, "Minimum value 20")
    .max(500, "Maximum value 500")
    .required("Necessarily"),
  desiredWeight: Yup.number()
    .min(20, "Minimum value 20")
    .max(500, "Maximum value 500")
    .required("Necessarily")
    .when("weight", (weight, schema) => {
      return schema.test({
        test: desiredWeight => !!weight && desiredWeight < weight,
        message: "The desired weight must be less than the current"
      });
    }),
  bloodType: Yup.number().required("Necessarily")
});


export default function CalorieForm() {
  return (
    <div className={css.form_section}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          height: "",
          age: "",
          weight: "",
          desiredWeight: "",
          bloodType: "",
        }}
      >
        <Form>
          <h2 className={css.form_title}>
            Просчитай свою суточную норму калорий прямо сейчас
          </h2>
          <div className={css.form_wrapper}>
            <label className={css.form_label}>
              <Field
                className={css.input}
                placeholder="Рост *"
                name="height"
                type="text"
              />
            </label>
            <label className={css.form_label}>
              <Field
                className={css.input}
                placeholder="Возраст *"
                name="age"
                type="text"
              />
            </label>
            <label className={css.form_label}>
              <Field
                className={css.input}
                placeholder="Текущий вес *"
                name="weight"
                type="text"
              />
            </label>
            <label className={css.form_label}>
              <Field
                className={css.input}
                placeholder="Желаемый вес *"
                name="desiredWeight"
                type="text"
              />
            </label>
            <p className={css.form_subtitle}>Группа крови *</p>
            <div className={css.form_radio}>
              <Field id="first" type="radio" value="1" name="bloodBtn" />
              <label htmlFor="first" className={css.form_radioLabel}>
                1
              </label>
              <Field id="second" type="radio" value="2" name="bloodBtn" />
              <label htmlFor="second" className={css.form_radioLabel}>
                2
              </label>
              <Field id="third" type="radio" value="3" name="bloodBtn" />
              <label htmlFor="third" className={css.form_radioLabel}>
                3
              </label>
              <Field id="fourth" type="radio" value="4" name="bloodBtn" />
              <label htmlFor="fourth" className={css.form_radioLabel}>
                4
              </label>
            </div>
          </div>
          <Button>Похудеть</Button>
        </Form>
      </Formik>
    </div>
  );
}
