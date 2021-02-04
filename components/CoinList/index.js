import React from "react";
import { Coin } from "../Coin/index";
import styles from "./CoinList.module.css";

export const CoinList = ({ crypto }) => {
  return (
    <section className={styles.coin_container}>
      {crypto.map(({ id, image, name, symbol, market_cap, current_price }) => {
        const coinProps = {
          id,
          image,
          name,
          symbol,
          market_cap,
          current_price
        };
        return <Coin key={id} coin={coinProps} />;
      })}
    </section>
  );
};
