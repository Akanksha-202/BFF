import { ApexOptions } from 'apexcharts';

export const HumiditySeries = [
  {
    name: 'Humidity Today (%)',
    data: [30, 50, 33, 43, 30, 31],
  },
];
export const TemperatureSeries = [
  {
    name: 'Temperature Today (Celsius)',
    data: [20, 23, 25, 26, 21, 24],
  },
];
export const RainfallSeries = [
  {
    name: 'Rainfall Today (mm)',
    data: [40, 50, 60, 30, 30, 31],
  },
];

export const HumidityOptions: ApexOptions = {
  chart: {
    type: 'line',
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  fill: {
    type: 'gradient'
  },
  colors: ['#E91E63']
};
export const RainfallOptions: ApexOptions = {
  chart: {
    type: 'line',
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  fill: {
    type: 'gradient'
  },
  colors: ['#546E7A']
};
export const TemperatureOptions: ApexOptions = {
  chart: {
    type: 'line',
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  fill: {
    type: 'gradient'
  },
  colors: ['#2E93fA']
};