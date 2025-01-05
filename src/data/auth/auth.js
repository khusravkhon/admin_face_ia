import { supabase } from '../supabase'

export default {
  loginUser(login) {
    return supabase.auth.signInWithPassword({
      email: login.login,
      password: login.password
    })
  }
};
