// import api from 'data/axios';

export default {
  faceRecognition(image) {
    console.log(image);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            id: 1,
            Name: 'Хусрав',
            Last: 'Носири',
            Birthday: '12.04.2003',
            Img: 'https://euivpnoenvquaiivtwfq.supabase.co/storage/v1/object/public/avatar/IMG_20240814_105455.jpg'
          }
        });

        reject(new Error('Ошибка распознавания лица'));
      }, 1000);
    })
    // const formData = new FormData();
    // formData.append('imageString', image);
    // return api.post(`FaceRecognition/Recognize`, formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // });
  }
};
