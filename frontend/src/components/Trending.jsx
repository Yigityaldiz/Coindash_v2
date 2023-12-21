import React from "react";
import useAxios from "../hooks/useAxios";
import CoinTrending from "./CoinTrending";

export default function Trending() {
  const { response } = useAxios("search/trending");
  console.log(response);
  return (
    <div className=" m-5 p-2 rounded-lg w-[40%] w-full text-sm text-left text-gray-500 dark:text-gray-400   dark:bg-gray-800    ">
      <h1 className="text-2xl mb-2">Trending</h1>
      <div className="grid grid-cols-1 gap-4  ">
        <div className="">
          {response &&
            response.coins.map((coin) => (
              <CoinTrending key={coin.item.coin_id} coin={coin.item} />
            ))}
        </div>
      </div>
    </div>
  );
}
