import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function Logs(){
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
    <TableRow>
      <TableCell className="font-medium">
        {new Date().toDateString()}
      </TableCell>
      <TableCell>10</TableCell>
      <TableCell>This is a placeholder</TableCell>
    </TableRow>
  </TableBody>
</Table>
    </div>
    )
}