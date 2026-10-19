import React, { useState } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenBooking: (serviceId?: string) => void;
  isSpanish: boolean;
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenBooking,
  isSpanish,
  onToggleLanguage
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: isSpanish ? 'Inicio' : 'Home' },
    { id: 'services', label: isSpanish ? 'Tratamientos' : 'Services' },
    { id: 'doctor', label: isSpanish ? 'Dra. Santos' : 'Dr. Santos' },
    { id: 'patients', label: isSpanish ? 'Pacientes' : 'Patients' },
    { id: 'contact', label: isSpanish ? 'Contacto' : 'Contact' },
  ];

  const handleNavClick = (tabId: string) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      {/* Top Bar One-Row Three-Zone Contract: Brand — 4-5 Nav Links — 1 Primary Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left cursor-pointer group whitespace-nowrap shrink-0"
        >
          <span className="font-display text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
            Orlando Dental Care
          </span>
        </button>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 ${
                currentTab === item.id ? 'text-slate-950 font-semibold' : ''
              }`}
            >
              {item.label}
              {currentTab === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-700 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action (+ subtle bilingual switch & mobile toggle) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Subtle bilingual switch */}
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            title={isSpanish ? 'Switch to English' : 'Cambiar a Español'}
            aria-label="Language Toggle"
          >
            <Globe className="w-3.5 h-3.5 text-teal-700" />
            <span className="font-mono text-xs">{isSpanish ? 'EN' : 'ES'}</span>
          </button>

          {/* Primary CTA button */}
          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
          >
            {isSpanish ? 'Pedir Cita' : 'Book Visit'}
          </button>

          {/* Direct Phone Action (Mobile) */}
          <a
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="sm:hidden p-2 text-teal-700 bg-teal-50 rounded-lg"
            aria-label="Call clinic"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentTab === item.id
                    ? 'bg-teal-50 text-teal-900 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 rounded-lg text-center"
            >
              {isSpanish ? 'Solicitar Cita Dental' : 'Request Appointment'}
            </button>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg text-center"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
