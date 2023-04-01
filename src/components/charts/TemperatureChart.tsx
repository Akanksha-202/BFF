import ReactApexChart from 'react-apexcharts'
import {Typography, Box, Stack} from '@pankod/refine-mui';
import {TemperatureSeries, TemperatureOptions} from './chart.config';

const TemperatureChart = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
    <Typography fontSize={18} fontWeight={600} color="#11142d">
    Temperature 
    </Typography>  
    <ReactApexChart
      series={TemperatureSeries}
      type="line"
      options={TemperatureOptions}
    />
    </Box>
  )
}

export default TemperatureChart