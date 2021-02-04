import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";

import { CoinList } from "../components/CoinList/index";

const COINGECK_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

const getData = async url => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error(err);
    return {
      error: "invalid request"
    };
  }
};

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Prices</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ maxWidth: "1200px" }}>
        <header>
          <h1>Crypto Watcher</h1>
        </header>
        <CoinList crypto={data} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getData(COINGECK_URL);

  return {
    props: { data }
  };
}
