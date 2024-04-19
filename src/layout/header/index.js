import { Link } from 'react-router-dom';
import {
  // Avatar,
  Space
} from 'antd';

let is_active_token = false;
// let icon = '../src/assets/photo/frontend.png';
// let logo = '../src/assets/logo/face_ai.svg';

function Header() {
  return (
    <>
      <div className="flex justify-between mt-[20px] mr-[20px] mx-[15px]">
        <div className="flex justify-center">
          {/* <img src={logo} /> */}
          <p className="mx-[10px] my-[5px]">FaceAI</p>
        </div>
        <div>
          {is_active_token === true ? (
            <Space wrap size={16}>
              {/* <Avatar size="large" src={icon} /> */}
            </Space>
          ) : (
            <Link className="text-[#0B57D0]" to={`/login`}>
              Sing in
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
