import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenBooking: () => void;
  isSpanish: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenBooking, isSpanish }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Core Clinic Information & Hours */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Philosophy */}
          <div className="space-y-4">
            <span className="font-display text-xl font-bold tracking-tight text-white block">
              Orlando Dental Care
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isSpanish
                ? 'Atención odontológica integral, compasiva y de vanguardia para toda la familia. Más de 25 años cuidando sonrisas en Florida Central con calidez y dedicación.'
                : 'Modern, gentle, and comprehensive dental wellness for the whole family. Over 25 years of compassionate clinical excellence led by Dr. A. Viviana Santos.'}
            </p>
            <div className="text-xs text-teal-400 font-medium flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>{isSpanish ? 'Atención Bilingüe · English & Español' : 'Bilingual Care · English & Español'}</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              {isSpanish ? 'Contacto Directo' : 'Direct Contact'}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href={CLINIC_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address.full}</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="font-mono text-slate-200">{CLINIC_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-teal-600 hover:bg-teal-500 text-white transition-colors"
              >
                {isSpanish ? 'Solicitar Cita Online' : 'Request Appointment'}
              </button>
            </div>
          </div>

          {/* Clinic Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>{isSpanish ? 'Horario de Atención' : 'Practice Hours'}</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
              {CLINIC_INFO.hours.map((h, i) => (
                <li key={i} className="flex justify-between items-baseline gap-2">
                  <span className="text-slate-300 font-sans">{isSpanish ? h.dayEs : h.day}</span>
                  <span className="text-[11px] text-right">{isSpanish ? h.hoursEs : h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation & Emergency */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              {isSpanish ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => { onSelectTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  {isSpanish ? 'Tratamientos y Servicios' : 'Services & Dental Treatments'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('doctor'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  {isSpanish ? 'Dra. Viviana Santos y Equipo' : 'Meet Dr. Santos & Our Team'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('patients'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  {isSpanish ? 'Seguros Aceptados y CareCredit' : 'Insurance & Financing'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  {isSpanish ? 'Ubicación y Cómo Llegar' : 'Location & Directions'}
                </button>
              </li>
            </ul>

            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-[11px] text-slate-300 mt-3">
              <strong className="text-amber-400 block font-semibold mb-0.5">
                {isSpanish ? 'Atención a Urgencias:' : 'Dental Emergency:'}
              </strong>
              {isSpanish
                ? '¿Dolor repentino o diente fracturado? Contáctenos al (407) 737-9444 para atención prioritaria.'
                : 'Sudden toothache or fractured crown? Call (407) 737-9444 for same-day urgent relief.'}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Quiet Copyright */}
      <div className="border-t border-slate-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Orlando Dental Care (odcare.com). All rights reserved. Dr. A. Viviana Santos, DDS.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>ADA / FDA Member Practice</span>
            <span>·</span>
            <span>HIPAA Compliant</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-rose-500 inline fill-rose-500" />
              <span>in Orlando, FL</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
