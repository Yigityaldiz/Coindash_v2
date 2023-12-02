import React from "react";
import useAxios from "../hooks/useAxios";
import Coin from "./Coin";

export default function Markets() {
  const { response } = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C30d&locale=en');
  
  return(
    <section className="mt-8">
        <h1 className="text-2xl mb-2" >Markets</h1>
        <div className=" ">
         
    
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
               {response && response.map(coin => <Coin key={coin.id} coin = {coin} />)}
               </tbody>
             </table>
           </div>
         </div>
        
       </div>
       

    </section>
  );
}
