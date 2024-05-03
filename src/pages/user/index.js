import TableUser from './table/index';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ModalCreateUser from './modal/modalCreateUser';
import ModalEditUser from './modal/modaleditUser';
import { useDispatch } from 'react-redux';
import { modalCreateOpen, modalEditOpen } from '../../store/reducers/modal/modalUser';
import api from '../../../src/data/createUser/index';

const DashboardDefault = () => {
  const [is_activeLoading, setisActiveLoading] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const dispatch = useDispatch();

  const data = [
    {
      id: 12,
      firstName: 'Khusrav',
      lastName: 'Nosiri',
      dateOfBirth: '2024-05-01T10:05:25.819Z'
    },
    {
      id: 122,
      firstName: 'Khusrav',
      lastName: 'Nosiri',
      dateOfBirth: '2024-05-01T10:05:25.819Z'
    },
    {
      id: 23,
      firstName: 'Khusrav',
      lastName: 'Nosiri',
      dateOfBirth: '2024-05-01T10:05:25.819Z'
    },
    {
      id: 34,
      firstName: 'Khusrav',
      lastName: 'Nosiri',
      dateOfBirth: '2024-05-01T10:05:25.819Z'
    }
  ];

  function refresh() {
    setisActiveLoading(true);
    setisActiveLoading(false);
  }

  useEffect(() => {
    refresh();
  });

  function createUserModal() {
    dispatch(modalCreateOpen());
  }

  function editUserModal(id) {
    api.UserId(id).then((res) => {
      setEditUser(res.data);
      dispatch(modalEditOpen());
    });
  }

  return is_activeLoading === true ? (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        m: 45
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <>
      <TableUser data={data} createUser={createUserModal} editUser={editUserModal} />
      <ModalCreateUser />
      <ModalEditUser editUser={editUser} />
    </>
  );
};

export default DashboardDefault;
