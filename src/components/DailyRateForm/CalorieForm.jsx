import css from "./CalorieForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import Button from '../_styled/Button.styled'

export default function CalorieForm() {
    const validationSchema = Yup.object().shape({
        height: Yup.number()
        .min(100, 'Minimum value 100см')
        .max(250, 'Maximum value 250см')
        .required("Necessarily"),
        age: Yup.number()
        .min(18, 'Minimum value 18')
        .max(100, 'Maximum value 100')
        .required("Necessarily"),
        weight: Yup.number()
        .min(20, 'Minimum value 20')
        .max(500, 'Maximum value 500')
        .required("Necessarily"),
        desiredWeight: Yup.number()
        .min(20, 'Minimum value 20')
        .max(500, 'Maximum value 500')
        .required("Necessarily"),
        // .when('weight', (weight, shema) => {
        //     return shema.test({
        //     })
        // },
        bloodType: Yup.number()
        .required("Necessarily")
    })
  return (
    <div className={css.form_section}>
      <Formik>
        <Form>
          <h2 className={css.form_title}>
            Просчитай свою суточную норму калорий прямо сейчас
          </h2>
          <div className={css.form_wrapper}>
            <label className={css.form_label}>
              <Field placeholder="Рост *" />
            </label>
            <label className={css.form_label}>
              <Field placeholder="Возраст *" />
            </label>
            <label className={css.form_label}>
              <Field placeholder="Текущий вес *" />
            </label>
            <label className={css.form_label}>
              <Field placeholder="Желаемый вес *" />
            </label>
            <p className={css.form_subtitle}>Группа крови *</p>
            <div className={css.form_radio}>
              <Field id="first" type="radio" value="1" />
              <label htmlFor="first" className={css.form_radioLabel}>
                1
              </label>
              <Field id="second" type="radio" value="2" />
              <label htmlFor="second" className={css.form_radioLabel}>
                2
              </label>
              <Field id="third" type="radio" value="3" />
              <label htmlFor="third" className={css.form_radioLabel}>
                3
              </label>
              <Field id="fourth" type="radio" value="4" />
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
