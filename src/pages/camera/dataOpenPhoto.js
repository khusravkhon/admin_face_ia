// import { Spin } from 'antd';
// import { Avatar, Space } from 'antd';
// import { Typography } from 'antd';
// const { Title, Text } = Typography;
// import { useState } from 'react';

function DataOpenPhoto(props) {
  // const [loading, setLoading] = useState(false);

  // console.log(photoData);
  // const data = [
  //   {
  //     img: '../src/assets/photo/frontend.png',
  //     name: 'Khusrav',
  //     borsday: 11072003
  //   }
  // ];

  // const getDataPeople = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // };

  return (
    <div className="border rounded shadow-md " >KHusrav {props.dataPeople}</div>
    // <div>
    //   {data.map((item, index) => (

    //   ))}
    // </div>

    // <div>
    //   <button onClick={getDataPeople}></button>
    //   {loading ? (
    //     <Spin />
    //   ) : loading == false ? (
    //     data.map((i, index) => (
    //       <div key={index}>
    //         <Space wrap size={16}>
    //           <Avatar size={64} src={i.img} />
    //         </Space>
    //         <Typography>
    //           <Title>{i.name}</Title>
    //           <Text>{i.borsday}</Text>
    //         </Typography>
    //       </div>
    //     ))
    //   ) : (
    //     <Text>Нет данные</Text>
    //   )}
    // </div>
  );
}

export default DataOpenPhoto;
