import NavBar from '@/components/NavBar'
import NewLog from '@/components/NewLog';
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Calendar from '@/components/Calendar';
import Logs from '@/components/Logs';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import {cookies} from "next/headers";
import { redirect } from 'next/navigation';

export default async function Home() {
//get user session here

const supabase = createServerComponentClient({ cookies });

const { data } = await supabase.auth.getSession();

if(!data.session){
  redirect("/auth");
}



  return (
  <div className='p-5 space-y-10'>
    <NavBar/>
    <NewLog/>
    <Calendar/>
    <Logs/>
  </div>
  )
}
