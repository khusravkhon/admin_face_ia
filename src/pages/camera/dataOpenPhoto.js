import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

function DataOpenPhoto(props) {

  const is_activeLoading = useSelector(state => state.menu.is_activeLoading)

  return (
    is_activeLoading === true ? (
      <Box 
    sx={{
      display: 'flex',
      justifyContent: 'center',
      p: 1,
      mt: 30,
      bgcolor: 'background.paper',
      borderRadius: 1,
    }}
    >
      <CircularProgress/>
    </Box>
    ):
    props.dataPeople.length > 0 ? (
      props.dataPeople.map((el, i) => (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
          key={i}
        >
        <Stack spacing={1}>
            <Avatar alt="Remy Sharp" src={require('../../assets/photo/frontend.png')} sx={{ width: 150, height: 150 }}/>
              <TextField
                id="standard-multiline-flexible"
                label="ФИО"
                multiline
                maxRows={4}
                variant="standard"
              />
        </Stack>
        </Box>
      ))
    ): 
    <Box 
    sx={{
      display: 'flex',
      justifyContent: 'center',
      p: 1,
      mt: 30,
      bgcolor: 'background.paper',
      borderRadius: 1,
    }}
    >
      <Typography variant="h4" gutterBottom >Нет данных</Typography>
    </Box>
  );
}

export default DataOpenPhoto;
