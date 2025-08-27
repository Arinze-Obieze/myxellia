import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

export default function CalendarModal({ onClose }) {
  const [currentMonth, setCurrentMonth] = useState(10); 
  const [currentYear, setCurrentYear] = useState(2023);
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 10, 16));

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];
  const monthShort = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec",
  ];

  const daysOfWeek = ["SUN","MON","TUE","WED","THURS","FRI","SAT"];
  const getDaysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const buildCells = () => {
    const firstDow = new Date(currentYear, currentMonth, 1).getDay(); 
    const daysThis = getDaysInMonth(currentYear, currentMonth);

    const prevMonthIndex = (currentMonth + 11) % 12;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysPrev = getDaysInMonth(prevYear, prevMonthIndex);

    const cells = [];
    for (let i = firstDow - 1; i >= 0; i--) {
      const day = daysPrev - i;
      cells.push({ day, current: false, monthIndex: prevMonthIndex, year: prevYear });
    }
    for (let d = 1; d <= daysThis; d++) {
      cells.push({ day: d, current: true, monthIndex: currentMonth, year: currentYear });
    }
    const nextMonthIndex = (currentMonth + 1) % 12;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    let n = 1;
    while (cells.length < 42) {
      cells.push({ day: n++, current: false, monthIndex: nextMonthIndex, year: nextYear });
    }
    return cells;
  };

  const cells = buildCells();
  const isSelectedCell = (c) =>
    c.current &&
    selectedDate.getDate() === c.day &&
    selectedDate.getMonth() === currentMonth &&
    selectedDate.getFullYear() === currentYear;

  return (
    <div className="fixed top-[84px]  right-0 h-full w-[380px] bg-[#141414] text-white shadow-2xl z-50 flex flex-col">
      {/* top bar */}
      <div className="flex items-center bg-[#1d1d1d] justify-between px-4 py-3 ">
        <div className="flex items-center gap-2">
          <IoArrowBack className="text-lg" />
          <span className="text-sm font-medium">Calendar</span>
        </div>
        <IoMdClose className="text-xl cursor-pointer" onClick={onClose} />
      </div>

      {/* month nav */}
      <div className="flex items-center justify-center px-4 pt-3 space-x-5">
        <button onClick={prevMonth} className="p-2 rounded-md hover:bg-white/5">
          <FaCaretLeft className="text-[#98A2B3] text-2xl" />
        </button>

        <div className="text-sm font-medium">
          {monthNames[currentMonth]} {currentYear}
        </div>

        <button onClick={nextMonth} className="p-2 rounded-md hover:bg-white/5">
          <FaCaretRight className="text-[#98A2B3] text-2xl" />
        </button>
      </div>

      {/* grid */}
      <div
        className="m-6 rounded-sm overflow-hidden"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gridTemplateRows: "32px repeat(6, 84px)",
          borderTop: "1px solid rgba(148,148,148,0.06)",
          borderLeft: "1px solid rgba(148,148,148,0.06)",
        }}
      >
        {daysOfWeek.map((d) => (
          <div
            key={d}
            className="flex items-center justify-center text-[8px] tracking-wider text-zinc-400 border-r border-b"
            style={{ borderColor: "rgba(148,148,148,0.06)" }}
          >
            {d}
          </div>
        ))}

        {cells.map((c, idx) => {
          const selected = isSelectedCell(c);
          const isFirstOfMonth = c.day === 1;
          const topLabel = isFirstOfMonth
            ? `${monthShort[c.monthIndex]} ${c.day}`
            : `${c.day}`;
          const textColor = c.current ? "text-zinc-300" : "text-zinc-600";

          return (
            <button
              key={`${idx}-${c.day}-${c.monthIndex}`}
              onClick={() =>
                c.current &&
                setSelectedDate(new Date(c.year, c.monthIndex, c.day))
              }
              className="relative text-left border-r border-b p-0 h-full"
              style={{ borderColor: "rgba(148,148,148,0.06)" }}
            >
              {!selected && (
                <div
                  className={`absolute top-2 left-0 right-0 text-center text-[11px] ${textColor}`}
                >
                  <span className="select-none">{topLabel}</span>
                </div>
              )}
              {selected && (
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <div className="px-3 py-1 rounded-full bg-violet-600 text-[11px]">
                    {c.day}
                  </div>
                </div>
              )}
              <div className="w-full h-full" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
