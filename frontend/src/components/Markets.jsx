import React, { useEffect, useCallback } from "react";
import Coin from "./Coin";
import useAxios from "../hooks/useAxios";

const API_URL =
  "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C30d&locale=en";

export default function Markets() {
  const { response } = useAxios(API_URL);

  return (
    <section className="mt-8">
      <h1 className="text-2xl mb-2">Markets</h1>

      {response && <Coin response={response} />}
    </section>
  );
}
