import React from "react";
import styles from "./Coin.module.css";

import { numberWithCommas } from "../../utils/numberFormatter";

export const Coin = ({ coin }) => {
  return (
    <div key={coin.id} className={styles.coin}>
      <header className={styles.flex}>
        <img src={coin.image} />
        <h2>{coin.name}</h2>
        <div>[{coin.symbol}]</div>
      </header>
      <div>
        <p>Price: ${numberWithCommas(coin.current_price.toFixed(2))}</p>
        <p>Market Cap: {numberWithCommas(coin.market_cap)}</p>
      </div>
    </div>
  );
};
