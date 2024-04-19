import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useRef,
  useEffect,
  useState
} from 'react';
import DataOpenPhoto from './dataOpenPhoto';
import Header from '../../layout/header/index';

function CameraWrapper() {
  const [is_active, setIs_active] = useState(false)
  const videoRef = useRef(null);
  // const canvasRef = useRef(null);
  // const [photoData, setPhotoData] = useState < string > '';

  useEffect(() => {
    const video = videoRef.current;


    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if(!is_active) {
          toast.success('Доступ к камере разрешено !', { position: 'top-right' });
          setIs_active(true)
        }
        video.srcObject = stream;
      })
      .catch(() => {
        if(!is_active) {
          toast.error('Доступ к камере не разрешено !', {position: 'top-right'});
          setIs_active(true)
        }
      });

    return () => {
      video.srcObject?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const snapPhoto = () => {
    // const video = videoRef.current;
    // const canvas: any = canvasRef.current;
    // const ctx = canvas.getContext("2d");
    // ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    // const imageData = canvas.toDataURL();
    // setPhotoData(imageData);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center mt-[5%]">
        <div>
          <video className="w-full h-[400px] border rounded" autoPlay ref={videoRef}>
            <track kind="captions"/>
          </video>
          <div className="photo-button ">
            <button onClick={snapPhoto}>
              <div className="circle"></div>
              <div className="ring"></div>
            </button>
          </div>
        </div>
        <div className="flex justify-center ml-[16px] min-w-[300px]">
          <DataOpenPhoto
          // photoData={photoData}
          ></DataOpenPhoto>
          {/* <canvas
            className="w-full max-w-48 h-full max-h-48 rounded-full"
            ref={canvasRef}
          ></canvas> */}
        </div>
      </div>
      <ToastContainer 
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      limit={1}
      />;
    </>
  );
}

export default CameraWrapper;
