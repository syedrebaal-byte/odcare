import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ASSETS } from '../data/assets';
import { 
  GraduationCap, 
  Award, 
  Heart, 
  Languages, 
  ShieldCheck, 
  Calendar, 
  Phone,
  CheckCircle2
} from 'lucide-react';

interface DoctorViewProps {
  onOpenBooking: () => void;
  isSpanish: boolean;
}

export const DoctorView: React.FC<DoctorViewProps> = ({ onOpenBooking, isSpanish }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Hero Bio Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Doctor High-Res Portrait */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[3/4] bg-slate-100">
            <img
              src={ASSETS.drSantos}
              alt="Dr. A. Viviana Santos, DDS, Founder and Clinical Director"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('/images/dentist_dr_santos.jpg')) {
                  target.src = '/images/dentist_dr_santos.jpg';
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-300 block">
                {CLINIC_INFO.doctor.title}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mt-0.5">
                {CLINIC_INFO.doctor.name}
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                {CLINIC_INFO.doctor.degrees}
              </p>
            </div>
          </div>
        </div>

        {/* Doctor Story & Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-1.5 rounded-full">
            <Heart className="w-3.5 h-3.5 text-teal-700" />
            <span>{isSpanish ? 'Más de 25 Años en Florida Central' : 'Over 25 Years Serving Central Florida'}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            {isSpanish ? (
              <>
                Conozca a la <span className="text-teal-800">Dra. A. Viviana Santos</span>
              </>
            ) : (
              <>
                Meet <span className="text-teal-800">Dr. A. Viviana Santos, DDS</span>
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {isSpanish ? CLINIC_INFO.doctor.bioEs : CLINIC_INFO.doctor.bio}
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {isSpanish ? CLINIC_INFO.doctor.philosophyEs : CLINIC_INFO.doctor.philosophy}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>{isSpanish ? 'Agendar Consulta con la Dra. Santos' : 'Schedule with Dr. Santos'}</span>
            </button>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium rounded-xl text-slate-800 bg-white hover:bg-slate-50 transition-colors border border-slate-300/80"
            >
              <Phone className="w-4 h-4 text-teal-700" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Pillars of Care */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            {isSpanish ? 'Formación Académica Rigurosa' : 'Rigorous Dental Education'}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isSpanish
              ? 'Graduada en 1996 de la Universidad El Bosque y con posgrado en Salud Pública en la Universidad El Rosario. Graduada del prestigioso programa IEDP de la Facultad de Odontología de la Universidad de Florida.'
              : 'Initial dental degree conferred in 1996 from El Bosque University, followed by a Public Health specialty at Universidad El Rosario. Completed the University of Florida College of Dentistry IEDP in Gainesville.'}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
            <Languages className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            {isSpanish ? 'Atención Bilingüe Completa' : 'Fluent Bilingual Care'}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isSpanish
              ? 'La Dra. Santos y todo el equipo atienden con fluidez tanto en inglés como en español, asegurando que cada paciente entienda su plan de salud con total claridad y comodidad.'
              : 'Fluent in English and Spanish, Dr. Santos takes time to explain every detail, procedure, and financial option in the language you feel most comfortable speaking.'}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            {isSpanish ? 'Filosofía Delicada y Sin Dolor' : 'Gentle-Touch Clinical Protocol'}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isSpanish
              ? 'Especial dedicación a pacientes con fobia o ansiedad dental. Uso de anestésicos tópicos efectivos, explicaciones paso a paso y un ambiente sereno para un cuidado sin estrés.'
              : 'Renowned throughout Orlando for putting nervous patients at complete ease. Gentle local anesthesia protocols, warm blankets, and unhurried appointments.'}
          </p>
        </div>

      </div>

      {/* Professional Accreditations & Society Memberships */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
              {isSpanish ? 'Membresías Oficiales' : 'Clinical Credentials'}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-0.5">
              {isSpanish ? 'Asociaciones Profesionales Odontológicas' : 'Professional Dental Associations'}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Award className="w-4 h-4 text-teal-700" />
            <span>Active Good Standing Member</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {CLINIC_INFO.doctor.memberships.map((membership, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
              <span className="text-xs font-medium text-slate-800">{membership}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
