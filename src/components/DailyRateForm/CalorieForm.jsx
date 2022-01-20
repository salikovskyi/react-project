import css from "./CalorieForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
imprt 

export default function CalorieForm() {
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
          
        </Form>
      </Formik>
    </div>
  );
}
