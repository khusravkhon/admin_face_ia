import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';

function DataOpenPhoto({ dataPeople, clearData }) {
  const moment = require('moment');
  return (
    <div 
    style={{
      position: 'absolute',
      left: '50%',
      top: '10%',
      transform: 'translateX(-50%)',
      display: 'flex',
      padding: '30px'
    }}
    
    height={'100%'} width={'50%'} className="borderCamera">
        <ArrowBackIcon onClick={clearData} className="cursor-pointer"/>
      <div className="grid justify-items-center">
        <div className="mt-[20px]">
          <img src={dataPeople?.Img} className="w-[200px] h-[200px] rounded-full" alt="" />
        </div>
        <div className="mt-[20px] text-center">
          <Typography variant="h3" component="h2">
            {`${dataPeople?.Name} ${dataPeople?.Last}`}
          </Typography>
        </div>
        <div className="mt-[20px] mb-[150px]">
          <Typography variant="h3" component="h2">
            {moment(dataPeople?.Birthday).format('DD/MM/YYYY')}
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
    </div>
  );
}

export default DataOpenPhoto;
