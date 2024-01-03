import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import axios from "axios";

const API_URL = "http://localhost:3000/api/coinList";

export default function Markets() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
        console.log("Veri yüklendi:", response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Opsiyonel: Belirli bir aralıkla veriyi tekrar yükle
    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, [data]); // Bağımlılık dizisi boş olduğundan, bu useEffect yalnızca bileşen monte edildiğinde çalışır

  return (
    <section className="mt-8">
      <h1 className="text-2xl mb-2">Markets</h1>
      {data ? <Coin response={data} /> : <p>Veri yükleniyor...</p>}
    </section>
  );
}
