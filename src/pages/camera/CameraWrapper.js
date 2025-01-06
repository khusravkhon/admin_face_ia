import React, { useRef, useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FaceIcon from '@mui/icons-material/Face';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const CameraWrapper = ({dataimg}) => {
  const canvasRef = useRef(null)
  const videoRef = useRef(null);
  const [statusStartCamera, setStatusStartCamera] = useState(true);
  const [facingMode, setFacingMode] = useState('environment');
  const [photoPreview, setPhotoPreview] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode,
          width: { ideal: 1920 },
          height: { ideal: 1080 },
          frameRate: { ideal: 30 },
        } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setStatusStartCamera(false);
      }
    } catch (error) {
      console.error('Ошибка доступа к камере:', error);
    }
  };

  const toggleCamera = () => {
    setFacingMode((prevMode) => (prevMode === 'environment' ? 'user' : 'environment'));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setPhotoPreview(e.target.result);
      reader.readAsDataURL(file);
      dataimg(file)
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], `photo_${Date.now()}.jpg`, { type: 'image/jpeg' });
          dataimg(file);
        }
      }, 'image/jpeg', 1.0);
    }
  };

  useEffect(() => {
    if (!statusStartCamera) {
      startCamera();
      return () => {
        if (videoRef.current && videoRef.current.srcObject instanceof MediaStream) {
          const stream = videoRef.current.srcObject;
          const tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      };
    }
  }, [facingMode]);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {photoPreview ? (
        <img
          src={photoPreview}
          alt="Предпросмотр фото"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
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
      )}

      {statusStartCamera ? (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
          }}
        >
          <Stack  spacing={2} direction="row">
          <div>
          <Button variant="contained" onClick={startCamera} style={{ padding: '10px 20px', fontSize: '16px' }}>
            <CameraAltIcon/>
          </Button>
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              capture="camera"
              id="cameraInput"
              style={{ display: 'none' }}
              onChange={handleFileChange}
              />
            <Button
            variant="contained"
              onClick={() => document.getElementById('cameraInput').click()}
              style={{ padding: '10px 20px', fontSize: '16px' }}
              >
              <AttachFileIcon/>
            </Button>
          </div>
          </Stack>
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
          <canvas
            ref={canvasRef}
            style={{ display: 'none' }}
          ></canvas>
          <Button  variant="contained" onClick={takePhoto} size="large" style={{ padding: '10px 20px', fontSize: '16px' }}>
            <FaceIcon/>
          </Button>
          <Button  variant="contained" size="large" onClick={toggleCamera} style={{ padding: '10px 20px', fontSize: '16px' }}>
            <AutorenewIcon/>
          </Button>
        </div>
      )} 
    </div>
  );
};

export default CameraWrapper;
