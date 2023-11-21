"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GrAdd } from "react-icons/gr";
import { DatePicker } from "./DatePicker";
import { useLogStore } from "@/store";

export default function NewLog() {
  const log = useLogStore((state: any) => state.log);
  const setLog = useLogStore((state: any) => state.setLog);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="w-full sm:w-72 flex items-center justify-center 
        border hover:border-solid border-dashed py-3 rounded-md cursor-pointer"
        >
          <GrAdd />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Logs</DialogTitle>
          <DialogDescription>
            Time is the Most Valuable Mate you have, utitilise it very wisely
            and create logs here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Date" className="text-right">
              Date{" "}
            </Label>
            <DatePicker />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Hour" className="text-right">
              Hour
            </Label>
            <Input
              id="Hour"
              type="number"
              className="col-span-3"
              value={log.hour}
              onChange={(e) => 
                setLog({
                  ...log,
                  hour:parseInt(e.target.value),
                  })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Note" className="text-right">
              Note
            </Label>
            <Input
              id="Note"
              placeholder="Your place for notes"
              className="col-span-3"
              value={log.note}
              onChange={(e) => 
                setLog({
                  ...log,
                  note: e.target.value,
                  })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
