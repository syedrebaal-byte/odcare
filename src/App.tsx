/**
 * Orlando Dental Care (odcare.com)
 * World-Class Premium Redesign
 * Led by Dr. A. Viviana Santos, DDS
 * 5211 Curry Ford Rd, Suite 1, Orlando, FL 32812
 * Tel: (407) 737-9444
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { DoctorView } from './views/DoctorView';
import { PatientsView } from './views/PatientsView';
import { ContactView } from './views/ContactView';
import { CLINIC_INFO } from './data/clinicData';
import { Calendar, Phone } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isSpanish, setIsSpanish] = useState<boolean>(false);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string>('preventive-cleanings');

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedServiceId(serviceId);
    }
    setIsBookingOpen(true);
  };

  const handleToggleLanguage = () => {
    setIsSpanish(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-slate-800 font-body">
      {/* Top Navigation conforming to Top Bar Contract */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenBooking={handleOpenBooking}
        isSpanish={isSpanish}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomeView
            onOpenBooking={handleOpenBooking}
            onSelectTab={setCurrentTab}
            isSpanish={isSpanish}
          />
        )}

        {currentTab === 'services' && (
          <ServicesView
            onOpenBooking={handleOpenBooking}
            isSpanish={isSpanish}
          />
        )}

        {currentTab === 'doctor' && (
          <DoctorView
            onOpenBooking={() => handleOpenBooking()}
            isSpanish={isSpanish}
          />
        )}

        {currentTab === 'patients' && (
          <PatientsView
            onOpenBooking={() => handleOpenBooking()}
            isSpanish={isSpanish}
          />
        )}

        {currentTab === 'contact' && (
          <ContactView
            onOpenBooking={() => handleOpenBooking()}
            isSpanish={isSpanish}
          />
        )}
      </main>

      {/* Mobile Sticky Quick Action Bar (Under 15% Viewport Cap) */}
      <div className="md:hidden sticky bottom-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 flex items-center gap-3">
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-teal-700" />
          <span>(407) 737-9444</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5 text-teal-300" />
          <span>{isSpanish ? 'Pedir Cita' : 'Book Visit'}</span>
        </button>
      </div>

      {/* Footer */}
      <Footer
        onSelectTab={setCurrentTab}
        onOpenBooking={() => handleOpenBooking()}
        isSpanish={isSpanish}
      />

      {/* Interactive Appointment Request Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={preselectedServiceId}
        isSpanish={isSpanish}
      />
    </div>
  );
}
