import React from "react";
import { Link } from "react-router-dom";
import { TrendingDown, TrendingUp } from "../icons/icons";

export default function CoinTrending({ coin }) {
  console.log(coin);
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="font-light mb-2 p-2 border-gray-200 border-2 rounded hover:bg-gray-200 w-[50%]  ">
        <div className="flex items-center gap-1">
          <span>{coin.score + 1}.</span>
          <img src={coin.small} alt="{coin.name}" />
          <p>{coin.name}</p>
          <small>({coin.symbol})</small>
          <p>{coin.data.price}</p>
          <p
            className={` flex items-center ${
              coin.data.price_change_percentage_24h.usd < 0
                ? "text-red-400"
                : "text-green-400"
            }`}
          >
            {coin.data.price_change_percentage_24h.usd < 0 ? (
              <TrendingDown />
            ) : (
              <TrendingUp />
            )}
            {coin.data.price_change_percentage_24h.usd}
          </p>
        </div>
      </div>
    </Link>
  );
}
