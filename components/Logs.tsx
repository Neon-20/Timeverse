"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils";
import { useLogStore } from "@/store"

export default function Logs(){
  //list from supabase
const logs = useLogStore((state:any)=>state.logs)

    return(
        <div>
        <Table>
  <TableCaption>A List of your recent Logs.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-1/3">Date</TableHead>
      <TableHead className="w-1/3">Hours</TableHead>
      <TableHead className="w-1/3">Note</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {Object.keys(logs).map((key)=>{
      const log = logs[key];
      const date = log.date as Date
      return(
        <TableRow key={key}
        className={cn(log?.hours <= 5 ?"bg-red-400":"")}>
          <TableCell className="font-medium text-md">
            {date.toDateString()}
          </TableCell>
          <TableCell>{log.hours}</TableCell>
          <TableCell>{log.note}</TableCell>
        </TableRow>
      )
    })}
  </TableBody>
</Table>
    </div>
    )
}