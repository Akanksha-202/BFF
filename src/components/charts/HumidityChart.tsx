import ReactApexChart from 'react-apexcharts'
import {Typography, Box, Stack} from '@pankod/refine-mui';
import {HumiditySeries, HumidityOptions} from './chart.config';

const HumidityChart = () => {
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
      Humidity  
    </Typography>  
    <ReactApexChart
      series={HumiditySeries}
      type="line"
      options={HumidityOptions}
    />
    </Box>
  )
}

export default HumidityChart