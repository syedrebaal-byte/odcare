import React, { useState, useRef, useCallback } from 'react';
import { ASSETS } from '../data/assets';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

interface SmileComparisonSliderProps {
  isSpanish?: boolean;
}

export const SmileComparisonSlider: React.FC<SmileComparisonSliderProps> = ({ isSpanish = false }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(clampedPos);
  }, []);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm overflow-hidden flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-teal-700">
              {isSpanish ? 'Odontología Estética y Restauradora' : 'Aesthetic & Restorative Precision'}
            </span>
            <h3 className="text-lg font-semibold text-slate-900 mt-0.5">
              {isSpanish ? 'Simulador de Diseño de Sonrisa' : 'Smile Transformation Visualizer'}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span>{isSpanish ? 'Deslice la barra' : 'Drag to compare'}</span>
          </div>
        </div>

        {/* Visual Slider Interactive Container */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="relative w-full h-64 sm:h-72 my-4 rounded-xl overflow-hidden cursor-ew-resize select-none bg-slate-100"
          tabIndex={0}
          role="slider"
          aria-label={isSpanish ? 'Comparador antes y después' : 'Before and after smile comparison slider'}
          aria-valuenow={Math.round(sliderPosition)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setSliderPosition(p => Math.max(0, p - 5));
            if (e.key === 'ArrowRight') setSliderPosition(p => Math.min(100, p + 5));
          }}
        >
          {/* AFTER Image: Radiant healthy smile */}
          <img
            src={ASSETS.cosmeticSmile}
            alt="Orlando Dental Care transformed smile with handcrafted porcelain veneers"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            referrerPolicy="no-referrer"
          />

          {/* BEFORE Layer: Simulated natural dental condition with sepia/subtle desaturation overlay */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={ASSETS.cosmeticSmile}
              alt="Natural baseline smile condition"
              className="absolute inset-0 w-full h-full object-cover object-center max-w-none filter contrast-90 brightness-95 saturate-60"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                height: '100%'
              }}
              referrerPolicy="no-referrer"
            />
            
            {/* Subtle warm tint to emulate natural aged enamel */}
            <div className="absolute inset-0 bg-amber-900/15 mix-blend-multiply" />
            
            {/* Before Badge */}
            <div className="absolute top-3 left-3 bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded">
              {isSpanish ? 'Antes: Desgaste / Tono inicial' : 'Before: Natural Wear'}
            </div>
          </div>

          {/* After Badge */}
          <div className="absolute top-3 right-3 bg-teal-900/80 backdrop-blur-xs text-white text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-teal-300" />
            <span>{isSpanish ? 'Después: Carillas & Blanqueamiento' : 'After: Veneers & Brightening'}</span>
          </div>

          {/* Vertical Divider Line with Grab Handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-700">
              <div className="flex gap-0.5 items-center">
                <span className="w-0.5 h-3 bg-slate-400 rounded-full"></span>
                <span className="w-0.5 h-3 bg-slate-400 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical Notes & Trust Subtext */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>
          {isSpanish
            ? 'Tratamientos personalizados: Carillas, Invisalign y Blanqueamiento profesional'
            : 'Customized care: Porcelain Veneers, Invisalign®, and In-Office Brightening'}
        </span>
        <span className="text-teal-700 font-medium">
          {isSpanish ? 'Dr. Viviana Santos' : 'Dr. Viviana Santos'}
        </span>
      </div>
    </div>
  );
};
