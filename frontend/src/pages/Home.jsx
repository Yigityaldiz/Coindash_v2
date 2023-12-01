
import React, { useState, useEffect } from "react";
import axios from "axios";
import Trending from "../components/Trending";

export default function Home() {
    const [kriptoBirimler, setKriptoBirimler] = useState([
        { symbol: "BTCUSDT", fiyat: null, guncellemeZamani: null },
        { symbol: "ETHUSDT", fiyat: null, guncellemeZamani: null },
        { symbol: "BNBUSDT", fiyat: null, guncellemeZamani: null },
        { symbol: "AVAXUSDT", fiyat: null, guncellemeZamani: null },
        { symbol: "MINAUSDT", fiyat: null, guncellemeZamani: null },
        { symbol: "TRBUSDT", fiyat: null, guncellemeZamani: null },
      ]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const promises = kriptoBirimler.map(async (birim) => {
              const response = await axios.get(
                `https://api.binance.com/api/v3/ticker/price?symbol=${birim.symbol}`
              );
    
              const updatedBirim = {
                ...birim,
                fiyat: response.data.price,
                guncellemeZamani: new Date().toLocaleTimeString(),
              };
    
              return updatedBirim;
            });
    
            const updatedData = await Promise.all(promises);
            setKriptoBirimler(updatedData);
          } catch (error) {
            console.error("Binance API hatası:", error);
          }
        };
    
        fetchData();
    
        // Belirli aralıklarla güncelleme için bir zamanlayıcı ekle (örneğin, her 5 saniyede bir)
        // const intervalId = setInterval(() => {
        //   fetchData();
        // }, 10000);
    
        // Component unmount olduğunda zamanlayıcıyı temizle
        return () => clearInterval(intervalId);
      }, []); // Boş bağımlılık dizisi sadece componentDidMount benzeri bir davranış elde etmek için
    
      return (
        <>
        <Trending/>
        <div className=" ">
         
    
          <div className="rounded-lg p-4 ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Coin Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last Update
                    </th>
                    <th scope="col" className="px-6 py-3">
                      1m Change
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {kriptoBirimler.map((birim, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4 font-medium">1</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {birim.symbol}
                      </th>
    
                      <td className="px-6 py-4 font-bold">
                        {" "}
                        <span style={{ color: birim.fiyat > 0 ? "white" : "red" }}>
                          {parseFloat(birim.fiyat).toFixed(2) || "Yükleniyor..."}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {birim.guncellemeZamani}
                      </td>
                      <td>
                        {" "}
                        <span >
                          
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
         
        </div>
        </>
      );
    };
    

