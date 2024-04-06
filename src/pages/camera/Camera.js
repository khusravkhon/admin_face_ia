import { useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../camera/style.css';

const Login = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        toast.success('Доступ к камере разрешено !', { position: 'top-right' });
      })
      .catch(() => {
        toast.success('Доступ к камере не разрешено !', { position: 'top-right' });
      });

    return () => {
      video.srcObject?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const snapPhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      <div className="camera  flex justify-between ">
        <div className="static">
          <div>
            <video id="video" width="809" height="650" autoPlay ref={videoRef}>
              <track kind="captions" />
            </video>
          </div>
          <div className="photo-button">
            <button onClick={snapPhoto}>
              <div className="circle"></div>
              <div className="ring"></div>
            </button>
          </div>
        </div>
        <div>
          <canvas id="canvas" width="340" height="280" ref={canvasRef}></canvas>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
