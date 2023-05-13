import React from 'react'
import { Chart } from './Chart'
import { ChartTwo } from './Chart'

export const ThreeChartOne = () => {
  return (
    <div className='flex mt-4 m-auto'>
        <Chart />
        <ChartTwo />
    </div>
  )
}
