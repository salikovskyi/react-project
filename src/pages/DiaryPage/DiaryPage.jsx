import styles from "./DiaryPage.module.css";
import FooterInfo from "../../components/FooterInfo";
import Dairy from "../../components/Diary";
import ContainerStyled from "../../components/_styled/Container.styled";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { rootClass } from "../../redux/userData/userDataSlice";

export default function Diary() {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(rootClass('SlimCalc'))},
  [])


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
