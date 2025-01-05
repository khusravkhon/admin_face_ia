import React, { useRef, 
  useState 
} from 'react';

const CameraWrapper = () => {
  const videoRef = useRef(null);
  const [statusStartCamera, setstatusStartCamera ] = useState(true)

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setstatusStartCamera(false)
      }
    } catch (error) {
      console.error('Ошибка доступа к камере:', error);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <track kind="captions" src="" />
      </video>
        { statusStartCamera ? (
          <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '10px',
          }}
          >
          <button onClick={startCamera} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Запустить камеру
        </button>
          </div>
        ) : (
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '10px',
            }}
          >
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Сфотографировать
        </button>
      </div>
        ) }
    </div>
  );
};

export default CameraWrapper;





// import { useRef, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import IconButton from '@mui/material/IconButton';
// import { useSelector, useDispatch } from 'react-redux';
// import { disabledButton } from '../../store/reducers/camera/index';

// function CameraWrapper({ dataimg }) {
//   const { is_active } = useSelector((store) => store.camera);
//   const canvasRef = useRef(null);
//   const videoWidth = 1000;
//   const videoHeight = 500;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then((stream) => {
//         toast.success('Доступ к камере разрешено !', { position: 'top-right' });
//         const video = document.createElement('video');
//         video.srcObject = stream;
//         video.onloadedmetadata = () => {
//           video.width = videoWidth;
//           video.height = videoHeight;
//           video.play();
//           drawVideo(video, ctx, videoWidth, videoHeight);
//         };
//       })
//       .catch((err) => {
//         toast.error(`Доступ к камере не разрешен: ${err}`, { position: 'top-right' });
//       });

//     return () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//     };
//   }, []);

//   const drawVideo = (video, ctx, width, height) => {
//     ctx.drawImage(video, 0, 0, width, height);
//     requestAnimationFrame(() => drawVideo(video, ctx, width, height));
//   };

//   const snapPhoto = () => {
//     const canvas = canvasRef.current;
//     dispatch(disabledButton());

//     // canvas.toBlob((blob) => {
//     //   const img = new Image();
//     //   img.src = URL.createObjectURL(blob);
//     //   dataimg(img);
//     // }, 'image/jpeg');

//     const imageData = canvas.toDataURL('image/jpeg');
//     console.log(imageData);
//     dataimg(imageData);
//   };

//   return (
//     <>
//       <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginRight: '3%', marginLeft: '3%' }}>
//         <canvas ref={canvasRef} width={videoWidth} height={videoHeight} className="borderCamera"></canvas>
//         <IconButton disabled={is_active} size="large" onClick={snapPhoto} style={{ position: 'absolute', bottom: '0' }}>
//           <CameraAltIcon />
//         </IconButton>
//       </div>
//     </>
//   );
// }

// export default CameraWrapper;
