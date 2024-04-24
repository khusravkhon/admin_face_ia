import { useRef, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import IconButton from '@mui/material/IconButton';

function CameraWrapper({ dataimg }) {
  const [is_active, setIs_active] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const videoWidth = 1000;
  const videoHeight = 500;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (!is_active) {
          toast.success('Доступ к камере разрешено !', { position: 'top-right' });
          setIs_active(true);
        }

        const video = document.createElement('video');
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          video.width = videoWidth;
          video.height = videoHeight;
          video.play();
          drawVideo(video, ctx, videoWidth, videoHeight);
        };
      })
      .catch((err) => {
        if (!is_active) {
          toast.error(`Доступ к камере не разрешен: ${err}`, { position: 'top-right' });
          setIs_active(true);
        }
      });

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  const drawVideo = (video, ctx, width, height) => {
    ctx.drawImage(video, 0, 0, width, height);
    requestAnimationFrame(() => drawVideo(video, ctx, width, height));
  };

  const snapPhoto = () => {
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL();
    dataimg(imageData);
  };
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <>
        <div className="relative">
          <canvas
            onClick={snapPhoto}
            ref={canvasRef}
            width={videoWidth}
            height={videoHeight}
            className="border rounded shadow-md"
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            onMouseMove={handleMouseMove}
          ></canvas>
          <IconButton size="large" onClick={snapPhoto} className="absolute bottom-0 mx-[450px]">
            <CameraAltIcon />
          </IconButton>
        </div>
        {isMouseOver && (
          <div style={{ position: 'absolute', top: mousePosition.y, left: mousePosition.x }}>
            <CameraAltIcon />
          </div>
        )}
    </>
  );
}

export default CameraWrapper;
