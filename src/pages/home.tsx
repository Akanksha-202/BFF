import {useList} from '@pankod/refine-core';
import {Typography, Box, Stack} from '@pankod/refine-mui';
import {
  HumidityChart,
  RainfallChart,
  TemperatureChart,
  Farmer,
} from 'components';

const home = () => {
  return (
    <Box>
      <Typography mr={1} fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>
      <Box mt="25px">
      <Stack spacing={4} direction={'row'}>
      <HumidityChart />
      <RainfallChart />
      </Stack>
      <Stack mt="25px" spacing={4} direction={'row'} sx={{ width: 1/2 }}>
      <TemperatureChart />
      </Stack>
      </Box>
    </Box>
  )
}

export default home