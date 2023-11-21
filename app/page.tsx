import NavBar from '@/components/NavBar'
import NewLog from '@/components/NewLog';
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Calendar from '@/components/Calendar';
import Logs from '@/components/Logs';

export default function Home() {
  return (
  <div className='p-5 space-y-10'>
    <NavBar/>
    <NewLog/>
    <Calendar/>
    <Logs/>
  </div>
  )
}
