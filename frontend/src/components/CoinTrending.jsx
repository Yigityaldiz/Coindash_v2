import React from "react";

export default function CoinTrending({ coin }) {
  console.log(coin);
  return (
    <div className="font-light mb-2 p-2 border-gray-200 border-2 rounded hover:bg-gray-200 w-[80%] " >
        <div className="flex items-center gap-1" >
            <span>{coin.score+1}.</span>
            <img src={coin.small} alt="{coin.name}" />
            <p>{coin.name}</p>
            <small>({coin.symbol})</small>

        </div>
    </div>
  );
}
