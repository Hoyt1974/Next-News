import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Toolbar } from "../components/toolbar";

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>Possibly, It Maybe News</h1>

        <h3>
          Your one place for the latest news, fake news,
          <br /> and all the BS you need to avoid human contact!
        </h3>
      </div>
    </div>
  );
}
