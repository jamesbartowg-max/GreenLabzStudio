import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  selectedTime: string | null;
}

export function BookingModal({ isOpen, onClose, selectedDate, selectedTime }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    meetingType: 'Google Meet',
    notes: '',
    privacyAccepted: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const topics = [
    'Webdesign',
    'SEO Betreuung',
    'Anderes Anliegen'
  ];

  const meetingTypes = ['Google Meet', 'Telefon'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    // @ts-ignore
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      setError('Bitte akzeptieren Sie die Datenschutzbestimmungen.');
      return;
    }
    setError(null);
    setIsSubmitting(true);

    try {
      if (!selectedDate || !selectedTime) throw new Error("Datum oder Zeit fehlt");
      
      const payload = {
        ...formData,
        date: selectedDate.toLocaleDateString('de-DE', { dateStyle: 'full' }),
        time: selectedTime,
      };

      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Fehler beim Senden der Daten');
      }

      setIsSuccess(true);
      // Optional: hide success message and close after few seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        // Reset form
        setFormData({
          name: '', email: '', topic: '', meetingType: 'Google Meet', notes: '', privacyAccepted: false
        });
      }, 3000);
      
    } catch (err: any) {
      setError(err.message || 'Ein Fehler ist aufgetreten. Bitte später erneut versuchen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-black/50 w-full max-w-lg flex flex-col max-h-[90vh] relative overflow-hidden"
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 10, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
            <div>
              <h2 className="text-xl font-bold text-white">Termin Details</h2>
              {selectedDate && selectedTime && (
                <p className="text-[#5cc82b] text-xs font-medium uppercase tracking-wider mt-1">
                  {selectedDate.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'short' })} • {selectedTime} Uhr
                </p>
              )}
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              type="button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto">
            {isSuccess ? (
              <motion.div 
                className="flex flex-col items-center justify-center py-10 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-20 h-20 bg-[#5cc82b]/20 border border-[#5cc82b]/50 text-[#5cc82b] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Termin erfolgreich gebucht!</h3>
                <p className="text-slate-400 text-sm">
                  Wir haben Ihnen eine Bestätigung per E-Mail gesendet. Bis bald!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#5cc82b] placeholder:text-slate-500 transition-colors"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">E-Mail</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#5cc82b] placeholder:text-slate-500 transition-colors"
                      placeholder="E-Mail Adresse"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="topic" className="sr-only">Thema</label>
                    <select 
                      id="topic"
                      name="topic" 
                      required
                      value={formData.topic}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#5cc82b] appearance-none transition-colors"
                    >
                      <option value="" disabled className="bg-slate-900 text-slate-500">Thema wählen</option>
                      {topics.map(t => <option key={t} value={t} className="bg-slate-900 text-white">{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="meetingType" className="sr-only">Medium</label>
                    <select
                      id="meetingType"
                      name="meetingType"
                      required
                      value={formData.meetingType}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#5cc82b] appearance-none transition-colors"
                    >
                      {meetingTypes.map(type => (
                        <option key={type} value={type} className="bg-slate-900 text-white">{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <AnimatePresence>
                  {formData.topic === 'Anderes Anliegen' && (
                    <motion.div 
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <label htmlFor="notes" className="sr-only">Kurze Beschreibung Ihres Anliegens</label>
                      <textarea 
                        id="notes"
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleChange}
                        className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#5cc82b] placeholder:text-slate-500 resize-none transition-colors h-20"
                        placeholder="Kurze Beschreibung Ihres Anliegens..."
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input 
                        type="checkbox" 
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${formData.privacyAccepted ? 'bg-[#5cc82b] border-[#5cc82b] text-[#0b0e0c]' : 'border-white/20 bg-white/5 group-hover:border-[#5cc82b]'}`}>
                        {formData.privacyAccepted && <Check className="w-3 h-3" strokeWidth={3} />}
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400 leading-tight">
                      Ich stimme der Datenschutzerklärung zu und willige in die Verarbeitung meiner Daten zur Terminbuchung ein.
                    </span>
                  </label>
                </div>

                {error && (
                  <p className="text-sm text-red-500 font-medium">{error}</p>
                )}

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#5cc82b] hover:bg-[#4eb322] disabled:bg-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed text-[#0b0e0c] font-bold py-4 rounded-xl shadow-lg shadow-[#5cc82b]/20 transition-all focus:outline-none"
                  >
                    {isSubmitting ? 'Wird gebucht...' : 'Termin verbindlich buchen'}
                  </button>
                </div>
                
                <div className="text-center pb-2">
                  <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em]">Bestätigung erfolgt per E-Mail</p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
