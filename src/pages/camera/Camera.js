import CameraWrapper from './CameraWrapper';
import Box from '@mui/material/Box';
import DataOpenPhoto from './dataOpenPhoto';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import api from '../../data/faceRecognition/index';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { onDisabledButton } from '../../store/reducers/camera/index';

function Camera() {
  const [dataPeople, setDataPeople] = useState();
  const [isActiveLoading, setisActiveLoading] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [filestatus, setfilestatus ] = useState(true)
  const dispatch = useDispatch();

  const dataimg = (imageData) => {
    setfilestatus(false)
    setLoading(false);
    
    api
      .faceRecognition(imageData)
      .then((res) => {
        console.log(res);
        
        toast.success('Фото сделано!', { position: 'top-right' });
        setDataPeople(res.data);
        setisActiveLoading(true);
        setLoading(true);
      })
      .catch(() => {
        toast.error('Сделайте фото заново', { position: 'top-right' });
      })
      .finally(() => {
        setLoading(true);
        dispatch(onDisabledButton());
      });
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        { filestatus ? (
          <CameraWrapper dataimg={dataimg} />
        ) : ('') }
        {isLoading ? (
          isActiveLoading ? (
            <DataOpenPhoto dataPeople={dataPeople} />
          ) : (
            ''
          )
        ) : (
          <Box
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
          }}
          >
            <CircularProgress />
          </Box>
        )}
      </Box>
    </>
  );
}

export default Camera;
