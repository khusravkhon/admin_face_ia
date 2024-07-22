import logo from '../../assets/logo/face_ai.svg';

function Header({ scrollToSection }) {
  return (
    <div className="flex justify-between p-[16px] items-center bg-[#F3F3F3] font-sans font-medium text-[#6C757D] text-[16px]">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-[56px] h-[56px]" />
        <p className="text-[#000] ml-[14.45px]">FACE_AI</p>
      </div>
      <div>
        <a className="mr-[15px] " href="#about" onClick={() => scrollToSection('project')}>
          О приложении
        </a>

        <a className="mr-[15px]" href="#related" onClick={() => scrollToSection('eye')}>
          Похожие проекты
        </a>

        <a className="mr-[15px]" href="#demonstration" onClick={() => scrollToSection('demonstration')}>
          Демонстрация
        </a>

        <a className="mr-[15px]" href="#advantages" onClick={() => scrollToSection('advantages')}>
          Преимущества
        </a>
        <button className="hover:bg-[#4478c5] min-w-[250px] h-[50px] py-[3px] px-[25px] border-[1px] bg-[#0D6EFD] rounded-[5px]">
          <a className="text-[#fff] text-[20px]" href="https://github.com/khusravkhon/admin_face_ia">
            Скачать FACE_AI
          </a>
        </button>
      </div>
    </div>
  );
}

export default Header;
