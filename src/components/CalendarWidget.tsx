import { useState } from 'react';

import { format, startOfToday, isSameDay, addMonths, subMonths, isBefore, startOfMonth, startOfWeek, endOfMonth, endOfWeek, eachDayOfInterval, isSameMonth } from 'date-fns';
import { de } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, Clock, Info } from 'lucide-react';
import { BookingModal } from './BookingModal';
import { cn } from '../lib/utils';

// Dummy data for available slots
const generateAvailableSlots = (date: Date) => {
  const day = date.getDay();
  if (day === 0 || day === 6) return []; // Sunday, Saturday
  
  const dateStr = format(date, 'yyyy-MM-dd');
  const code = dateStr.charCodeAt(dateStr.length - 1);
  
  const slots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '13:00', '14:00', '14:30', '15:00', '16:00'
  ];
  
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
  
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
  
  const dateFormat = "d";
  let days = eachDayOfInterval({
    start: startDate,
    end: endDate
  });

  const availableSlots = selectedDate ? generateAvailableSlots(selectedDate) : [];

  const handleDaySelect = (day: Date) => {
    if (isBefore(day, today)) return;
    
    if (day.getDay() !== 0 && day.getDay() !== 6) {
      setSelectedDate(day);
      setSelectedTimeSlot(null);
    }
  };

  const handleSlotClick = (slot: string) => {
    setSelectedTimeSlot(slot);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-gl-dark border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row min-h-[500px]">
        {/* Calendar Pane */}
        <div className="md:w-3/5 p-8 md:p-10 flex-shrink-0 md:border-r border-white/10 relative">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-2xl font-black text-white capitalize">
                {format(currentMonth, 'MMMM yyyy', { locale: de })}
              </h3>
              <p className="text-xs font-mono text-gl-gray-light uppercase tracking-widest mt-1">Zeitzone: MEZ</p>
            </div>
            <div className="flex space-x-2 bg-white/5 p-2 rounded-2xl border border-white/10">
              <button 
                onClick={prevMonth}
                disabled={isBefore(currentMonth, startOfMonth(today))}
                className="p-2 text-white/40 rounded-xl hover:text-white hover:bg-white/10 disabled:opacity-20 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextMonth}
                className="p-2 text-white/40 rounded-xl hover:text-white hover:bg-white/10 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-y-6 mb-2">
            {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(day => (
              <div key={day} className="text-center text-[10px] text-gl-gray font-black uppercase tracking-widest mb-1">
                {day}
              </div>
            ))}
            
            {days.map((day) => {
              const isToday = isSameDay(day, today);
              const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
              const isPast = isBefore(day, today);
              const isCurrentMonth = isSameMonth(day, monthStart);
              const isWeekend = day.getDay() === 0 || day.getDay() === 6;
              const hasSlots = !isPast && !isWeekend;

              return (
                <div key={day.toString()} className="flex justify-center relative">
                  <button
                    onClick={() => handleDaySelect(day)}
                    disabled={!hasSlots}
                    className={cn(
                      "w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 border-2 border-transparent",
                      !isCurrentMonth && "opacity-20",
                      isPast || !hasSlots ? "text-gl-gray cursor-not-allowed" : "cursor-pointer text-white hover:bg-gl-green/10 hover:border-gl-green/30",
                      isSelected && "bg-gl-green text-black border-white shadow-lg shadow-gl-green/30 scale-110 z-10",
                      isToday && !isSelected && "text-gl-green bg-gl-green/10 border-gl-green/20",
                    )}
                  >
                    <span>{format(day, dateFormat)}</span>
                    {hasSlots && !isSelected && !isPast && (
                      <span className="absolute bottom-1 w-1 h-1 rounded-full bg-gl-green/40"></span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Time Slots Pane */}
        <div className="md:w-2/5 p-8 md:p-10 bg-white/[0.02] backdrop-blur-3xl flex flex-col relative">
          {selectedDate ? (
            <div className="h-full flex flex-col">
              <div className="mb-8">
                <p className="text-gradient-logo text-[10px] font-black uppercase tracking-[0.2em] mb-2">Verfügbare Zeiten</p>
                <h3 className="text-white text-xl font-bold">
                  {format(selectedDate, 'EEEE, d. MMMM', { locale: de })}
                </h3>
              </div>
              
              {availableSlots.length > 0 ? (
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  <div className="flex flex-col space-y-3">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => handleSlotClick(slot)}
                        className="w-full bg-gl-green/10 border border-gl-green/20 text-gl-green font-black py-4 px-6 rounded-full hover:bg-gl-green hover:text-black hover:border-white hover:shadow-lg hover:shadow-gl-green/20 transition-all flex items-center justify-center text-sm uppercase tracking-wider"
                      >
                        {slot} Uhr
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-gl-gray">
                  <Info className="w-10 h-10 mb-4 opacity-20" />
                  <p className="text-sm">Keine freien Termine an diesem Tag verfügbar.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center border border-white/10 mb-6 animate-pulse">
                <Clock className="w-8 h-8 text-white/30" />
              </div>
              <p className="text-white font-bold text-lg mb-2">Datum wählen</p>
              <p className="text-gl-gray-light text-sm leading-relaxed">Bitte wählen Sie einen verfügbaren Tag im Kalender, um freie Zeiten zu sehen.</p>
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
