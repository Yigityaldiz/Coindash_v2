import React from "react";
import useAxios from "../hooks/useAxios";
import CoinTrending from "./CoinTrending";
import NftTrending from "./NftTrending";

export default function Trending() {
  const { response : coinResponse } = useAxios("http://localhost:3000/api/trendCoin");
  const {response: nftResponse } = useAxios("http://localhost:3000/api/trendNft");
  

  return (
    <div className="  pl-5 pt-3 rounded-lg w-[20%] h-[px] w-full text-sm text-left text-gray-500 dark:text-gray-400 w-[85%] border-2    dark:bg-gray-800    ">
      <h1 className="text-2xl mb-2">Trending</h1>
      <div className="  gap-4 w-[40%] flex  ">
        <div className="">
          <div className="rounded-lg border-2 border-slate-600  " >
            <h1>Coins</h1>
          {coinResponse &&
            coinResponse.slice(0,5).map((coin) => (
              <CoinTrending   key={coin.coin_id} coin={coin} />
            ))}
          </div>
         
        </div>
         <div className="">
          <div className="rounded-lg border-2 border-slate-600  " >
            <h1>Coins</h1>
          {nftResponse &&
            nftResponse.slice(0,5).map((coin) => (
              <NftTrending   key={coin.coin_id} coin={coin} />
            ))}
          </div>
         
        </div>
      </div>
    </div>
  );
}
