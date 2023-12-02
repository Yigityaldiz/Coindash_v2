import React from 'react'
import HistoryChart from '../components/HistoryChart'
import Detail from '../components/Detail'

export default function CoinDetails() {
  return (
    <div className='flex items-center justify-center h-screen w-screen ' >
      <HistoryChart />
      <Detail/>
    </div>
  )
}
