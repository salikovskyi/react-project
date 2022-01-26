import styles from "./DiaryPage.module.css";
import FooterInfo from "../../components/FooterInfo";
import Dairy from "../../components/Diary";
import ContainerStyled from "../../components/_styled/Container.styled";

export default function Diary() {
  return (
    <div className={styles.bg}>
      <ContainerStyled>
        <div className={styles.position}>
          <Dairy />
          <FooterInfo />
        </div>
      </ContainerStyled>
    </div>
  );
}
