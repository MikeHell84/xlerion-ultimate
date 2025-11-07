
import { createServer } from './supabase';
import { redirect } from 'next/navigation';

export async function protectRoute() {
  const supabase = createServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return user;
}
