"use client";
import React from "react";
import dayjs from "dayjs";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { useLogStore } from "@/store";

export default function Calendar() {
	const logs = useLogStore((state:any) => state.logs);

	function getDateInMonth(year = dayjs().year(), month = dayjs().month()) {
		const startDate = dayjs().year(year).month(month).date(1);
		const endDate = startDate.endOf("month");

		const datesArray = [];

		for (let i = startDate.date(); i <= endDate.date(); i++) {
			datesArray.push(startDate.date(i).format("YYYY-MM-DD"));
		}
		return datesArray;
	}
    const getColor = (value: number) => {
		if (value === 0) {
			return "bg-gray-100";
		} else if (value < 5) {
			return "bg-green-100";
		} else if (value < 10) {
			return "bg-green-300";
		} else if (value < 15) {
			return "bg-green-500";
		}
		else{
			return "bg-green-700"
		}
	};
	// const hour = 10;
    return (
		<div className=" border border-dashed flex flex-wrap gap-2 p-10 justify-center rounded-md">
			{getDateInMonth().map((value, index) => {
				const log = logs[value];
                // console.log(log)
				return (
					<HoverCard key={index}>
						<HoverCardTrigger>
							<div
								className={cn(
									"h-5 w-5  rounded-sm cursor-pointer",
									getColor(log?.hours || 0)
								)}
							></div>
						</HoverCardTrigger>
						<HoverCardContent>
							{log?.hours || 0} hours on {value}
						</HoverCardContent>
					</HoverCard>
				);
			})}
		</div>
	);
}