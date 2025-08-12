import React, { useState } from "react";

const BookSlot = () => {
  const dates = [
    { day: "12", label: "TUE" },
    { day: "13", label: "WED" },
    { day: "14", label: "THU" },
    { day: "15", label: "FRI" },
    { day: "16", label: "SAT" },
  ];

  const sports = ["Football", "Cricket", "Badminton", "Volleyball", "Basketball"];

  const mockSlots = [
    { time: "12:00 AM", available: false },
    { time: "1:00 AM", available: false },
    { time: "2:00 AM", available: false },
    { time: "3:00 AM", available: false },
    { time: "4:00 AM", available: false },
    { time: "5:00 AM", available: false },
    { time: "6:00 AM", available: false },
    { time: "7:00 AM", available: true },
    { time: "8:00 AM", available: true },
    { time: "9:00 AM", available: false },
    { time: "10:00 AM", available: false },
    { time: "11:00 AM", available: false },
    { time: "12:00 PM", available: false },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: true },
    { time: "3:00 PM", available: true },
    { time: "4:00 PM", available: true },
    { time: "5:00 PM", available: true },
    { time: "6:00 PM", available: true },
    { time: "7:00 PM", available: true },
    { time: "8:00 PM", available: true },
    { time: "9:00 PM", available: true },
    { time: "10:00 PM", available: true },
    { time: "11:00 PM", available: true },
  ];

  const [selectedDate, setSelectedDate] = useState("12");
  const [selectedSport, setSelectedSport] = useState("Football");
  const [selectedOption, setSelectedOption] = useState("6s");
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className="p-4 max-w-lg mx-auto">
      {/* Date Selector */}
      <div className="flex justify-between items-center mb-4">
        {dates.map((d) => (
          <button
            key={d.day}
            onClick={() => setSelectedDate(d.day)}
            className={`flex flex-col items-center px-3 py-2 rounded-lg border ${
              selectedDate === d.day
                ? "bg-green-100 border-green-500 text-green-700 font-bold"
                : "bg-white border-gray-300"
            }`}
          >
            <span className="text-lg">{d.day}</span>
            <span className="text-xs">{d.label}</span>
          </button>
        ))}
      </div>

      {/* Sports Selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {sports.map((sport) => (
          <button
            key={sport}
            onClick={() => setSelectedSport(sport)}
            className={`px-3 py-1 rounded-full border ${
              selectedSport === sport
                ? "bg-green-500 text-white"
                : "bg-white border-gray-300 text-gray-600"
            }`}
          >
            {sport}
          </button>
        ))}
      </div>

      {/* Option Selector */}
      <div className="mb-4">
        <p className="font-semibold">{selectedSport}</p>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="option"
            value="6s"
            checked={selectedOption === "6s"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          6s
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="option"
            value="3 A"
            checked={selectedOption === "3 A"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          3 A
        </label>
      </div>

      {/* Available Slots */}
      <p className="font-semibold mb-2">Available Slots</p>
      <div className="grid grid-cols-4 gap-3">
        {mockSlots.map((slot) => (
          <button
            key={slot.time}
            disabled={!slot.available}
            onClick={() => setSelectedSlot(slot.time)}
            className={`px-2 py-3 rounded-lg text-sm font-semibold ${
              !slot.available
                ? "bg-black text-white cursor-not-allowed"
                : selectedSlot === slot.time
                ? "bg-green-200 text-green-700"
                : "bg-green-50 text-green-600"
            }`}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookSlot;
