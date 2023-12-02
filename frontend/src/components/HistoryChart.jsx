import React from 'react'
import useAxios from '../hooks/useAxios'
import { useParams } from 'react-router-dom'
import moment from 'moment'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

export default function HistoryChart() {
    const { id } = useParams(); 
    const { response } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=2`)
    console.log(response);
 
    if(!response){
        return <div>Loading...</div>
    }

    const coinCharData = response.prices.map(value => ({x:value[0] , y:value[1].toFixed(2)}))
    
    const options = {
        responsive: true
    }

    const data ={
        labels: coinCharData.map(value => moment(value.x).format('MMMM Do YYYY, h:mm:ss a') ) ,
        datasets: [
            {
                fill: true ,
                label: id,
                data: coinCharData.map(value => value.y),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            }
        ]
    }

  return (
    <div className=' flex  w-[80%] ' >
        <Line className='' options={options} data={data} />
    </div>
  )
}
