import { useState } from 'react';

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
      
      const [hours, minutes] = selectedTime.split(':').map(Number);
      const startObj = new Date(selectedDate);
      startObj.setHours(hours, minutes, 0, 0);
      
      const endObj = new Date(startObj.getTime() + 30 * 60000); // +30 minutes

      const payload = {
        name: formData.name,
        email: formData.email,
        start: startObj.toISOString(),
        end: endObj.toISOString(),
      };

      const res = await fetch('http://localhost:5000/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error("Fehler bei der Buchung. Bitte versuchen Sie es später erneut.");
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
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
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-gl-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-white/10 bg-white/5">
          <div>
            <h2 className="text-xl font-bold text-white">Termin Details</h2>
            {selectedDate && selectedTime && (
              <p className="text-gradient-logo text-xs font-medium uppercase tracking-wider mt-1">
                {selectedDate.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'short' })} • {selectedTime} Uhr
              </p>
            )}
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            type="button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 overflow-y-auto">
          {isSuccess ? (
            <div 
              className="flex flex-col items-center justify-center py-10 text-center"
            >
              <div className="w-20 h-20 bg-gl-green/20 border border-gl-green/50 text-gradient-logo rounded-full flex items-center justify-center mb-6">
                <Check className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Termin erfolgreich gebucht!</h3>
              <p className="text-gl-gray-light text-sm">
                Wir haben Ihnen eine Bestätigung per E-Mail gesendet. Bis bald!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gl-green transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gl-green transition-colors"
                    placeholder="E-Mail Adresse"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select 
                  id="topic"
                  name="topic" 
                  required
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gl-green appearance-none transition-colors"
                >
                  <option value="" disabled className="bg-gl-dark text-slate-500">Thema wählen</option>
                  {topics.map(t => <option key={t} value={t} className="bg-gl-dark text-white">{t}</option>)}
                </select>
                <select
                  id="meetingType"
                  name="meetingType"
                  required
                  value={formData.meetingType}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gl-green appearance-none transition-colors"
                >
                  {meetingTypes.map(type => (
                    <option key={type} value={type} className="bg-gl-dark text-white">{type}</option>
                  ))}
                </select>
              </div>

                {formData.topic === 'Anderes Anliegen' && (
                  <div 
                    className="overflow-hidden"
                  >
                    <textarea 
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gl-green resize-none transition-colors h-24"
                      placeholder="Kurze Beschreibung Ihres Anliegens..."
                    />
                  </div>
                )}

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
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${formData.privacyAccepted ? 'bg-gl-green border-gl-green text-black' : 'border-white/20 bg-white/5 group-hover:border-gl-green'}`}>
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

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gl-green hover:bg-gl-green-hover disabled:bg-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed text-black font-black py-4 rounded-full border-[2px] border-white shadow-lg shadow-gl-green/20 transition-all focus:outline-none uppercase tracking-wider"
                >
                  {isSubmitting ? 'Wird gebucht...' : 'Termin verbindlich buchen'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
