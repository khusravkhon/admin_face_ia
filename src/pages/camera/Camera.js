import CameraWrapper from './CameraWrapper';
import Header from '../../layout/header/index';
import DataOpenPhoto from './dataOpenPhoto';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {activeLoading} from '../../store/reducers/menu'


function Camera() {
  const [dataPeople, setDataPeople] = useState([])
  
  const dispatch = useDispatch()
  
  const dataimg = (imageData) => {
    setTimeout(() => {
      dispatch(activeLoading())
      setDataPeople([{name: 'Khusrav'}])
      console.log(imageData);
    }, 3000, dispatch(activeLoading()))
};
  return (
    <>
      <Header />
      <div className="flex justify-around">
        <div className='mt-[100px]'>
          <CameraWrapper dataimg={dataimg} />
        </div>
        <div className='mr-[100px] mt-[90px] border rounded shadow-md w-[400px]'>
          <DataOpenPhoto dataPeople={dataPeople}/>
        </div>
      </div>
    </>
  );
}

export default Camera;
