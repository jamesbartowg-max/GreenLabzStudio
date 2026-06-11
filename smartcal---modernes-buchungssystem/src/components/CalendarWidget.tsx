import React, { useState } from 'react';
import { motion } from 'motion/react';
import { format, addDays, startOfToday, isSameDay, addMonths, subMonths, isBefore, startOfMonth, startOfWeek, endOfMonth, endOfWeek, eachDayOfInterval, isSameMonth } from 'date-fns';
import { de } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, Clock, Info } from 'lucide-react';
import { BookingModal } from './BookingModal';
import { cn } from '../lib/utils';

// Dummy data for available slots
const generateAvailableSlots = (date: Date) => {
  // Let's pretend weekends have no slots, and week days have random amounts
  const day = date.getDay();
  if (day === 0 || day === 6) return []; // Sunday, Saturday
  
  // Seed random slots based on date string so it's consistent for UI preview
  const dateStr = format(date, 'yyyy-MM-dd');
  const code = dateStr.charCodeAt(dateStr.length - 1);
  
  const slots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '13:00', '14:00', '14:30', '15:00', '16:00'
  ];
  
  // Return a subset based on some pseudo-random logic
  if (code % 3 === 0) return slots.slice(0, 4);
  if (code % 2 === 0) return slots.slice(2, 7);
  return slots.slice(4, 8);
};

export function CalendarWidget() {
  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(today));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  
  // Build calendar grid
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }); // Monday start
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
  
  const dateFormat = "d";
  const rows = [];
  let days = eachDayOfInterval({
    start: startDate,
    end: endDate
  });

  const availableSlots = selectedDate ? generateAvailableSlots(selectedDate) : [];

  const handleDaySelect = (day: Date) => {
    if (isBefore(day, today)) return;
    
    // Only select if it's a weekday for our dummy logic
    if (day.getDay() !== 0 && day.getDay() !== 6) {
      setSelectedDate(day);
      setSelectedTimeSlot(null); // reset selected slot when changing day
    }
  };

  const handleSlotClick = (slot: string) => {
    setSelectedTimeSlot(slot);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row min-h-[500px]">
        {/* Calendar Pane */}
        <div className="md:w-3/5 p-6 md:p-8 flex-shrink-0 md:border-r border-white/10 relative">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-white capitalize">
                {format(currentMonth, 'MMMM yyyy', { locale: de })}
              </h3>
              <p className="text-sm text-slate-400 mt-0.5">Zeitzone: Mitteleuropäische Zeit</p>
            </div>
            <div className="flex space-x-2 bg-white/5 p-1.5 rounded-xl border border-white/10">
              <button 
                onClick={prevMonth}
                disabled={isBefore(currentMonth, startOfMonth(today))}
                className="p-2 text-white/50 rounded-lg hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors focus:ring-2 focus:ring-[#5cc82b] outline-none"
                aria-label="Vorheriger Monat"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextMonth}
                className="p-2 text-white/50 rounded-lg hover:text-white hover:bg-white/10 transition-colors focus:ring-2 focus:ring-[#5cc82b] outline-none"
                aria-label="Nächster Monat"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-y-4 mb-2">
            {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(day => (
              <div key={day} className="text-center text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">
                {day}
              </div>
            ))}
            
            {days.map((day, dayIdx) => {
              const isToday = isSameDay(day, today);
              const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
              const isPast = isBefore(day, today);
              const isCurrentMonth = isSameMonth(day, monthStart);
              const isWeekend = day.getDay() === 0 || day.getDay() === 6;
              const hasSlots = !isPast && !isWeekend; // Our dummy logic constraint

              return (
                <div key={day.toString()} className="flex justify-center relative">
                  <button
                    onClick={() => handleDaySelect(day)}
                    disabled={!hasSlots}
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#5cc82b] focus-visible:ring-offset-2 border focus-visible:ring-offset-slate-900 border-transparent",
                      !isCurrentMonth && "opacity-30",
                      isPast || !hasSlots ? "text-slate-600 cursor-not-allowed" : "cursor-pointer text-white hover:bg-white/10",
                      isSelected && "bg-[#5cc82b] text-[#0b0e0c] font-bold shadow-lg shadow-[#5cc82b]/20 ring-4 ring-[#5cc82b]/10 hover:bg-green-300 z-10",
                      isToday && !isSelected && "border-[#5cc82b]/50 text-green-300 bg-[#5cc82b]/20",
                    )}
                  >
                    <span>{format(day, dateFormat)}</span>
                    {hasSlots && !isSelected && !isPast && (
                      <span className="absolute bottom-1.5 w-1 h-1 rounded-full bg-[#5cc82b]/50 z-20"></span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Time Slots Pane */}
        <div className="md:w-2/5 p-6 md:p-8 bg-white/5 backdrop-blur-lg flex flex-col relative">
          {selectedDate ? (
            <div className="h-full flex flex-col">
              <h3 className="text-[#5cc82b] text-xs font-medium uppercase tracking-wider mb-6">
                {format(selectedDate, 'EEEE, d. MMM', { locale: de })}
              </h3>
              
              {availableSlots.length > 0 ? (
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  <div className="flex flex-col space-y-3">
                    {availableSlots.map(slot => (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={slot}
                        onClick={() => handleSlotClick(slot)}
                        className="w-full group bg-[#5cc82b]/10 border border-[#5cc82b]/30 text-green-300 font-medium py-3 px-4 rounded-xl hover:bg-[#4eb322] hover:text-[#0b0e0c] hover:border-[#5cc82b] hover:shadow-lg hover:shadow-[#5cc82b]/20 hover:font-bold transition-all flex items-center justify-center text-sm"
                      >
                        {slot} Uhr
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-slate-500">
                  <Info className="w-10 h-10 mb-3 text-slate-600" />
                  <p>Keine freien Termine an diesem Tag verfügbar.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 mb-4">
                <Clock className="w-6 h-6 text-white/50" />
              </div>
              <p className="text-white font-medium mb-1">Datum wählen</p>
              <p className="text-sm">Bitte wählen Sie einen verfügbaren Tag im Kalender, um freie Zeiten zu sehen.</p>
            </div>
          )}
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedDate={selectedDate}
        selectedTime={selectedTimeSlot}
      />
    </>
  );
}
