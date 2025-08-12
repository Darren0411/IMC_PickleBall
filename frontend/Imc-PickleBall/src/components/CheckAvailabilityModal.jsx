import React, { useState } from "react";

// Example of slot data. Replace this with your backend data!
function generateMockSlots() {
  const days = [];
  const hours = Array.from({ length: 12 }, (_, i) => 10 + i); // 10am to 9pm
  for (let d = 0; d < 7; d++) {
    const date = new Date();
    date.setDate(date.getDate() + d);
    const dateStr = date.toISOString().split('T')[0];
    const slots = hours.map(h => ({
      time: h < 12 ? `${h} AM` : `${(h%12)||12} PM`,
      available: Math.random() > 0.3, 
    }));
    days.push({ date: dateStr, slots });
  }
  return days;
}

export default function CheckAvailabilityModal({ visible, onClose, slotsData }) {
  // If you don't pass slotsData, use mock
  const slots = slotsData || generateMockSlots();
  const hours = Array.from({ length: 12 }, (_, i) => 10 + i);

  return (
    <>
      {visible && (
        <div className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl relative animate-fade-in">
            {/* Close Button */}
            <button
              className="absolute top-3 right-4 bg-red-100 hover:bg-red-200 text-red-600 rounded-full px-2 py-1 font-bold"
              onClick={onClose}
            >✕</button>
            <h2 className="text-slate-900 text-xl font-bold mb-2">Available Slots (Next 7 Days)</h2>
            <p className="text-slate-500 mb-4">Tap on available slots to book.</p>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse rounded-lg text-center">
                <thead>
                  <tr>
                    <th className="px-2 py-2 text-xs"></th>
                    {slots.map(day => (
                      <th key={day.date} className="px-2 py-2 text-xs font-semibold text-slate-700">
                        {new Date(day.date).toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {hours.map(hour => (
                    <tr key={hour}>
                      <td className="px-2 py-2 text-xs font-semibold">
                        {hour < 12 ? `${hour} AM` : `${(hour % 12) || 12} PM`}
                      </td>
                      {slots.map(day => {
                        const slot = day.slots.find(s => s.time === (hour < 12 ? `${hour} AM` : `${(hour % 12) || 12} PM`));
                        return (
                          <td key={day.date + hour} className="px-1 py-1">
                            {slot?.available ? (
                              <span className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-green-600 transition-colors">
                                Available
                              </span>
                            ) : (
                              <span className="bg-red-500 text-white px-3 py-1 rounded select-none">
                                Not Available
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

 {/* simple Animations */}
      <style>
        {`
        .animate-fade-in { animation: fadeIn .25s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(.95); } to { opacity: 1; transform: none; } }
        `}
      </style>
    </>
  );
}

