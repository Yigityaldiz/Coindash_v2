import React from "react";
import { Link } from "react-router-dom";
import { TrendingDown, TrendingUp } from "../icons/icons";
import { currencyFormat } from "../../utils";

export default function Coin({ coin }) {
  return (
    <Link to={`coin/${coin.id}`} className="block">
      <div className="font-sans m-1 p-2 rounded hover:bg-gray-700  items-center  bg-gray-800 shadow-lg text-white gap-10">
        <div className="flex items-center gap-3 ">
          <img className="w-6 h-6" src={coin.thumb} alt={coin.name} />
          <div>
            <span className="text-base font-medium hidden md:inline-block ">{coin.name}</span>
            <span className="text-sm block md:hidden">({coin.symbol})</span>
          </div>
        </div>
        <div className="text-left">
          <p className="text-lg font-semibold">{coin.data.floorPrice}</p>
          <p className={`text-sm flex items-center ${coin.data.floorPriceInUsd24hPercentageChange < 0 ? "text-red-400" : "text-green-400"}`}>
            {coin.data.floorPriceInUsd24hPercentageChange < 0 ? <TrendingDown /> : <TrendingUp />}
            <span className="ml-1">{currencyFormat(coin.data.floorPriceInUsd24hPercentageChange)}%</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
