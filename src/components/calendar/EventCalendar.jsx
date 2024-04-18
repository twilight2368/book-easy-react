import React from "react";
import Calendar from "react-calendar";
import './calendar.css'
export default function EventCalendar() {
  const today = new Date()
  return (
    <div>
      <Calendar
        className="w-11/12 bg-white text-center nunito-font px-5 pt-3 pb-5  rounded-xl shadow-md"
        tileClassName={({ date, view }) => {
          // Add a custom class for the current date
          if (date.getDate() === today.getDate() && view === "month") {
            return "normal highlight";
          } else {
            return "normal";
          }
        }}
      />
    </div>
  );
}
