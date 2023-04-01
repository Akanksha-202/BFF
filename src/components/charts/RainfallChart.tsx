import ReactApexChart from 'react-apexcharts'
import {Typography, Box, Stack} from '@pankod/refine-mui';
import {RainfallSeries, RainfallOptions} from './chart.config';

const RainfallChart = () => {
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
      Rainfall  
    </Typography>  
    <ReactApexChart
      series={RainfallSeries}
      type="line"
      options={RainfallOptions}
    />
    </Box>
  )
}

export default RainfallChart