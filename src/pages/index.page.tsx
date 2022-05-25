import styles from "../../styles/Home.module.css";
import { useAppDispatch, useAppSelector } from "../hooks/redux/hooks";
const Home = () => {
  const dispatch = useAppDispatch();
  const { employees } = useAppSelector((state) => state.homeStore);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>{employees[0].id}</div>
      </main>
    </div>
  );
};

export default Home;
