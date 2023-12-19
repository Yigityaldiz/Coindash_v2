import React from "react";
import { TrendingDown, TrendingUp } from "../icons/icons";
import {Link} from "react-router-dom"

export default function Coin({ response }) {
  return (
    
  
         
    
    <div className="rounded-lg p-4 ">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                #
              </th>
              <th scope="col" className="px-6 py-3 ">
                Coin Name
              </th>
              <th scope="col" className="px-6 py-3 ">
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
          <tbody className="" >
            { response && response.map( coin => 
               
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
 <td className="px-6 py-4 font-medium">{coin.market_cap_rank}</td>
 <th
   scope="row"
   className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-2"
 >  <Link to={`coin/${coin.id}`}>
   <img className="w-6" src={coin.image} />
   <p>{coin.name}</p>
   <small>({coin.symbol})</small>
   </Link>
 </th>

 <td className="px-6 py-4 font-bold">{coin.current_price}$</td>
 <td className="whitespace-nowrap px-6 py-4">
   <span
     className={`flex gap-1 ${
       coin.price_change_percentage_24h < 0
         ? "text-red-400"
         : "text-green-400"
     }`}
   >
     {coin.price_change_percentage_24h < 0 ? (
       <TrendingDown />
     ) : (
       <TrendingUp />
     )}
     {coin.price_change_percentage_24h}%
   </span>
 </td>
 <td>

   <span
     className={`flex gap-1 ${
       coin.price_change_percentage_30d_in_currency < 0
         ? "text-red-400"
         : "text-green-400"
     }`}
   >
     {coin.price_change_percentage_30d_in_currency < 0 ? (
       <TrendingDown />
     ) : (
       <TrendingUp />
     )}
     {coin.price_change_percentage_30d_in_currency}%
   </span>
   
 </td>
 <td>
       <p>{coin.market_cap}</p>
   </td>
</tr>  ) }
        
         
          </tbody>
        </table>
      </div>
    </div>
   
 
  
        
   
    
     
  );
}
