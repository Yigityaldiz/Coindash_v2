import React from "react";
import useAxios from "../hooks/useAxios";
import CoinTrending from "./CoinTrending";

export default function Trending() {
  const { response } = useAxios("http://localhost:3000/api/trend");
  
  console.log( "Trend datasi" , response);
  return (
    <div className="  pl-5 pt-3 rounded-lg w-[40%] h-[px] w-full text-sm text-left text-gray-500 dark:text-gray-400   dark:bg-gray-800    ">
      <h1 className="text-2xl mb-2">Trending</h1>
      <div className="grid  gap-4 w-[40%]  ">
        <div className="">
          <div className="rounded-lg border-2 border-slate-600  " >
            <h1>Coins</h1>
          {response &&
            response.slice(0,5).map((coin) => (
              <CoinTrending   key={coin.coin_id} coin={coin} />
            ))}
          </div>
         
        </div>
      </div>
    </div>
  );
}
