import React, { useState } from 'react';
import { CLINIC_INFO, FAQS } from '../data/clinicData';
import { 
  CreditCard, 
  FileText, 
  HelpCircle, 
  CheckCircle2, 
  ChevronDown, 
  ShieldCheck, 
  Calendar,
  Sparkles
} from 'lucide-react';

interface PatientsViewProps {
  onOpenBooking: () => void;
  isSpanish: boolean;
}

export const PatientsView: React.FC<PatientsViewProps> = ({ onOpenBooking, isSpanish }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-semibold tracking-wider uppercase text-teal-800">
          {isSpanish ? 'Información para Pacientes' : 'Patient Experience & Resources'}
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mt-1">
          {isSpanish ? 'Seguros, Financiamiento y Preguntas Frecuentes' : 'Insurance, Financing & Patient Center'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
          {isSpanish
            ? 'Queremos que su experiencia dental sea fluida y transparente desde la primera llamada. Conozca nuestros planes de financiamiento, seguros aceptados y respuestas a dudas habituales.'
            : 'At Orlando Dental Care, we believe transparent healthcare is trustworthy healthcare. Learn about our accepted PPO insurances, CareCredit zero-percent financing, and what to expect during your visits.'}
        </p>
      </div>

      {/* Insurance & Financing 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Card 1: Accepted Insurances */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {isSpanish ? 'Seguros Dentales PPO Aceptados' : 'Accepted Dental PPO Plans'}
              </h2>
              <span className="text-xs text-slate-500">
                {isSpanish ? 'Optimizamos sus beneficios anuales' : 'Maximizing your annual benefits'}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {isSpanish
              ? 'Trabajamos con las principales aseguradoras PPO del país. Nuestro equipo se encarga de verificar su cobertura y enviar las reclamaciones electrónicamente por usted.'
              : 'We accept and coordinate directly with most premier PPO dental plans. Our front office handles all benefit verifications and electronic claim filings.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {CLINIC_INFO.insuranceAccepted.slice(0, 8).map((ins, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>{ins}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
            {isSpanish
              ? '¿No ve su aseguradora en la lista? Llámenos al (407) 737-9444 y con gusto verificaremos su póliza.'
              : 'Don’t see your insurance listed? Call us at (407) 737-9444 and our team will gladly verify your benefits prior to your arrival.'}
          </div>
        </div>

        {/* Card 2: CareCredit & Self-Pay Options */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {isSpanish ? 'Financiamiento con CareCredit' : 'CareCredit Healthcare Financing'}
              </h2>
              <span className="text-xs text-slate-500">
                {isSpanish ? 'Planes al 0% de interés disponibles' : '0% APR promotional financing options'}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {isSpanish
              ? 'La falta de seguro dental nunca debe impedirle tener una boca sana. Ofrecemos financiamiento a través de CareCredit para dividir tratamientos en cuotas mensuales cómodas.'
              : 'Never let insurance limitations delay essential dental care. We partner with CareCredit to offer flexible monthly payment options, including promotional zero-interest terms for qualifying procedures.'}
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">{isSpanish ? 'Planes al 0% de Interés:' : 'Zero-Interest Promotional Plans:'}</strong>
                <span>{isSpanish ? 'Opciones de 6 a 12 meses sin interés en pagos a tiempo.' : '6 or 12-month zero-interest payment terms for qualifying treatments.'}</span>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">{isSpanish ? 'Pacientes Particulares / Sin Seguro:' : 'Self-Pay & Transparent Estimates:'}</strong>
                <span>{isSpanish ? 'Presupuestos claros y detallados antes de comenzar cualquier procedimiento.' : 'Transparent written estimates provided before treatment begins; no hidden surprise fees.'}</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 px-4 text-xs font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-colors text-center"
            >
              {isSpanish ? 'Solicitar Cita y Consulta Financiera' : 'Book Visit & Discuss Payment Options'}
            </button>
          </div>
        </div>

      </div>

      {/* New Patient Checklist */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-teal-700" />
          <h2 className="text-xl font-bold text-slate-900">
            {isSpanish ? 'Guía para su Primera Visita' : 'Your First Visit: What to Expect'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/70 space-y-2">
            <span className="font-mono text-teal-800 font-bold text-sm">01</span>
            <h4 className="font-semibold text-slate-900">{isSpanish ? 'Qué Traer' : 'What to Bring'}</h4>
            <p>
              {isSpanish
                ? 'Documento de identidad con fotografía, tarjeta de seguro dental vigente y lista de medicamentos habituales si toma alguno.'
                : 'A valid government photo ID, current dental insurance card, and a brief list of any routine medications.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/70 space-y-2">
            <span className="font-mono text-teal-800 font-bold text-sm">02</span>
            <h4 className="font-semibold text-slate-900">{isSpanish ? 'Llegada y Registro' : 'Arrival & Check-In'}</h4>
            <p>
              {isSpanish
                ? 'Llegue 10 minutos antes. Le recibiremos con café o agua y revisaremos juntos su historial médico con total confidencialidad.'
                : 'Arrive 10 minutes prior to your scheduled time. Relax in our quiet reception suite while we confirm your paperwork.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/70 space-y-2">
            <span className="font-mono text-teal-800 font-bold text-sm">03</span>
            <h4 className="font-semibold text-slate-900">{isSpanish ? 'Examen con la Dra. Santos' : 'Comprehensive Evaluation'}</h4>
            <p>
              {isSpanish
                ? 'Revisión minuciosa, radiografías digitales de ultra baja radiación, evaluación periodontal y diálogo abierto de sus metas.'
                : 'A complete clinical examination, low-radiation digital x-rays, gentle periodontal evaluation, and clear treatment plan.'}
            </p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (Accordion) */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-teal-700" />
          <h2 className="text-2xl font-bold text-slate-900">
            {isSpanish ? 'Preguntas Frecuentes de Pacientes' : 'Frequently Asked Patient Questions'}
          </h2>
        </div>

        <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
          {FAQS.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div key={i} className="py-4">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between text-left text-sm sm:text-base font-semibold text-slate-900 hover:text-teal-800 transition-colors py-1 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{isSpanish ? faq.qEs : faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 text-teal-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-2 pb-2 text-xs sm:text-sm text-slate-600 leading-relaxed pr-8">
                    <p>{isSpanish ? faq.aEs : faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
