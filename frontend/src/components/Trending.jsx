import React from "react";
import useAxios from "../hooks/useAxios";
import CoinTrending from "./CoinTrending";
import NftTrending from "./NftTrending";

export default function Trending() {

  const { response } = useAxios("http://www.coindash.com.tr/api/trend");
  const { response : coinResponse } = useAxios("http://localhost:3000/api/trendCoin");
  const {response: nftResponse } = useAxios("http://localhost:3000/api/trendNft");

  

  return (
    <div className="  pl-5 pt-3 rounded-lg w-[20%] h-[px] w-full text-sm text-left text-gray-500 dark:text-gray-400 w-[85%]     dark:bg-gray-800    ">
      <h1 className="text-2xl mb-2">Trending</h1>
      <div className="  gap-4 w-[40%] flex  ">
        <div className="">
          <div className="rounded-lg border-2 border-slate-600 p-5  " >
            <h1>Coin</h1>
          {coinResponse &&
            coinResponse.slice(0,3).map((coin) => (
              <CoinTrending   key={coin.coin_id} coin={coin} />
            ))}
          </div>
         
        </div>
         <div className="">
          <div className="rounded-lg border-2 border-slate-600 p-5  " >
            <h1>NFT's</h1>
          {nftResponse &&
            nftResponse.slice(0,3).map((coin) => (
              <NftTrending   key={coin.coin_id} coin={coin} />
            ))}
          </div>
         
        </div>
      </div>
    </div>
  );
}
