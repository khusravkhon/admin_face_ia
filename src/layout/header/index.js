import logo from '../../assets/logo/face_ai.svg';

function Header() {
  return (
    <>
      <div className="flex justify-between mt-[20px] mr-[20px] mx-[15px]">
        <div className="flex justify-center">
          <img src={logo} alt="Описание изображения" />
          <p className="mx-[10px] my-[5px]">FaceAI</p>
        </div>
      </div>
    </>
  );
}

export default Header;
