import React, { useState } from 'react';
import { SERVICES, ServiceDetail } from '../data/clinicData';
import { ASSETS } from '../data/assets';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  ArrowRight,
  Info
} from 'lucide-react';

interface ServicesViewProps {
  onOpenBooking: (serviceId?: string) => void;
  isSpanish: boolean;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenBooking, isSpanish }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string>(SERVICES[0].id);

  const categories = [
    { id: 'all', label: isSpanish ? 'Todos los Servicios' : 'All Treatments' },
    { id: 'general', label: isSpanish ? 'Preventiva & General' : 'General & Preventive' },
    { id: 'cosmetic', label: isSpanish ? 'Cosmética & Sonrisa' : 'Cosmetic Artistry' },
    { id: 'restorative', label: isSpanish ? 'Implantes & Restauradora' : 'Restorative & Implants' },
    { id: 'emergency', label: isSpanish ? 'Emergencias' : 'Emergency Dental' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === selectedCategory);

  const activeService = SERVICES.find(s => s.id === expandedServiceId) || SERVICES[0];

  const getServiceImage = (service: ServiceDetail) => {
    if (service.id === 'porcelain-veneers') return ASSETS.cosmeticSmile;
    if (service.id === 'dental-implants') return ASSETS.dentalImplantTech;
    if (service.id === 'invisalign') return ASSETS.invisalignAligner;
    return ASSETS.heroClinic;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-semibold tracking-wider uppercase text-teal-800">
          {isSpanish ? 'Cuidado Odontológico Integral en Orlando' : 'Comprehensive Oral Healthcare'}
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mt-1">
          {isSpanish ? 'Nuestros Tratamientos y Servicios' : 'Dental Services & Clinical Specialties'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
          {isSpanish
            ? 'En Orlando Dental Care combinamos diagnósticos digitales avanzados, resinas biocompatibles sin mercurio y un trato humano paciente para cuidar la salud y estética de su sonrisa.'
            : 'From preventative cleanings to state-of-the-art porcelain veneers, titanium implants, and clear aligners. Every treatment is delivered with Dr. Santos’s hallmark gentle technique.'}
        </p>
      </div>

      {/* Category Filter Tabs (Interactive Segmented Control) */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl max-w-fit">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === cat.id
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Two-Column Master/Detail Clinical Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left List of Services */}
        <div className="lg:col-span-5 space-y-3">
          {filteredServices.map((service) => {
            const isSelected = service.id === activeService.id;
            return (
              <div
                key={service.id}
                onClick={() => setExpandedServiceId(service.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                  isSelected
                    ? 'bg-teal-50/60 border-teal-600/80 shadow-xs'
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-800">
                    {service.category}
                  </span>
                  {isSelected && (
                    <span className="text-xs font-mono font-medium text-teal-800">Selected</span>
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {isSpanish ? service.nameEs : service.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                  {isSpanish ? service.taglineEs : service.tagline}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Active Service Showcase */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-8 sticky top-24">
          
          {/* Header & Image */}
          <div>
            <div className="h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-100 mb-6 relative">
              <img
                src={getServiceImage(activeService)}
                alt={activeService.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-slate-900/75 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {activeService.category}
              </div>
            </div>

            <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
              {isSpanish ? 'Detalles Clínicos' : 'Clinical Overview'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              {isSpanish ? activeService.nameEs : activeService.name}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              {isSpanish ? activeService.taglineEs : activeService.tagline}
            </p>
          </div>

          {/* Description */}
          <div className="prose prose-sm text-slate-600 leading-relaxed text-xs sm:text-sm">
            <p>{isSpanish ? activeService.descriptionEs : activeService.description}</p>
          </div>

          {/* Key Clinical Benefits */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800">
              {isSpanish ? 'Beneficios Principales' : 'Key Patient Benefits'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(isSpanish ? activeService.keyBenefitsEs : activeService.keyBenefits).map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What to Expect & Ideal Candidates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-xs text-slate-600 space-y-1">
              <span className="font-semibold text-slate-900 block">
                {isSpanish ? '¿Qué esperar de la cita?' : 'What to Expect:'}
              </span>
              <p>{isSpanish ? activeService.whatToExpectEs : activeService.whatToExpect}</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-xs text-slate-600 space-y-1">
              <span className="font-semibold text-slate-900 block">
                {isSpanish ? 'Candidatos Ideales:' : 'Ideal For:'}
              </span>
              <p>{isSpanish ? activeService.idealForEs : activeService.idealFor}</p>
            </div>
          </div>

          {/* CTA & Booking button */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-slate-900 block">
                {isSpanish ? '¿Listo para renovar su sonrisa?' : 'Ready to begin care?'}
              </span>
              <span className="text-[11px] text-slate-500">
                {isSpanish ? 'Consulte con la Dra. Santos sin compromiso' : 'Consult with Dr. Santos & receive a personalized plan'}
              </span>
            </div>

            <button
              onClick={() => onOpenBooking(activeService.id)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>{isSpanish ? 'Solicitar Este Tratamiento' : 'Book This Service'}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

        </div>

      </div>

      {/* Medical Responsibility Disclaimer */}
      <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-start gap-3 text-xs text-slate-500">
        <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <p>
          {isSpanish
            ? 'Descargo de responsabilidad médica: La información de esta página tiene fines exclusivamente educativos y no sustituye una consulta ni diagnóstico clínico profesional individualizado. Los resultados específicos varían de acuerdo a la biología dental de cada paciente. Visítenos para una evaluación integral con la Dra. A. Viviana Santos.'
            : 'Healthcare Notice: Information provided on this page is for patient education and does not replace professional dental consultation, clinical diagnosis, or medical advice. Treatment longevity and outcomes vary depending on individual oral health conditions. Schedule a comprehensive evaluation with Dr. A. Viviana Santos for personalized clinical recommendations.'}
        </p>
      </div>

    </div>
  );
};
