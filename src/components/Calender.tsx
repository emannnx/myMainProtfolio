import React from 'react';
import {GitHubCalendar} from "react-github-calendar";

const Calendar = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 text-white overflow-hidden">
      <h1 className="text-[30px] font-bold text-[#6E59A5] text-center">
        My GitHub Activity
      </h1>

      <div className="p-4 rounded-xl shadow-md w-full max-w-[900px] overflow-hidden text-[#6E59A5]">
        <GitHubCalendar
          username="emannnx"
          colorScheme="light"
        />
      </div>
    </div>
  );
};

export default Calendar;
