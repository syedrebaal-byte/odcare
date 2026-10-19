import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  isSpanish?: boolean;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  isSpanish = false
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceId: preselectedServiceId || 'preventive-cleanings',
    preferredDate: '',
    timeSlot: 'morning',
    insuranceProvider: '',
    patientType: 'new',
    isEmergency: false,
    notes: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.preferredDate) {
      setErrorMsg(
        isSpanish
          ? 'Por favor complete su nombre, teléfono y fecha preferida.'
          : 'Please provide your full name, contact phone, and preferred date.'
      );
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1 rounded-lg"
            aria-label={isSpanish ? 'Cerrar ventana' : 'Close modal'}
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-teal-400 text-xs font-semibold tracking-wider uppercase">
            {isSpanish ? 'Orlando Dental Care · Citas' : 'Orlando Dental Care · Appointments'}
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
            {isSpanish ? 'Solicitar Cita Dental' : 'Request Your Dental Visit'}
          </h2>
          <p className="text-xs text-slate-300 mt-1.5 flex items-center gap-2">
            <span>{CLINIC_INFO.address.street}, Orlando, FL</span>
            <span>·</span>
            <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-teal-300 hover:underline">
              {CLINIC_INFO.phone}
            </a>
          </p>
        </div>

        {submitted ? (
          /* Confirmation Success Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {isSpanish ? '¡Solicitud Recibida con Éxito!' : 'Appointment Request Received'}
              </h3>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                {isSpanish
                  ? `Gracias ${formData.fullName}. Nuestro equipo en Orlando Dental Care revisará su horario para el ${formData.preferredDate} y se comunicará a ${formData.phone} para confirmar su cita.`
                  : `Thank you, ${formData.fullName}. Dr. Santos's team has received your request for ${formData.preferredDate}. Our coordinator will contact you at ${formData.phone} within 2 business hours to confirm your arrival time.`}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-left text-xs text-slate-700 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">{isSpanish ? 'Tratamiento:' : 'Service:'}</span>
                <span className="font-semibold text-slate-900">
                  {SERVICES.find(s => s.id === formData.serviceId)?.name || 'General Dental Consultation'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{isSpanish ? 'Preferencia Horaria:' : 'Time Slot:'}</span>
                <span className="font-medium text-slate-900 capitalize">{formData.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{isSpanish ? 'Atención Bilingüe:' : 'Language:'}</span>
                <span className="font-medium text-teal-700">English / Español</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg bg-teal-700 hover:bg-teal-800 text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{isSpanish ? 'Llamar al (407) 737-9444' : 'Call (407) 737-9444 Now'}</span>
              </a>
              <button
                onClick={resetAndClose}
                className="px-5 py-2.5 text-xs font-medium rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {isSpanish ? 'Volver al Sitio' : 'Return to Website'}
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-2 text-xs text-rose-800">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Emergency Banner Toggle */}
            <div className="p-3 bg-amber-50/80 border border-amber-200/80 rounded-xl flex items-start gap-3">
              <input
                type="checkbox"
                id="isEmergency"
                checked={formData.isEmergency}
                onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 h-4 w-4"
              />
              <label htmlFor="isEmergency" className="text-xs text-amber-900 cursor-pointer">
                <strong>{isSpanish ? '¿Es una emergencia dental urgente?' : 'Is this an urgent dental emergency?'}</strong>{' '}
                {isSpanish
                  ? 'Marque aquí si experimenta dolor agudo, inflamación o fractura dental para atención prioritaria.'
                  : 'Check here for acute toothache, swelling, or trauma so we can accommodate you promptly today.'}
              </label>
            </div>

            {/* Service & Patient Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isSpanish ? 'Servicio Solicitado' : 'Select Treatment'}
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full text-xs rounded-lg border border-slate-300 px-3 py-2 text-slate-800 focus:outline-teal-600 focus:border-teal-600 bg-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {isSpanish ? s.nameEs : s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isSpanish ? '¿Es paciente nuevo?' : 'Patient Status'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, patientType: 'new' })}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all ${
                      formData.patientType === 'new'
                        ? 'border-teal-700 bg-teal-50/80 text-teal-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {isSpanish ? 'Nuevo Paciente' : 'New Patient'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, patientType: 'returning' })}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all ${
                      formData.patientType === 'returning'
                        ? 'border-teal-700 bg-teal-50/80 text-teal-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {isSpanish ? 'Ya Registrado' : 'Returning'}
                  </button>
                </div>
              </div>
            </div>

            {/* Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isSpanish ? 'Nombre y Apellidos *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maria Gonzalez"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full text-xs rounded-lg border border-slate-300 px-3 py-2 text-slate-800 focus:outline-teal-600 focus:border-teal-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isSpanish ? 'Teléfono de Contacto *' : 'Mobile Phone *'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(407) 555-0199"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs rounded-lg border border-slate-300 px-3 py-2 text-slate-800 focus:outline-teal-600 focus:border-teal-600"
                />
              </div>
            </div>

            {/* Email & Insurance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isSpanish ? 'Correo Electrónico' : 'Email Address'}
                </label>
                <input
                  type="email"
                  placeholder="maria@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs rounded-lg border border-slate-300 px-3 py-2 text-slate-800 focus:outline-teal-600 focus:border-teal-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isSpanish ? 'Seguro Dental (o Sin Seguro)' : 'Insurance Provider'}
                </label>
                <input
                  type="text"
                  placeholder={isSpanish ? "Ej. Delta Dental, Cigna, o Particular" : "e.g. Delta Dental, Cigna, or Cash/Self-Pay"}
                  value={formData.insuranceProvider}
                  onChange={(e) => setFormData({ ...formData, insuranceProvider: e.target.value })}
                  className="w-full text-xs rounded-lg border border-slate-300 px-3 py-2 text-slate-800 focus:outline-teal-600 focus:border-teal-600"
                />
              </div>
            </div>

            {/* Date & Time slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  <span>{isSpanish ? 'Fecha Preferida *' : 'Preferred Date *'}</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full text-xs rounded-lg border border-slate-300 px-3 py-2 text-slate-800 focus:outline-teal-600 focus:border-teal-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  <span>{isSpanish ? 'Franja Horaria' : 'Preferred Time'}</span>
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full text-xs rounded-lg border border-slate-300 px-3 py-2 text-slate-800 focus:outline-teal-600 focus:border-teal-600 bg-white"
                >
                  <option value="morning">
                    {isSpanish ? 'Mañana (8:00 AM – 12:00 PM)' : 'Morning (8:00 AM – 12:00 PM)'}
                  </option>
                  <option value="afternoon">
                    {isSpanish ? 'Tarde (12:00 PM – 5:00 PM)' : 'Afternoon (12:00 PM – 5:00 PM)'}
                  </option>
                  <option value="thursday-evening">
                    {isSpanish ? 'Jueves Tarde (5:00 PM – 7:00 PM Extendido)' : 'Thursday Evening (5:00 PM – 7:00 PM)'}
                  </option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isSpanish ? 'Comentarios o Sensibilidad Especial' : 'Notes or Concerns (Optional)'}
              </label>
              <textarea
                rows={2}
                placeholder={
                  isSpanish
                    ? '¿Tiene dolor, sensibilidad, o requiere anestesia suave para ansiedad?'
                    : 'Any tooth pain, anxiety, or specific goals for your visit?'
                }
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full text-xs rounded-lg border border-slate-300 px-3 py-2 text-slate-800 focus:outline-teal-600 focus:border-teal-600 resize-none"
              />
            </div>

            {/* Trust disclaimer */}
            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
              <span>
                {isSpanish
                  ? 'Su información está protegida bajo estándares HIPAA. Cero llamadas comerciales.'
                  : 'Your information is confidential and protected under HIPAA. No spam calls.'}
              </span>
            </div>

            {/* Submit Button & Direct Call CTA */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm text-center"
              >
                {isSpanish ? 'Confirmar Solicitud de Cita' : 'Submit Appointment Request'}
              </button>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-xs font-semibold text-teal-900 bg-teal-50 hover:bg-teal-100 transition-colors border border-teal-200/80 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-teal-700" />
                <span>{isSpanish ? 'Llamar Directo' : 'Call (407) 737-9444'}</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
