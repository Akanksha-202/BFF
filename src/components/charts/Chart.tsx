import ReactApexChart from 'react-apexcharts'
import {Typography, Box, Stack} from '@pankod/refine-mui';
import {HumiditySeries, HumidityOptions} from './chart.config';

const Chart = () => {
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
      Today's weather conditions  
    </Typography>  
    <ReactApexChart
      series={HumiditySeries}
      type="line"
      options={HumidityOptions}
    />
    </Box>
  )
}

export default Chart