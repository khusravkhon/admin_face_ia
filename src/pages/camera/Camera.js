import CameraWrapper from './CameraWrapper';
import Logo from '../../components/Logo/index';
import Box from '@mui/material/Box';
import DataOpenPhoto from './dataOpenPhoto';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { activeLoading } from '../../store/reducers/menu';

function Camera() {
  const [dataPeople, setDataPeople] = useState([]);

  // const dispatch = useDispatch();

  const dataimg = (imageData) => {
    setTimeout(
      () => {
        // dispatch(activeLoading());
        setDataPeople([{ name: 'Khusrav' }]);
        console.log(imageData);
      },
      3000
      // dispatch(activeLoading())
    );
  };
  return (
    <>
      <Logo />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <CameraWrapper dataimg={dataimg} />
        <div className="border rounded shadow-md">
          <DataOpenPhoto dataPeople={dataPeople} />
        </div>
      </Box>
      {/* <div className="flex justify-around">
        <div className="mt-[100px]"> */}
      {/* </div> */}
      {/* <div className='mr-[100px] mt-[90px] border rounded shadow-md w-[400px]'>
        </div> */}
      {/* </div> */}
    </>
  );
}

export default Camera;
