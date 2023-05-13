import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
}
 from 'chart.js';
import { Bar} from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
  },
};

const labels = ['Direct', 'Dribble'],
      labelsTwo = ['Linkedin', 'Others'],
      labelsThree = ['Linkedin', 'Dribble', 'Timeweb', 'Timeweb'];
export const data1 = {
    data: [5, 2, 3],
}
export const data = {
  labels,
  datasets: [
    {
      label: '1',
      data: [3, 7, 4],
      backgroundColor: '#FC2B93',
    },
    {
      label: '2',
      data: [8, 6, 3],
      backgroundColor: '#51459E',
    },
    {
        label: '3',
        data: [4, 3, 6],
        backgroundColor: '#84E8F4',
    },
  ],
};

export const dataTwo = {
    labels: labelsTwo,
    datasets: [
        {
            label: '4',
            data: [2, 1, 4],
            backgroundColor: '#FC2B93',
          },
          {
            label: '5',
            data: [7, 5, 7],
            backgroundColor: '#51459E',
          },
          {
              label: '6',
              data: [4, 2, 3],
              backgroundColor: '#84E8F4',
          },
    ]
}

export const dataThree = {
  labels: labelsThree,
  datasets: [
  {
    label: 'Linkedin',
    data: [10, 17, 39, 47],
    backgroundColor: '#FC2B93',
    borderColor: '#000',
    borderWidth: '5px',
  }
  ]
}

export function Chart() {
  return <Bar options={options} data={data} className='max-w-[350px] max-h-[150px] text-lg'/>;
}

export function ChartTwo() {
    return <Bar options={options} data={dataTwo} className='max-w-[350px] max-h-[150px] text-lg'/>
}

export function ChartThree(){
  return <Bar options={options} data={dataThree} className='max-w-[500px] max-h-[150px] text-lg text-white'/>
}