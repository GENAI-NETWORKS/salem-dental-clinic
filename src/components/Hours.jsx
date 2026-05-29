import React from 'react';
import { Clock } from 'lucide-react';

const schedule = [
  { day: 'Monday', hours: '9:30 AM - 9:00 PM' },
  { day: 'Tuesday', hours: '9:30 AM - 9:00 PM' },
  { day: 'Wednesday', hours: '9:30 AM - 9:00 PM' },
  { day: 'Thursday', hours: '9:30 AM - 9:00 PM' },
  { day: 'Friday', hours: '9:30 AM - 9:00 PM' },
  { day: 'Saturday', hours: '9:30 AM - 9:00 PM' },
  { day: 'Sunday', hours: 'Closed' }
];

const Hours = () => {
  const currentDayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.

  // Adjust index so Monday is 0 and Sunday is 6 to match the schedule array
  const adjustedDayIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;

  return (
    <section className="py-20 bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-teal py-8 px-8 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            <Clock className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-serif font-bold mb-2">Opening Hours</h2>
            <p className="text-teal-100">Visit us at your convenience</p>
          </div>

          <div className="p-8">
            <div className="flex flex-col gap-3">
              {schedule.map((slot, index) => {
                const isToday = index === adjustedDayIndex;
                return (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-4 rounded-xl transition-all ${isToday
                        ? 'bg-gold/10 border border-gold/30 shadow-sm relative'
                        : 'hover:bg-gray-50'
                      }`}
                  >
                    {isToday && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-gold rounded-r-full"></div>
                    )}
                    <span className={`font-semibold ${isToday ? 'text-navy text-lg' : 'text-gray-600'}`}>
                      {slot.day}
                      {isToday && <span className="ml-2 text-xs uppercase tracking-wider text-gold font-bold">Today</span>}
                    </span>
                    <span className={`font-medium ${slot.hours === 'Closed' ? 'text-red-400' : (isToday ? 'text-teal font-bold' : 'text-gray-600')
                      }`}>
                      {slot.hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hours;
