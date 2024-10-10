import styles from "./Header.module.css";
import logo from "../../assets/CassiDEV.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} />
    </div>
  );
};

export default Header;
