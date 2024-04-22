import CameraWrapper from './CameraWrapper';
import Header from '../../layout/header/index';
import DataOpenPhoto from './dataOpenPhoto';
function Camera() {
  const dataimg = (imageData) => {
    console.log(imageData, 'Khusrav');
  };
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <CameraWrapper dataimg={dataimg} />
        <DataOpenPhoto />
      </div>
    </>
  );
}

export default Camera;
