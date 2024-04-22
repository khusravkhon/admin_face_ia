import CameraWrapper from './CameraWrapper';
import Header from '../../layout/header/index';
import DataOpenPhoto from './dataOpenPhoto';
import { useState } from 'react';
function Camera() {
  const [dataPeople, setDataPeople] = useState([])
  const dataimg = (imageData) => {
    setDataPeople(imageData)
  };
  return (
    <>
      <Header />
      <div className="flex justify-center mr-[16px]">
        <div className='mt-[161.44px]'>
          <CameraWrapper dataimg={dataimg} />
        </div>
        <div className='ml-[16px] mt-[143.5px]'>
          <DataOpenPhoto dataPeople={dataPeople}/>
        </div>
      </div>
    </>
  );
}

export default Camera;
