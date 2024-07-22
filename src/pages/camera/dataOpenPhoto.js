// import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function DataOpenPhoto({ dataPeople }) {
  console.log(dataPeople);
  const moment = require('moment');
  return (
    <Box height={'500px'} width={'50%'} marginRight={'3%'} className="borderCamera">
      <div className="grid justify-items-center">
        <div className="mt-[20px]">
          <img src={'data:image/jpeg;base64,' + dataPeople?.imagePath} className="w-[150px] h-[150px]" alt="" />
          {/* <Avatar alt="Remy Sharp" src={dataPeople?.imagePath} sx={{ width: 150, height: 150 }} /> */}
        </div>
        <div className="mt-[20px]">
          <Typography variant="h3" component="h2">
            {`${dataPeople?.lastName} ${dataPeople?.firstName}`}
          </Typography>
        </div>
        <div className="mt-[20px] mb-[150px]">
          <Typography variant="h3" component="h2">
            {moment(dataPeople?.dateOfBirth).format('DD/MM/YYYY HH:mm:ss')}
          </Typography>
        </div>
        <div className="flex justify-around">
          <div className="mx-2 text-center">
            <p>Счастлив</p>
            <div className="rounded-[10px] p-[5px] border-[1px] w-[100px] h-[30px] bg-[#FFFF00]">
              {dataPeople.emotions?.happy ? dataPeople.emotions?.happy : 40}%
            </div>
          </div>
          <div className="mx-2 text-center">
            <p>Грустный</p>
            <div className="rounded-[10px] p-[5px] border-[1px] w-[100px] h-[30px] bg-[#0000FF]">
              {dataPeople.emotions?.sad ? dataPeople.emotions?.sad : 50}%
            </div>
          </div>
          <div className="mx-2 text-center">
            <p>Спокоен</p>
            <div className="rounded-[10px] p-[5px] border-[1px] w-[100px] h-[30px] bg-[#00FF00]">
              {dataPeople.emotions?.calm ? dataPeople.emotions?.calm : 10}%
            </div>
          </div>
          <div className="mx-2 text-center">
            <p>Злой</p>
            <div className="rounded-[10px] p-[5px] border-[1px] w-[100px] h-[30px] bg-[#FF0000]">
              {dataPeople.emotions?.angry ? dataPeople.emotions?.angry : 20}%
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default DataOpenPhoto;
