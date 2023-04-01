import {useList} from '@pankod/refine-core';
import {Typography, Box, Stack, TextField,Button} from '@pankod/refine-mui';
import Alan from '../components/common/Alan'

export default function ValidationTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '70ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant = "outlined"
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant = "outlined"

        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant = "outlined"

        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant = "outlined"

        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant = "outlined"

        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant = "outlined"
 
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained">Submit Data</Button>
      </div>
    </Box>
  );
}
