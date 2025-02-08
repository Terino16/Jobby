'use server';


import { cookies } from 'next/headers';

export async function serverAction(key: string, value: string) {
  const cookieStore = await cookies();
  cookieStore.set(key, value);
}
