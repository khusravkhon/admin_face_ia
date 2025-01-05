import { supabase } from 'data/supabase';

export default {
  refreshUser() {
    return supabase.from('user').select();
  },
  async savePhoto(file) {
    const { session } = JSON.parse(localStorage.getItem('token'))
    const { data, error } = await supabase.storage
      .from('avatar')
      .upload(`user_${Date.now()}.${file.type.split('/')[1]}`, file, {
        cacheControl: '3600',
        upsert: false,
        headers: {
          Authorization: `Bearer ${session.access_token}`
        }
      });

    if(error) {
      console.error('Ошибка загрузки изображения:', error);
      return null
    }

    return data.path;
  },
  createUser(data) {
    return supabase.from('user').insert(data)
  },
  UserId(id) {
    return supabase.from('user').select('*').eq('id', id)
  },
  editUser(data) {
    return supabase.from('user').update(data).eq('id', data.id)
  },
  deleteUser(id) {
    return supabase.from('user').delete('*').eq('id', id)
  },
  async deleteImg(imgPath) {
    const { error } = await supabase.storage.from('avatar').remove([imgPath])

    if(error) {
      return false
    }else {
      return true
    }
  }
};
