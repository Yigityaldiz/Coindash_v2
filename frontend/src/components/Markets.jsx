import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import axios from "axios";

const API_URL = "http://www.coindash.com.tr/api/coinList";

export default function Markets() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Opsiyonel: Belirli bir aralıkla veriyi tekrar yükle
    const intervalId = setInterval(fetchData, 20000);

    return () => clearInterval(intervalId);
  }, []); // Bağımlılık dizisi boş olduğundan, bu useEffect yalnızca bileşen monte edildiğinde çalışır

  return (
    <section className="mt-8">
      <h1 className="text-2xl mb-2">Markets</h1>
      {data ? <Coin response={data} /> : <p>Veri yükleniyor...</p>}
    </section>
  );
}
