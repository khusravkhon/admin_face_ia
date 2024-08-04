import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { modalEditClose } from '../../../store/reducers/modal/modalUser';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Grid, InputLabel, OutlinedInput, Stack, Typography, InputBase } from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';
import CloudUpload from '@mui/icons-material/CloudUpload';
import api from '../../../data/createUser/index';
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  maxHeight: '100%',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  p: 4
};

export default function ModalEditUser({ editUser,refresh }) {
  const { modalEditUser } = useSelector((state) => state.modalUser);
  const [userId, setUserId] = React.useState();
  const [firstName, setFirstName] = React.useState('');
  const [LastName, setLastName] = React.useState('');
  const [dateOfBirth, setDateOfBirth] = React.useState('');
  const [file, setfile] = React.useState('');
  const [selectedName, setSelectedName] = React.useState('');
  const [disabledUser, setDisabled] = React.useState(false);
  const dispatch = useDispatch();

  const moment = require('moment');

  React.useEffect(() => {
    if (editUser) {
      setUserId(editUser.id);
      setFirstName(editUser.firstName);
      setLastName(editUser.lastName);
      setDateOfBirth(moment(editUser.dateOfBirth).format('YYYY-MM-DD hh:mm:ss'));
    }
  }, [editUser]);

  const clears = () => {
    setFirstName('');
    setLastName('');
    setDateOfBirth('');
    setSelectedName('');
  };

  function createUserApi() {
    let data = {
      id: userId,
      firstName: firstName,
      lastName: LastName,
      dateOfBirth: dateOfBirth,
      img: file
    }
    setDisabled(true);
    api
      .editUser(data)
      .then(() => {
        toast.success('Данные пользователь изменении', { position: 'top-right' });
        dispatch(modalEditClose(), clears());
        refresh();
      })
      .catch(() => {
        toast.error('Неверный данние', { position: 'top-right' });
      })
      .finally(() => {
        setDisabled(false);
      });
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setfile(file)
  };
  if (editUser) {
    return (
      <div>
        <Modal open={modalEditUser} onClose={() => {}}>
          <Box sx={style}>
            <Typography variant="h5" component="h6" style={{ position: 'absolute', top: 10, left: 10 }}>
              Изменить данние пользователя
            </Typography>
            <CloseIcon
              onClick={() => dispatch(modalEditClose(), clears())}
              sm={{ color: 'black' }}
              style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }}
            />
            <Box sx={{ marginTop: '50px' }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="text-login">Имя</InputLabel>
                    <OutlinedInput
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Введите имя пользователя"
                      fullWidth
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="text-login">Фамилия</InputLabel>
                    <OutlinedInput
                      type="text"
                      value={LastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Введите фамилия пользователя"
                      fullWidth
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="login">Дата рождения</InputLabel>
                    <InputBase
                      type="datetime-local"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      fullWidth
                      sx={{ padding: 1, borderRadius: '10px', border: '1px solid silver ' }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <div className="parent">
                    <div className="file-upload">
                      <CloudUpload />
                      <h3>{selectedName || 'Нажмите на поле для загрузки'}</h3>
                      <p>Максимальный размер файла 10 Мб</p>
                      <input type="file" onChange={handleFileChange} />
                    </div>
                  </div>
                </Grid>
                <Grid container rowSpacing={1} sx={{ justifyContent: 'space-between', marginLeft: '23px', marginTop: '30px' }}>
                  <Grid item xs={5}>
                    <AnimateButton>
                      <Button
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={() => dispatch(modalEditClose(), clears())}
                      >
                        Отмена
                      </Button>
                    </AnimateButton>
                  </Grid>
                  <Grid item xs={5}>
                    <AnimateButton>
                      <Button
                        fullWidth
                        size="large"
                        disabled={disabledUser}
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={() => createUserApi()}
                      >
                        Изменить
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Modal>
      </div>
    );
  }
}
