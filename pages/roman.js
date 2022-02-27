import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import romanConverter from "../controllers/roman";

export default function Roman() {
  function decimalToRoman(event) {
    const decimal = parseInt(event.target.value, 10);

    setResult(romanConverter(decimal));
  }

  const [result, setResult] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Roman numbers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Roman numbers converter</h1>

        <div>
          <span>
            Decimal number:{" "}
            <input type="number" onChange={decimalToRoman}></input>
          </span>
          <span>Result: {result}</span>
        </div>
      </main>
    </div>
  );
}
