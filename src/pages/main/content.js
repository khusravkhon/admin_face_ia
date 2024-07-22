import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

import create from '../../assets/image/create.png';
import edit from '../../assets/image/edit.png';
import table from '../../assets/image/table.png';
import auth from '../../assets/image/auth.png';
import faceRecognition from '../../assets/image/Face-Recognition.png';
import NOfaceRecognition from '../../assets/image/NoFace-Recognition.png';

import speed from '../../assets/primaries/speed.png';
// import Integration from '../../assets/primaries/Integration.png';
import emotions from '../../assets/primaries/emotions.png';

const CustomDots = (props) => {
  const { onClick, active } = props;
  return (
    <button
      className={active ? 'dot active' : 'dot'}
      onClick={onClick}
      style={{
        background: active ? 'grey' : 'grey',
        border: 'none',
        borderRadius: '100%',
        height: '10px',
        width: '10px',
        margin: '0 5px',
        cursor: 'pointer'
      }}
    ></button>
  );
};

function Content({ projectRef, eyeRef, demonstrationRef, advantagesRef }) {
  4;
  const navigate = useNavigate();
  const [project, setProject] = useState([]);
  const [image, setImage] = useState([]);
  const [primaries, setPrimaries] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <CustomDots key={i} onClick={() => {}} active={i === 0} />
  };

  function routerCamera() {
    navigate('/camera');
  }

  useEffect(() => {
    setPrimaries([
      {
        icon: speed,
        pragrov: 'Удобство и скорость',
        info: 'Быстрое и точное распознавание лиц.'
      },
      // {
      //   icon: Integration,
      //   pragrov: 'Интеграция',
      //   info: 'Возможность интеграции с системами контроля доступа.'
      // },
      {
        icon: emotions,
        pragrov: 'Анализ эмоций',
        info: 'Определение эмоций пользователя на основе его выражения лица.'
      }
    ]);
    setImage([
      {
        url: create
      },
      {
        url: edit
      },
      {
        url: table
      },
      {
        url: auth
      },
      {
        url: faceRecognition
      },
      {
        url: NOfaceRecognition
      }
    ]);
    setProject([
      {
        url: 'https://avatars.githubusercontent.com/u/70323782?s=48&v=4',
        text: 'Face-Recognition',
        info: 'Проект использует веб-камеру для записи посещаемости в реальном времени в Excel.',
        project: 'https://github.com/murtazahassan/Face-Recognition'
      },
      {
        url: 'https://github.com/mesutpiskin/facial-recognition-service/raw/master/app/resources/logo.png',
        text: 'Face-Recognition',
        info: 'ИИ извлекает и идентифицирует лица с изображений.',
        project: 'https://github.com/serhanelmacioglu/Face-Recognition_Coding-with-Python'
      },
      {
        url: 'https://avatars.githubusercontent.com/u/3519662?s=48&v=4',
        text: 'Face Recognition API Service',
        info: 'Это API-сервис распознавания лиц на основе глубокого обучения.',
        project: 'https://github.com/mesutpiskin/facial-recognition-service'
      },
      {
        url: 'https://raw.githubusercontent.com/serengil/deepface/master/icon/deepface-icon-labeled.png',
        text: 'deepface',
        info: 'DeepFace - инструмент распознавания лиц на базе глубокого обучения.',
        project: 'https://github.com/serengil/deepface'
      }
    ]);
  }, []);
  return (
    <div className="bg-white">
      <div ref={projectRef} className="pb-[40px]">
        <div className="text-center font-sans text-[#212529] text-[64px] font-normal">
          Веб-приложение для распознавания <br /> лиц
        </div>
        <div className="text-center mt-[24.59px] text-[28px] font-medium text-[#212529]">
          Проект — это инновационное веб-приложение <br /> для распознавания лиц и эмоций с помощью камеры.
        </div>
        <div className="text-center text-[#212529] text-[20px] mt-[48px] font-normal mx-[400px]">
          Незаменимое веб-приложение для автоматизированного распознавания лиц и эмоций. Наше приложение упрощает процесс идентификации и
          систематизации лиц, предоставляя удобные инструменты для управления данными пользователей. Используйте его для эффективного
          управления базой данных лиц в эмоций.
        </div>
        <div className="flex justify-center mt-[28px]">
          <button
            onClick={routerCamera}
            className="hover:bg-[#8c949b] hover:text-[#fff] h-[38px] px-[24px] pb-[4px] text-[#6C757D] text-[16px] font-normal border-[1px] border-[#6C757D] rounded-[4px]"
          >
            Просмотреть
          </button>
        </div>
      </div>
      <div ref={eyeRef} className="bg-[#ffffff] mt-[48px] pb-[50px]">
        <div className="text-center text-[#000000] text-[40px] font-normal">Похожие проекты</div>
        <div className="text-center text-[#000000] text-[20px] font-normal mt-[16px]">
          Похожие проекты предлагают аналогичные функции по распознаванию лиц и эмоций, <br /> используя передовые технологии машинного
          обучения и компьютерного зрения.
        </div>
        <div className="flex justify-center mx-[200px] mt-[48px] h-full">
          {project.map((projects, index) => (
            <div
              key={index}
              className="hover:bg-[#c5c2c2] hover:cursor-pointer border-[1px] rounded-[4px] mx-[10px] border-[#000] bg-[#F8F9FA] w-full py-[25px] px-[45px]"
            >
              <a href={projects.project}>
                <div key={index} className="flex justify-center">
                  <img src={projects.url} className="rounded-[10px] w-[80px] h-[80px]" alt="" />
                </div>
                <div className="text-center mt-[24px] text-[20px] font-normal">{projects.text}</div>
                <div className="text-center mt-[23px] text-[16px] font-normal">{projects.info}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div ref={demonstrationRef} className="bg-black pt-[20px] pb-[20px]">
        <div className="text-center text-[#9E9E9E] text-[40px] font-normal">Скриншоты</div>
        <div className="mt-[48px] flex justify-center pb-[20px]">
          <Slider {...settings} className="w-[1000px] h-[500px] ">
            {image.map((imag, index) => (
              <div key={index}>
                <img src={imag.url} className="w-[1000px] h-[500px]" alt=""></img>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div ref={advantagesRef} className=" bg-white mt-[48px] pb-[48px]">
        <div className="text-center text-[#000000] text-[40px] font-normal">Примужества</div>
        <div className="flex justify-center mt-[12px]">
          {primaries.map((pri, index) => (
            <div key={index}>
              <img className="w-[100px] h-[100px] mx-[200px] rounded-[10px]" src={pri.icon} alt=""></img>
              <p className="text-center mt-[31.15px] text-[31px] text-[#000000] font-normal">{pri.pragrov}</p>
              <div className="text-center mt-[12.24px] text-[#000000] text-[16px] font-normal">{pri.info}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[100px] mx-[100px]">
        <hr />
        <div className="mt-[50px] pb-[40px] flex justify-between">
          <div className="text-[20px]">
            © 2021-2024 Носири Хусрав. Все права защищены. <br />
            Руководитель: Доктор философии(PhD), и.о. доцента, Низамитдинов Ахлитдин . Илёситдинович
          </div>
          <div className="hover:underline hover:text-[#5c6fdb] text-[20px]">
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
