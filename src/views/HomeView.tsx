import React from 'react';
import { CLINIC_INFO, SERVICES, VERIFIED_REVIEWS } from '../data/clinicData';
import { ASSETS } from '../data/assets';
import { InteractiveTooth3D } from '../components/InteractiveTooth3D';
import { SmileComparisonSlider } from '../components/SmileComparisonSlider';
import { 
  Phone, 
  Calendar, 
  Star, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  CheckCircle,
  MapPin,
  ChevronRight
} from 'lucide-react';

interface HomeViewProps {
  onOpenBooking: (serviceId?: string) => void;
  onSelectTab: (tab: string) => void;
  isSpanish: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onOpenBooking,
  onSelectTab,
  isSpanish
}) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headline & Intent */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 bg-teal-50/90 border border-teal-200/80 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>
                  {isSpanish
                    ? 'Atención Odontológica Personalizada en Orlando, FL'
                    : 'Personalized, Gentle Dentistry in Orlando, FL'}
                </span>
                <span className="text-teal-400">·</span>
                <span className="font-medium text-teal-900">
                  {isSpanish ? 'Hablamos Español' : 'Bilingual Team'}
                </span>
              </div>

              {/* Marquee Headline */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12]" style={{ textWrap: 'balance' }}>
                {isSpanish ? (
                  <>
                    Odontología moderna y delicada para <span className="text-teal-800">toda su familia</span>
                  </>
                ) : (
                  <>
                    A higher standard of <span className="text-teal-800">gentle, modern dentistry</span> for your family
                  </>
                )}
              </h1>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                {isSpanish
                  ? 'Guiada por la Dra. A. Viviana Santos con más de 25 años de experiencia clínica. Brindamos una atención cercana y sin dolor: desde chequeos preventivos hasta diseño de sonrisa, implantes y ortodoncia invisible.'
                  : 'Led by Dr. A. Viviana Santos with over 25 years of trusted clinical care in Central Florida. Experience stress-free appointments, mercury-free restorations, dental implants, and porcelain smile artistry in our modern Orlando suite.'}
              </p>

              {/* Primary Action Zone */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm hover:shadow group cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>{isSpanish ? 'Solicitar Cita Online' : 'Schedule Your Visit'}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-medium rounded-xl text-slate-800 bg-white hover:bg-slate-50 transition-colors border border-slate-300/80 shadow-2xs"
                >
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span className="font-mono">{CLINIC_INFO.phone}</span>
                </a>
              </div>

              {/* Trust Metadata Strip (No pill sandwich) */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500">
                <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-mono font-semibold text-slate-900">4.9 / 5.0</span>
                  <span>({CLINIC_INFO.reviewCount}+ {isSpanish ? 'opiniones' : 'verified reviews'})</span>
                </div>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>{isSpanish ? 'Jueves hasta las 7:00 PM' : 'Thursday Open Until 7:00 PM'}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>{isSpanish ? '5211 Curry Ford Rd' : '5211 Curry Ford Rd'}</span>
              </div>
            </div>

            {/* Right Column: Hero High-Res Treatment Suite Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[4/3] lg:aspect-[5/4] bg-slate-100 group">
                <img
                  src={ASSETS.heroClinic}
                  alt="Modern ergonomic treatment suite at Orlando Dental Care with natural light"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/images/hero_dental_clinic.jpg')) {
                      target.src = '/images/hero_dental_clinic.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-white/60 shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-teal-800 block">
                      {isSpanish ? 'Instalaciones Modernas' : 'Private Dental Suite'}
                    </span>
                    <span className="text-xs text-slate-800 font-medium block">
                      {isSpanish ? 'Tecnología digital de mínima radiación' : 'Ultra Low-Dose Digital Radiography & 3D Scans'}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 shrink-0">
                    Orlando, FL
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4-COLUMN TRUST VALUE PROPOSITION STRIP */}
      <section className="border-y border-slate-200/80 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            
            <div className="space-y-1">
              <span className="font-mono text-2xl font-bold text-slate-900 tracking-tight">4.9 ★</span>
              <h3 className="text-xs font-semibold text-slate-800">
                {isSpanish ? 'Calificación Promedio' : 'Patient Satisfaction'}
              </h3>
              <p className="text-[11px] text-slate-500">
                {isSpanish ? 'Más de 380 pacientes satisfechos' : 'Over 380 authentic patient reviews'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-2xl font-bold text-slate-900 tracking-tight">25+ Yrs</span>
              <h3 className="text-xs font-semibold text-slate-800">
                {isSpanish ? 'Trayectoria Clínica' : 'Clinical Experience'}
              </h3>
              <p className="text-[11px] text-slate-500">
                {isSpanish ? 'Dra. Santos graduada UF IEDP' : 'Dr. Santos UF IEDP trained'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-2xl font-bold text-slate-900 tracking-tight">100%</span>
              <h3 className="text-xs font-semibold text-slate-800">
                {isSpanish ? 'Sin Mercurio' : 'Mercury-Free'}
              </h3>
              <p className="text-[11px] text-slate-500">
                {isSpanish ? 'Resinas estéticas biocompatibles' : 'Biocompatible composite restorations'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-2xl font-bold text-slate-900 tracking-tight">7:00 PM</span>
              <h3 className="text-xs font-semibold text-slate-800">
                {isSpanish ? 'Jueves Horario Extendido' : 'Extended Evenings'}
              </h3>
              <p className="text-[11px] text-slate-500">
                {isSpanish ? 'Citas después del trabajo' : 'After-work visits on Thursdays'}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE CLINICAL CAPABILITIES / BENTO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-teal-800">
              {isSpanish ? 'Tratamientos Odontológicos Especializados' : 'Comprehensive Clinical Offerings'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              {isSpanish ? 'Servicios Odontológicos Integrales' : 'Dentistry Tailored to Every Smile'}
            </h2>
          </div>
          <button
            onClick={() => onSelectTab('services')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-900 transition-colors cursor-pointer"
          >
            <span>{isSpanish ? 'Ver todos los tratamientos' : 'Explore all dental services'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Cosmetic Dentistry & Porcelain Veneers (col-span-2) */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:border-slate-300 transition-all flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium text-teal-700">01. Cosmetic Dentistry</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {isSpanish ? 'Carillas de Porcelana & Diseño Estético' : 'Porcelain Veneers & Smile Makeovers'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {isSpanish
                    ? 'Diseñadas a medida para corregir desgastes, manchas y espacios con una translucidez natural idéntica al esmalte original.'
                    : 'Artisan-crafted ceramic veneers custom-shaded to your facial symmetry. Correct chips, spacing, and deep discoloration with minimal enamel reduction.'}
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onOpenBooking('porcelain-veneers')}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-teal-700 transition-colors"
                >
                  <span>{isSpanish ? 'Consultar diseño de sonrisa' : 'Explore smile makeover'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="md:w-1/2 h-56 md:h-auto relative overflow-hidden bg-slate-100">
              <img
                src={ASSETS.cosmeticSmile}
                alt="Cosmetic dentistry radiant healthy smile"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('/images/cosmetic_smile_care.jpg')) {
                    target.src = '/images/cosmetic_smile_care.jpg';
                  }
                }}
              />
            </div>
          </div>

          {/* Card 2: Dental Implants (col-span-1) */}
          <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between p-6 sm:p-7">
            <div>
              <div className="h-40 rounded-xl overflow-hidden mb-4 bg-slate-100">
                <img
                  src={ASSETS.dentalImplantTech}
                  alt="Dental implant 3D intraoral scanner model"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/images/dental_implant_tech.jpg')) {
                      target.src = '/images/dental_implant_tech.jpg';
                    }
                  }}
                />
              </div>
              <span className="text-xs font-medium text-teal-700">02. Restorative Excellence</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">
                {isSpanish ? 'Implantes Dentales Fijos' : 'Permanent Dental Implants'}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {isSpanish
                  ? 'Reemplazo permanente para dientes ausentes. Firmeza natural sin afectar piezas vecinas.'
                  : 'Titanium root replacement for single or multiple missing teeth with custom ceramic crowns.'}
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenBooking('dental-implants')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-teal-700 transition-colors"
              >
                <span>{isSpanish ? 'Consultar implantes' : 'Book implant consultation'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Invisalign (col-span-1) */}
          <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between p-6 sm:p-7">
            <div>
              <div className="h-40 rounded-xl overflow-hidden mb-4 bg-slate-100">
                <img
                  src={ASSETS.invisalignAligner}
                  alt="Invisalign clear aligner tray"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/images/invisalign_aligner.jpg')) {
                      target.src = '/images/invisalign_aligner.jpg';
                    }
                  }}
                />
              </div>
              <span className="text-xs font-medium text-teal-700">03. Orthodontics</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">
                Invisalign® Clear Aligners
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {isSpanish
                  ? 'Alinee sus dientes de forma discreta sin brackets ni alambres metálicos.'
                  : 'Straighten teeth comfortably with crystal-clear removable aligners. Eat and brush freely.'}
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenBooking('invisalign')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-teal-700 transition-colors"
              >
                <span>{isSpanish ? 'Evaluar alineadores' : 'Evaluate clear aligners'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Preventive Exams & Mercury-Free Fillings (col-span-2) */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:border-slate-300 transition-all p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-medium text-teal-700">04. Prevention & Biocompatible Care</span>
              <h3 className="text-xl font-bold text-slate-900">
                {isSpanish ? 'Exámenes Preventivos y Empastes Libres de Mercurio' : 'Preventive Hygiene & 100% Mercury-Free Composite Fillings'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                {isSpanish
                  ? 'Cuidamos su salud dental a largo plazo mediante diagnósticos tempranos, profilaxis ultrasónica suave y resinas estéticas biocompatibles que preservan el tejido sano de sus dientes.'
                  : 'We prioritize natural tooth conservation. Gentle ultrasonic cleanings, periodontal therapy, and natural shade-matched composite restorations that bond seamlessly to natural tooth enamel.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{isSpanish ? 'Ultrasonido suave para encías sensibles' : 'Gentle ultrasonic plaque removal'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{isSpanish ? 'Cero mercurio ni amalgamas oscuras' : 'Zero silver mercury amalgam'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{isSpanish ? 'Detección temprana con radiografía digital' : 'Low-dose digital x-ray diagnostics'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{isSpanish ? 'Atención dedicada a pacientes nerviosos' : 'Gentle-touch comfort for anxious patients'}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between">
              <button
                onClick={() => onOpenBooking('preventive-cleanings')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-teal-700 transition-colors"
              >
                <span>{isSpanish ? 'Reservar limpieza preventiva' : 'Schedule wellness cleaning'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE INNOVATION SUITE: 3D DENTAL ANATOMY & SMILE COMPARISON */}
      <section className="bg-slate-100/70 border-y border-slate-200/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-teal-800">
              {isSpanish ? 'Innovación Clínica y Transparencia' : 'Clinical Innovation & Patient Clarity'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1" style={{ textWrap: 'balance' }}>
              {isSpanish ? 'Visualice su Salud y Armonía Dental' : 'Interactive Patient Education & Smile Visualizer'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {isSpanish
                ? 'Comprender sus opciones de tratamiento es fundamental para tomar decisiones con confianza.'
                : 'Empowering you with visual understanding of tooth structure, implant longevity, and cosmetic smile enhancement.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* 3D WebGL Tooth Viewer Component */}
            <InteractiveTooth3D isSpanish={isSpanish} />

            {/* Interactive Before & After Smile Slider */}
            <SmileComparisonSlider isSpanish={isSpanish} />
          </div>
        </div>
      </section>

      {/* MEET DR. A. VIVIANA SANTOS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Dr. Santos Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100 shadow-md">
                <img
                  src={ASSETS.drSantos}
                  alt="Dr. A. Viviana Santos, DDS, Founder and Dental Director of Orlando Dental Care"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/images/dentist_dr_santos.jpg')) {
                      target.src = '/images/dentist_dr_santos.jpg';
                    }
                  }}
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent text-white">
                  <span className="text-xs font-semibold text-teal-300 block">
                    {CLINIC_INFO.doctor.title}
                  </span>
                  <span className="text-base font-bold block">
                    {CLINIC_INFO.doctor.name}
                  </span>
                  <span className="text-[11px] text-slate-300 block mt-0.5">
                    {CLINIC_INFO.doctor.degrees}
                  </span>
                </div>
              </div>
            </div>

            {/* Bio & Clinical Credentials */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                <span>{isSpanish ? '25+ Años de Dedicación Clínica' : '25+ Years of Compassionate Care'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {isSpanish ? 'Conozca a la Dra. Viviana Santos' : 'Meet Dr. A. Viviana Santos, DDS'}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isSpanish ? CLINIC_INFO.doctor.bioEs : CLINIC_INFO.doctor.bio}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isSpanish ? CLINIC_INFO.doctor.philosophyEs : CLINIC_INFO.doctor.philosophy}
              </p>

              {/* Memberships */}
              <div className="pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                  {isSpanish ? 'Membresías Profesionales' : 'Professional Memberships'}
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {CLINIC_INFO.doctor.memberships.map((m, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-5 py-2.5 text-xs font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {isSpanish ? 'Consultar con la Dra. Santos' : 'Book with Dr. Santos'}
                </button>
                <button
                  onClick={() => onSelectTab('doctor')}
                  className="px-5 py-2.5 text-xs font-semibold rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  {isSpanish ? 'Leer Trayectoria Completa' : 'Full Background & Credentials'}
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* VERIFIED PATIENT TESTIMONIALS & PROOF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-teal-800">
            {isSpanish ? 'Experiencias de Pacientes Reales' : 'Real Patient Voices'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
            {isSpanish ? 'La Confianza de Nuestra Comunidad' : 'Trusted by Central Florida Families'}
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-slate-900">4.9 Star Rating</span>
            <span>·</span>
            <span>Orlando Dental Care (odcare.com)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERIFIED_REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{isSpanish ? review.textEs : review.text}"
                </p>
              </div>

              {/* Zero-pill clean metadata with typographic separators */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-slate-900 block">{review.author}</span>
                  <span className="text-slate-500 text-[11px]">{review.location}</span>
                </div>
                <span className="text-[11px] font-medium text-teal-700 text-right">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* URGENT EMERGENCY DENTAL CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                {isSpanish ? 'Atención a Urgencias Dentales en el Día' : 'Urgent Dental Care · Same-Day Appointments'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {isSpanish ? '¿Dolor dental agudo o diente fracturado?' : 'Severe toothache, broken crown, or dental trauma?'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                {isSpanish
                  ? 'No sufra innecesariamente. Priorizamos emergencias durante nuestro horario laboral para diagnosticar la causa y calmar el dolor de inmediato.'
                  : 'We prioritize urgent visits during practice hours. Contact our Orlando office right away for immediate relief and professional stabilization.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-xl bg-teal-600 hover:bg-teal-500 text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{isSpanish ? 'Llamar al (407) 737-9444' : 'Call (407) 737-9444'}</span>
              </a>
              <button
                onClick={() => onOpenBooking('emergency-dentistry')}
                className="px-5 py-3 text-xs sm:text-sm font-medium rounded-xl border border-slate-600 hover:bg-slate-800 text-slate-200 transition-colors"
              >
                {isSpanish ? 'Pedir Cita Urgente' : 'Request Emergency Slot'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE LOCATION & CONVENIENT HOURS MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Location & Directions */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold tracking-wider uppercase text-teal-800">
                {isSpanish ? 'Visítenos en Orlando' : 'Visit Our Clinic'}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                5211 Curry Ford Rd, Suite 1
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isSpanish
                  ? 'Convenientemente situados en Curry Ford Road con amplio estacionamiento gratuito justo frente a nuestra puerta. Fácil acceso desde el centro de Orlando, Conway y Lake Underhill.'
                  : 'Centrally situated on Curry Ford Road in Orlando (ZIP 32812) with ample free parking right in front of our ground-floor clinic entrance. Serving Conway, East Orlando, and surrounding communities.'}
              </p>

              <div className="pt-2 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>5211 Curry Ford Rd, Suite 1, Orlando, FL 32812</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                  <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="font-mono text-teal-800 hover:underline">
                    (407) 737-9444
                  </a>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={CLINIC_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2.5 rounded-xl transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  <span>{isSpanish ? 'Abrir en Google Maps' : 'Get Driving Directions'}</span>
                </a>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200/80 rounded-2xl p-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-teal-700" />
                  <span>{isSpanish ? 'Horario de Consulta' : 'Clinical Practice Hours'}</span>
                </div>
                <span className="text-[11px] font-medium text-teal-700">
                  {isSpanish ? 'Abierto de Lunes a Viernes' : 'Mon – Fri Active Care'}
                </span>
              </div>

              <ul className="divide-y divide-slate-200/60 text-xs">
                {CLINIC_INFO.hours.map((h, i) => (
                  <li key={i} className="py-2.5 flex justify-between items-center">
                    <span className="font-medium text-slate-800">
                      {isSpanish ? h.dayEs : h.day}
                    </span>
                    <span className={`font-mono text-[11px] ${h.day.includes('Thursday') ? 'text-teal-800 font-semibold' : 'text-slate-600'}`}>
                      {isSpanish ? h.hoursEs : h.hours}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                {isSpanish
                  ? 'Nota: Los jueves ofrecemos horario extendido vespertino hasta las 7:00 PM para la comodidad de profesionales y estudiantes.'
                  : 'Note: Thursdays feature extended evening appointments until 7:00 PM for working adults and busy family schedules.'}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
