import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import moment from 'moment';

function DataOpenPhoto({ dataPeople, clearData }) {
  return (
    <div 
      style={{
        position: 'absolute',
        left: '50%',
        top: '10%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        height: 'auto',
        width: '90%',
        maxWidth: '500px',
        boxSizing: 'border-box',
      }}
      className="borderCamera"
    >
      <ArrowBackIcon onClick={clearData} className="cursor-pointer mb-4" />
      <div className="grid justify-items-center">
        <div className="mt-[20px]">
          <img 
            src={dataPeople?.Img} 
            alt="User" 
            className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] rounded-full" 
          />
        </div>
        <div className="mt-[20px] text-center">
          <Typography variant="h5" component="h2" className="sm:variant-h4 md:variant-h3">
            {`${dataPeople?.Name} ${dataPeople?.Last}`}
          </Typography>
        </div>
        <div className="mt-[20px] mb-[50px] sm:mb-[100px] md:mb-[150px]">
          <Typography variant="h6" component="h2" className="sm:variant-h5 md:variant-h3">
            {moment(dataPeople?.Birthday).format('DD/MM/YYYY')}
          </Typography>
        </div>
        <div className="flex flex-wrap justify-around">
          {['happy', 'sad', 'calm', 'angry'].map((emotion, index) => {
            const colors = {
              happy: '#FFFF00',
              sad: '#0000FF',
              calm: '#00FF00',
              angry: '#FF0000',
            };
            const labels = {
              happy: 'Счастлив',
              sad: 'Грустный',
              calm: 'Спокоен',
              angry: 'Злой',
            };
            const defaultValues = {
              happy: 40,
              sad: 50,
              calm: 10,
              angry: 20,
            };
            return (
              <div key={index} className="mx-2 text-center mb-4">
                <p>{labels[emotion]}</p>
                <div 
                  className="rounded-[10px] p-[5px] border-[1px] w-[80px] h-[30px] sm:w-[100px] sm:h-[40px] md:w-[100px] md:h-[30px]"
                  style={{ backgroundColor: colors[emotion] }}
                >
                  {dataPeople.emotions?.[emotion] || defaultValues[emotion]}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DataOpenPhoto;
