import React from 'react'
import useAxios from '../hooks/useAxios'
import { useParams } from 'react-router-dom'

export default function HistoryChart() {
    const { id } = useParams(); 
    const { response } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=2`)
    console.log(response);
 
    if(!response){
        return <div>Loading...</div>
    }

    const coinCharData = response.prices.map(value => ({x:value[0] , y:value[1].toFixed(2)}))
    console.log(coinCharData)
  return (
    <div>HistoryChart</div>
  )
}
