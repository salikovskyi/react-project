import styles from "./Diary.module.css";
import FooterInfo from "../../components/FooterInfo";
// import Egor from "../../components/Egor";
import ContainerStyled from "../../components/_styled/Container.styled";
export default function Diary() {
  return (
    <div className={styles.bg}>
      <ContainerStyled>
        <div className={styles.position}>
          {/* <Egor /> */}
          <FooterInfo />
        </div>
      </ContainerStyled>
    </div>
  );
}
