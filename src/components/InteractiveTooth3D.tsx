import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, ShieldCheck, Sparkles, Layers, Check } from 'lucide-react';

interface InteractiveTooth3DProps {
  isSpanish?: boolean;
}

export const InteractiveTooth3D: React.FC<InteractiveTooth3DProps> = ({ isSpanish = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<'enamel' | 'internal' | 'implant'>('enamel');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const toothGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera
    const width = container.clientWidth;
    const height = container.clientHeight || 340;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.replaceChildren(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff8f0, 1.4);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdff0fa, 0.8);
    fillLight.position.set(-5, 2, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.1);
    rimLight.position.set(0, -4, -4);
    scene.add(rimLight);

    // Tooth Anatomy Model Group
    const rootGroup = new THREE.Group();
    toothGroupRef.current = rootGroup;
    scene.add(rootGroup);

    // 1. Enamel Crown (Smooth sculpted molar morphology)
    // Custom lathe / extrusion approximation using smooth compound geometries
    const crownGroup = new THREE.Group();
    
    const crownMat = new THREE.MeshPhysicalMaterial({
      color: 0xfcfbf8,
      roughness: 0.18,
      metalness: 0.05,
      transmission: 0.22,
      thickness: 1.2,
      clearcoat: 0.85,
      clearcoatRoughness: 0.12,
      reflectivity: 0.9,
    });

    // Main Crown Body
    const crownGeo = new THREE.CylinderGeometry(1.28, 1.05, 1.35, 32);
    // Sculpt crown vertices to create natural cusps
    const pos = crownGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const x = pos.getX(i);
      const z = pos.getZ(i);
      if (y > 0.3) {
        // Create 4 distinct natural cusps with occlusal grooves
        const angle = Math.atan2(z, x);
        const cuspLift = Math.sin(angle * 2) * 0.18;
        const valley = Math.cos(angle * 4) * 0.07;
        pos.setY(i, y + cuspLift + valley);
      }
    }
    crownGeo.computeVertexNormals();

    const crownMesh = new THREE.Mesh(crownGeo, crownMat);
    crownMesh.position.y = 0.55;
    crownGroup.add(crownMesh);

    // Occlusal dome cap
    const capGeo = new THREE.SphereGeometry(1.22, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.35);
    const capMesh = new THREE.Mesh(capGeo, crownMat);
    capMesh.position.y = 0.85;
    crownGroup.add(capMesh);

    // Cervical Enamel Bulge
    const neckGeo = new THREE.TorusGeometry(1.02, 0.12, 16, 32);
    const neckMesh = new THREE.Mesh(neckGeo, crownMat);
    neckMesh.rotation.x = Math.PI / 2;
    neckMesh.position.y = -0.15;
    crownGroup.add(neckMesh);

    rootGroup.add(crownGroup);

    // 2. Natural Roots (Bifurcated Molar Roots)
    const rootsGroup = new THREE.Group();
    const rootMat = new THREE.MeshStandardMaterial({
      color: 0xf2ebd9,
      roughness: 0.45,
      metalness: 0.02
    });

    const createRoot = (xOffset: number, curveDir: number) => {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(xOffset * 0.5, -0.15, 0),
        new THREE.Vector3(xOffset * 0.8, -0.9, curveDir * 0.1),
        new THREE.Vector3(xOffset * 0.6 + curveDir * 0.15, -1.8, curveDir * 0.2),
        new THREE.Vector3(xOffset * 0.3 + curveDir * 0.25, -2.4, 0)
      ]);
      const rootGeo = new THREE.TubeGeometry(curve, 24, 0.42, 16, false);
      return new THREE.Mesh(rootGeo, rootMat);
    };

    const rootLeft = createRoot(-0.55, -0.3);
    const rootRight = createRoot(0.55, 0.3);
    rootsGroup.add(rootLeft);
    rootsGroup.add(rootRight);
    rootGroup.add(rootsGroup);

    // 3. Internal Anatomy Core (Pulp chamber & nerve fibers)
    const pulpGroup = new THREE.Group();
    const pulpMat = new THREE.MeshStandardMaterial({
      color: 0xe11d48, // Crimson vital tissue
      roughness: 0.3,
      emissive: 0x9f1239,
      emissiveIntensity: 0.35
    });

    const pulpCoreGeo = new THREE.SphereGeometry(0.48, 16, 16);
    pulpCoreGeo.scale(1, 1.4, 0.8);
    const pulpCore = new THREE.Mesh(pulpCoreGeo, pulpMat);
    pulpCore.position.y = 0.35;
    pulpGroup.add(pulpCore);

    // Canal nerves
    const canalCurveL = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.2, 0.1, 0),
      new THREE.Vector3(-0.4, -0.8, 0),
      new THREE.Vector3(-0.25, -2.1, 0)
    ]);
    const canalCurveR = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.2, 0.1, 0),
      new THREE.Vector3(0.4, -0.8, 0),
      new THREE.Vector3(0.25, -2.1, 0)
    ]);
    pulpGroup.add(new THREE.Mesh(new THREE.TubeGeometry(canalCurveL, 16, 0.1, 8, false), pulpMat));
    pulpGroup.add(new THREE.Mesh(new THREE.TubeGeometry(canalCurveR, 16, 0.1, 8, false), pulpMat));
    pulpGroup.visible = false;
    rootGroup.add(pulpGroup);

    // 4. Titanium Dental Implant Component
    const implantGroup = new THREE.Group();
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.88,
      roughness: 0.22,
    });
    const goldAbutmentMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.9,
      roughness: 0.2
    });

    // Abutment collar
    const collarGeo = new THREE.CylinderGeometry(0.72, 0.6, 0.45, 24);
    const collarMesh = new THREE.Mesh(collarGeo, goldAbutmentMat);
    collarMesh.position.y = -0.25;
    implantGroup.add(collarMesh);

    // Threaded Screw Post
    const screwBodyGeo = new THREE.CylinderGeometry(0.55, 0.28, 2.1, 24);
    const screwMesh = new THREE.Mesh(screwBodyGeo, titaniumMat);
    screwMesh.position.y = -1.4;
    implantGroup.add(screwMesh);

    // Thread Ridges
    for (let r = 0; r < 7; r++) {
      const threadGeo = new THREE.TorusGeometry(0.56 - r * 0.035, 0.05, 8, 24);
      const threadMesh = new THREE.Mesh(threadGeo, titaniumMat);
      threadMesh.rotation.x = Math.PI / 2 + 0.1;
      threadMesh.position.y = -0.65 - r * 0.22;
      implantGroup.add(threadMesh);
    }
    implantGroup.visible = false;
    rootGroup.add(implantGroup);

    // Interactive Drag Rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsRotating(false);
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      rootGroup.rotation.y += deltaX * 0.015;
      rootGroup.rotation.x = Math.max(-0.6, Math.min(0.6, rootGroup.rotation.x + deltaY * 0.015));

      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onPointerDown);
    dom.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    dom.addEventListener('touchstart', onPointerDown, { passive: true });
    dom.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 340;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (isRotating && !isDragging) {
        rootGroup.rotation.y += 0.5 * delta;
      }

      // Smooth floating oscillation
      rootGroup.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', onPointerDown);
      dom.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      dom.removeEventListener('touchstart', onPointerDown);
      dom.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      renderer.dispose();
    };
  }, []);

  // Update visual layers based on user selection
  useEffect(() => {
    if (!toothGroupRef.current) return;
    const group = toothGroupRef.current;
    const crownGroup = group.children[0] as THREE.Group;
    const rootsGroup = group.children[1] as THREE.Group;
    const pulpGroup = group.children[2] as THREE.Group;
    const implantGroup = group.children[3] as THREE.Group;

    if (activeLayer === 'enamel') {
      crownGroup.visible = true;
      rootsGroup.visible = true;
      pulpGroup.visible = false;
      implantGroup.visible = false;

      crownGroup.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          child.material.opacity = 1.0;
          child.material.transparent = false;
        }
      });
      rootsGroup.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          child.material.opacity = 1.0;
          child.material.transparent = false;
        }
      });
    } else if (activeLayer === 'internal') {
      crownGroup.visible = true;
      rootsGroup.visible = true;
      pulpGroup.visible = true;
      implantGroup.visible = false;

      crownGroup.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          child.material.transparent = true;
          child.material.opacity = 0.28;
        }
      });
      rootsGroup.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          child.material.transparent = true;
          child.material.opacity = 0.25;
        }
      });
    } else if (activeLayer === 'implant') {
      crownGroup.visible = true;
      rootsGroup.visible = false;
      pulpGroup.visible = false;
      implantGroup.visible = true;

      crownGroup.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          child.material.opacity = 1.0;
          child.material.transparent = false;
        }
      });
    }
  }, [activeLayer]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm overflow-hidden flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-teal-700">
              {isSpanish ? 'Tecnología Clínica Interactiva 3D' : 'Interactive Clinical 3D Anatomy'}
            </span>
            <h3 className="text-lg font-semibold text-slate-900 mt-0.5">
              {isSpanish ? 'Explorador Anatómico Dental' : 'Dental Morphology & Restoration Viewer'}
            </h3>
          </div>
          
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`p-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
              isRotating ? 'bg-teal-50 text-teal-800' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
            title={isSpanish ? 'Alternar rotación automática' : 'Toggle auto-rotation'}
            aria-label={isSpanish ? 'Rotación automática' : 'Auto rotate'}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
            <span className="hidden sm:inline">{isRotating ? (isSpanish ? 'Pausar' : 'Rotate') : (isSpanish ? 'Girar' : 'Static')}</span>
          </button>
        </div>

        {/* 3D WebGL Canvas Container */}
        <div 
          className="relative w-full h-64 sm:h-72 my-2 cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
          title={isSpanish ? 'Arrastre para rotar en 360 grados' : 'Click & drag to rotate 360°'}
        >
          <div ref={mountRef} className="w-full h-full" />
          
          <div className="absolute bottom-2 right-2 bg-slate-900/60 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-medium pointer-events-none">
            {isSpanish ? 'Arrastre para rotar 360°' : 'Drag to rotate 360°'}
          </div>
        </div>
      </div>

      {/* Layer selector & Clinical Educational Card */}
      <div className="space-y-4 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100/80 rounded-xl">
          <button
            onClick={() => setActiveLayer('enamel')}
            className={`flex-1 py-2 px-2 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeLayer === 'enamel'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span className="truncate">{isSpanish ? 'Esmalte Natural' : 'Natural Enamel'}</span>
          </button>

          <button
            onClick={() => setActiveLayer('internal')}
            className={`flex-1 py-2 px-2 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeLayer === 'internal'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span className="truncate">{isSpanish ? 'Pulpa y Nervio' : 'Pulp & Roots'}</span>
          </button>

          <button
            onClick={() => setActiveLayer('implant')}
            className={`flex-1 py-2 px-2 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeLayer === 'implant'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="truncate">{isSpanish ? 'Implante Titanio' : 'Titanium Implant'}</span>
          </button>
        </div>

        {/* Dynamic Clinical Insight Description */}
        <div className="bg-slate-50/70 rounded-xl p-3.5 text-xs text-slate-600 leading-relaxed border border-slate-100">
          {activeLayer === 'enamel' && (
            <p>
              <strong className="text-slate-900 font-semibold">
                {isSpanish ? 'Esmalte Dental y Corona Cerámica: ' : 'Enamel Layer & Ceramic Crown: '}
              </strong>
              {isSpanish
                ? 'El esmalte es la sustancia más dura del cuerpo. En Orlando Dental Care protegemos su estructura natural con empastes de composite libres de mercurio y carillas ultrafinas.'
                : 'Dental enamel is the hardest biological substance in the human body. At Orlando Dental Care, Dr. Santos preserves healthy tooth enamel using mercury-free composite resins and conservative porcelain veneer preparation.'}
            </p>
          )}

          {activeLayer === 'internal' && (
            <p>
              <strong className="text-slate-900 font-semibold">
                {isSpanish ? 'Cámara Pulpar y Endodoncia Suave: ' : 'Pulp Chamber & Root Canal Therapy: '}
              </strong>
              {isSpanish
                ? 'Cuando una caries profunda o trauma alcanza el nervio interior, la terapia de conductos moderna limpia la infección con suavidad para salvar su diente natural sin dolor.'
                : 'When deep decay or trauma inflames the inner dental pulp, modern gentle root canal therapy gently cleanses the canals and seals them, permanently eliminating pain while saving your natural tooth.'}
            </p>
          )}

          {activeLayer === 'implant' && (
            <p>
              <strong className="text-slate-900 font-semibold">
                {isSpanish ? 'Integración Ósea del Implante Dental: ' : 'Biocompatible Implant Osseointegration: '}
              </strong>
              {isSpanish
                ? 'El poste de titanio de grado médico se une biológicamente al hueso de la mandíbula, ofreciendo la misma firmeza que una raíz sana para soportar una corona personalizada.'
                : 'A surgical-grade titanium post bonds directly with your jawbone through osseointegration, creating a rock-solid foundation that prevents bone loss and supports an identical custom porcelain crown.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
