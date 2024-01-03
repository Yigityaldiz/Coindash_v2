import React from "react";
import { TrendingDown, TrendingUp } from "../icons/icons";
import { Link } from "react-router-dom";
import { currencyFormat } from "../../utils";

export default function Coin({ response }) {
  return (
    <div className="rounded-lg p-4 ml-6 w-[90%]">
      <table className="text-xs text-left text-gray-500 dark:text-gray-400 w-full">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Coin
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              24h Change
            </th>
            <th scope="col" className="px-6 py-3">
              30d Change
            </th>
            <th scope="col" className="px-6 py-3">
              Market Cap
            </th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.slice(0, 200).map((coin) => (
              <tr
                key={coin.marketCapRank}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 h-[10px]"
              >
                <td className="px-6 py-4">{coin.marketCapRank}</td>
                <th
                  scope="row"
                  className="px-6 py-2 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Link className="flex items-center gap-2" to={`coin/${coin.id}`}>
                    <img className="w-6" src={coin.image} alt={coin.name} />
                    <div>
                      <p className="text-xs">{coin.name}</p>
                      <small>({coin.symbol})</small>
                    </div>
                  </Link>
                </th>

                <td className="px-6 py-4 text-sm">${currencyFormat(coin.currentPrice)}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`flex gap-1 text-xs ${
                      coin.priceChangePercentage24h < 0 ? "text-red-400" : "text-green-400"
                    }`}
                  >
                    {coin.priceChangePercentage24h < 0 ? <TrendingDown /> : <TrendingUp />}
                    {coin.priceChangePercentage24h}%
                  </span>
                </td>
                <td>
                  <span
                    className={`flex gap-1 text-xs ${
                      coin.priceChangePercentage30dInCurrency < 0
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {coin.priceChangePercentage30dInCurrency < 0 ? (
                      <TrendingDown />
                    ) : (
                      <TrendingUp />
                    )}
                    {currencyFormat(coin.priceChangePercentage30dInCurrency)}%
                  </span>
                </td>
                <td>
                  <p>${currencyFormat(coin.marketCap)}</p>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
