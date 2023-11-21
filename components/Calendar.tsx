import React from "react";
import dayjs from "dayjs";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from "@/lib/utils";

type Color = "bg-gray-100" | "bg-green-100" | "bg-green-500" | "bg-green-700";   

export default function Calendar(){

function getDateInMonth(year = dayjs().year(),month=dayjs().month()){
    const startDate = dayjs().year(year).month(month).date(1);
    const endDate = startDate.endOf("month");

    const datesArray=[];
    for(let i=startDate.date();i<=endDate.date();i++){
    datesArray.push(startDate.date(i).format("YYYY-MM-DD"));
    }
    return datesArray;
}

function getColors(value:number):Color{
    if(value === 0){
        return "bg-gray-100";
    }
    else if(value < 5){
        return "bg-green-100";
    }
    else if(value < 10){
        return "bg-green-500";
    }
    else{
        return "bg-green-700";
    }    
}

const hours = 15;


return(
    <div className="flex flex-wrap items-center justify-center 
        p-10 gap-2 border border-dashed rounded-md">
    {getDateInMonth().map((value,index)=>{
        return(
            <HoverCard key={index}>
            <HoverCardTrigger>
            <div className={cn("h-5 w-5 rounded-md bg-gray-200 cursor-pointer",getColors(hours || 0))}>
            </div>
            </HoverCardTrigger>
            <HoverCardContent>
            {hours || 0 } hours on {value}
            </HoverCardContent>
        </HoverCard>
        
        )
    })}
    </div>
)

}