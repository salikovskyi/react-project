import css from "./Loader.module.css";
import TailSpin from "react-loader-spinner";

export default function Loader() {
  return (
    <TailSpin color="#00BFFF" height={80} width={80} className={css.loader} />
  );
}
