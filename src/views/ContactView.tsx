import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Calendar,
  AlertCircle
} from 'lucide-react';

interface ContactViewProps {
  onOpenBooking: () => void;
  isSpanish: boolean;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenBooking, isSpanish }) => {
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryForm.name.trim() || !inquiryForm.phone.trim() || !inquiryForm.message.trim()) {
      setErrorMsg(
        isSpanish
          ? 'Por favor ingrese su nombre, teléfono y mensaje.'
          : 'Please enter your name, contact phone, and message.'
      );
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-semibold tracking-wider uppercase text-teal-800">
          {isSpanish ? 'Ubicación y Atención al Paciente' : 'Get in Touch'}
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mt-1">
          {isSpanish ? 'Contáctenos en Orlando Dental Care' : 'Contact Orlando Dental Care'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
          {isSpanish
            ? 'Estamos aquí para responder sus preguntas sobre citas, seguros y tratamientos. Visítenos en Curry Ford Road o llámenos directamente.'
            : 'Whether you are scheduling your family checkups, seeking emergency relief, or exploring porcelain smile makeovers, our friendly team is ready to assist you.'}
        </p>
      </div>

      {/* Grid: Contact Information & Interactive Inquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Contact & Hours Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Call Card */}
          <div className="bg-teal-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <span className="text-xs uppercase tracking-wider text-teal-300 font-semibold block">
              {isSpanish ? 'Atención Telefónica Directa' : 'Direct Practice Line'}
            </span>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-teal-300" />
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-teal-200 transition-colors"
              >
                {CLINIC_INFO.phone}
              </a>
            </div>
            <p className="text-xs text-teal-100 leading-relaxed">
              {isSpanish
                ? 'Hablamos inglés y español. Si llama fuera de horario, deje su mensaje y nuestro equipo se comunicará a primera hora.'
                : 'English and Spanish spoken. If calling after office hours, please leave a message for our morning triage coordinator.'}
            </p>
          </div>

          {/* Location & Address */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-teal-700" />
              <span>{isSpanish ? 'Dirección de la Consulta' : 'Practice Address'}</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 space-y-1">
              <p className="font-semibold text-slate-900">{CLINIC_INFO.address.street}</p>
              <p>{CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}</p>
            </div>
            <p className="text-xs text-slate-500">
              {isSpanish
                ? 'Amplio estacionamiento gratuito directamente frente a la suite en planta baja.'
                : 'Free ample parking directly in front of our ground-floor suite. Fully wheelchair accessible.'}
            </p>
            <div className="pt-2">
              <a
                href={CLINIC_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-900"
              >
                <span>{isSpanish ? 'Ver ruta en Google Maps' : 'Open in Google Maps'}</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase tracking-wider">
              <Clock className="w-4 h-4 text-teal-700" />
              <span>{isSpanish ? 'Horario Semanal' : 'Weekly Office Hours'}</span>
            </div>
            <ul className="divide-y divide-slate-100 text-xs">
              {CLINIC_INFO.hours.map((h, i) => (
                <li key={i} className="py-2 flex justify-between items-center">
                  <span className="text-slate-700 font-medium">{isSpanish ? h.dayEs : h.day}</span>
                  <span className={`font-mono text-[11px] ${h.day.includes('Thursday') ? 'text-teal-800 font-semibold' : 'text-slate-500'}`}>
                    {isSpanish ? h.hoursEs : h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Right Column: Send a Message / Consultation Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
              {isSpanish ? 'Mensajes y Consultas' : 'Direct Message'}
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              {isSpanish ? 'Escríbanos un Mensaje' : 'Send an Inquiry to Dr. Santos’s Team'}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {isSpanish
                ? 'Le responderemos por teléfono o correo electrónico en menos de 24 horas laborables.'
                : 'We respond to all online inquiries within one business day.'}
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4 bg-teal-50/50 rounded-2xl border border-teal-100">
              <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {isSpanish ? '¡Mensaje Enviado con Éxito!' : 'Message Sent Successfully'}
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                {isSpanish
                  ? `Gracias ${inquiryForm.name}. Nuestro equipo ha recibido su consulta y le contactará a ${inquiryForm.phone} o ${inquiryForm.email} a la brevedad.`
                  : `Thank you, ${inquiryForm.name}. We have received your message and will get in touch with you shortly at ${inquiryForm.phone}.`}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setInquiryForm({ name: '', phone: '', email: '', subject: 'general', message: '' });
                }}
                className="text-xs font-semibold text-teal-800 hover:underline pt-2 cursor-pointer"
              >
                {isSpanish ? 'Enviar otro mensaje' : 'Send another note'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-2 text-xs text-rose-800">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isSpanish ? 'Nombre Completo *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    className="w-full text-xs rounded-lg border border-slate-300 px-3 py-2.5 text-slate-800 focus:outline-teal-600 focus:border-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isSpanish ? 'Teléfono *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(407) 555-0123"
                    value={inquiryForm.phone}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                    className="w-full text-xs rounded-lg border border-slate-300 px-3 py-2.5 text-slate-800 focus:outline-teal-600 focus:border-teal-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isSpanish ? 'Correo Electrónico' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    className="w-full text-xs rounded-lg border border-slate-300 px-3 py-2.5 text-slate-800 focus:outline-teal-600 focus:border-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isSpanish ? 'Motivo de Contacto' : 'Inquiry Type'}
                  </label>
                  <select
                    value={inquiryForm.subject}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, subject: e.target.value })}
                    className="w-full text-xs rounded-lg border border-slate-300 px-3 py-2.5 text-slate-800 focus:outline-teal-600 focus:border-teal-600 bg-white"
                  >
                    <option value="general">{isSpanish ? 'Consulta General' : 'General Question'}</option>
                    <option value="appointment">{isSpanish ? 'Agendar Nueva Cita' : 'Schedule Appointment'}</option>
                    <option value="insurance">{isSpanish ? 'Verificar Seguro Dental' : 'Insurance Verification'}</option>
                    <option value="cosmetic">{isSpanish ? 'Carillas y Cosmética' : 'Cosmetic / Veneers Inquiry'}</option>
                    <option value="implant">{isSpanish ? 'Implantes Dentales' : 'Dental Implants'}</option>
                    <option value="emergency">{isSpanish ? 'Emergencia / Dolor' : 'Emergency / Pain'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isSpanish ? 'Mensaje o Pregunta *' : 'Message *'}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={
                    isSpanish
                      ? 'Cuéntenos cómo podemos ayudarle con su salud o estética dental...'
                      : 'Tell us how we can help with your dental care goals...'
                  }
                  value={inquiryForm.message}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                  className="w-full text-xs rounded-lg border border-slate-300 px-3 py-2.5 text-slate-800 focus:outline-teal-600 focus:border-teal-600 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-6 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSpanish ? 'Enviar Mensaje' : 'Send Message'}</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="py-3 px-6 rounded-xl text-xs font-semibold text-teal-900 bg-teal-50 hover:bg-teal-100 transition-colors border border-teal-200/80 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-700" />
                  <span>{isSpanish ? 'Pedir Cita Online' : 'Book Online'}</span>
                </button>
              </div>
            </form>
          )}

          {/* Map Preview Embed Box */}
          <div className="pt-6 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-800 block mb-2">
              {isSpanish ? 'Mapa de Ubicación' : 'Interactive Location'}
            </span>
            <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[16/9] relative bg-slate-100">
              <iframe
                title="Orlando Dental Care location map"
                src="https://maps.google.com/maps?q=5211+Curry+Ford+Rd,+Suite+1,+Orlando,+FL+32812&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
