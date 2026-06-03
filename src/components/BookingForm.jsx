import React, { useState } from 'react';
import { Clock, Calendar, MessageCircle, CheckCircle, Send } from 'lucide-react';

const schedule = [
  { day: 'Monday',    short: 'Mon', hours: '9:30 AM – 9:00 PM' },
  { day: 'Tuesday',   short: 'Tue', hours: '9:30 AM – 9:00 PM' },
  { day: 'Wednesday', short: 'Wed', hours: '9:30 AM – 9:00 PM' },
  { day: 'Thursday',  short: 'Thu', hours: '9:30 AM – 9:00 PM' },
  { day: 'Friday',    short: 'Fri', hours: '9:30 AM – 9:00 PM' },
  { day: 'Saturday',  short: 'Sat', hours: '9:30 AM – 9:00 PM' },
  { day: 'Sunday',    short: 'Sun', hours: 'Closed', closed: true },
];

const HoursAndBooking = () => {
  const [status, setStatus] = useState('idle');

  const todayIndex = new Date().getDay();
  const adjustedIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const text = `*New Appointment Request*%0A%0A*Name:* ${data.name}%0A*Phone:* ${data.phone}%0A*Service:* ${data.service}%0A*Date:* ${data.date}%0A*Message:* ${data.message || 'N/A'}`;
    setTimeout(() => {
      setStatus('success');
      window.open(`https://wa.me/919843308369?text=${text}`, '_blank');
      e.target.reset();
      setTimeout(() => setStatus('idle'), 3000);
    }, 700);
  };

  const inputClass = "w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-all bg-white";

  return (
    <section id="book" className="py-10 md:py-16 bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">Schedule & Book</span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-navy mt-2">Visit Us Today</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* ── LEFT: Booking Form ── */}
          <div className="bg-navy rounded-3xl shadow-sm overflow-hidden flex flex-col">
            {/* Header bar */}
            <div className="px-8 py-6 flex items-center gap-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-none">Book an Appointment</h3>
                <p className="text-gray-400 text-xs mt-1">Sent directly via WhatsApp</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5 bg-[#25D366]/20 px-3 py-1.5 rounded-full">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="text-[#25D366] text-xs font-semibold">WhatsApp</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex-1 p-6 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Full Name</label>
                  <input type="text" name="name" required className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Phone</label>
                  <input type="tel" name="phone" required className={inputClass} placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Service</label>
                  <select name="service" required defaultValue="" className={inputClass}>
                    <option value="" disabled>Select service</option>
                    {['General Consultation','Digital Smile Designing','Tooth Whitening','Dental Implants','Invisible Clear Aligners','Root Canal Treatment','Gummy Smile Correction'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Preferred Date</label>
                  <input type="date" name="date" required className={inputClass} />
                </div>
              </div>

              <div className="flex-1 flex flex-col min-h-[120px]">
                <label className="block text-xs font-semibold text-gray-400 mb-1">Message <span className="text-gray-500 font-normal">(optional)</span></label>
                <textarea name="message" className={`${inputClass} resize-none flex-1`} placeholder="Any concerns or questions..."></textarea>
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`mt-auto w-fit inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 ${
                  status === 'success' ? 'bg-green-500' : 'bg-teal hover:bg-[#155a5a] shadow-lg shadow-teal/20'
                }`}
              >
                {status === 'idle'    && <><Send className="w-4 h-4" /> Book via WhatsApp</>}
                {status === 'loading' && <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Sending...</>}
                {status === 'success' && <><CheckCircle className="w-4 h-4" /> Sent! Check WhatsApp</>}
              </button>
            </form>
          </div>

          {/* ── RIGHT: Opening Hours ── */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            {/* Header bar */}
            <div className="bg-navy px-8 py-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-teal" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-none">Opening Hours</h3>
                <p className="text-gray-400 text-xs mt-1">Visit us at your convenience</p>
              </div>
            </div>

            {/* Schedule rows */}
            <div className="flex-1 p-6 space-y-1">
              {schedule.map((slot, i) => {
                const isToday = i === adjustedIndex;
                return (
                  <div
                    key={i}
                    className={`flex justify-between items-center px-4 py-3 rounded-xl transition-all ${
                      isToday
                        ? 'bg-teal text-white'
                        : slot.closed
                        ? 'opacity-50'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-semibold text-sm ${isToday ? 'text-white' : 'text-navy'}`}>
                        {slot.day}
                      </span>
                      {isToday && (
                        <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                          Today
                        </span>
                      )}
                    </div>
                    <span className={`text-sm font-medium ${
                      slot.closed ? 'text-red-400' : isToday ? 'text-teal-100' : 'text-gray-500'
                    }`}>
                      {slot.hours}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Bottom call strip */}
            <div className="px-6 pb-6">
              <a
                href="tel:+919843308369"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold text-white text-sm font-bold hover:bg-[#b89741] transition-colors"
              >
                Call: 98433 08369
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HoursAndBooking;
