/**
 * Orlando Dental Care - Verified Practice Data
 * Source: https://www.odcare.com/
 * Address: 5211 Curry Ford Rd, Suite 1, Orlando, FL 32812
 * Tel: (407) 737-9444
 */

export interface ServiceDetail {
  id: string;
  name: string;
  nameEs: string;
  category: 'general' | 'cosmetic' | 'restorative' | 'advanced' | 'emergency';
  tagline: string;
  taglineEs: string;
  description: string;
  descriptionEs: string;
  keyBenefits: string[];
  keyBenefitsEs: string[];
  whatToExpect: string;
  whatToExpectEs: string;
  idealFor: string;
  idealForEs: string;
  image?: string;
}

export const CLINIC_INFO = {
  name: "Orlando Dental Care",
  shortName: "ODcare",
  tagline: "Modern, Gentle, and Comprehensive Dentistry for the Whole Family",
  taglineEs: "Odontología Moderna, Delicada e Integral para Toda la Familia",
  phone: "(407) 737-9444",
  phoneRaw: "+14077379444",
  email: "orlandodentalcare@gmail.com",
  address: {
    street: "5211 Curry Ford Rd, Suite 1",
    city: "Orlando",
    state: "FL",
    zip: "32812",
    full: "5211 Curry Ford Rd, Suite 1, Orlando, FL 32812",
    googleMapsUrl: "https://maps.google.com/?q=5211+Curry+Ford+Rd+Suite+1+Orlando+FL+32812"
  },
  rating: 4.9,
  reviewCount: 380,
  yearsExperience: "25+",
  bilingual: "Bilingual Care: English & Spanish (Hablamos Español)",
  hours: [
    { day: "Monday", hours: "8:00 AM – 5:00 PM", dayEs: "Lunes", hoursEs: "8:00 AM – 5:00 PM" },
    { day: "Tuesday", hours: "8:00 AM – 5:00 PM", dayEs: "Martes", hoursEs: "8:00 AM – 5:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 5:00 PM", dayEs: "Miércoles", hoursEs: "8:00 AM – 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM – 7:00 PM (Extended Evening)", dayEs: "Jueves", hoursEs: "9:00 AM – 7:00 PM (Horario Extendido)" },
    { day: "Friday", hours: "8:00 AM – 1:00 PM", dayEs: "Viernes", hoursEs: "8:00 AM – 1:00 PM" },
    { day: "Saturday – Sunday", hours: "Closed (Emergency on-call)", dayEs: "Sábado – Domingo", hoursEs: "Cerrado (Guardia para Emergencias)" }
  ],
  doctor: {
    name: "Dr. A. Viviana Santos, DDS",
    title: "Founder & Lead Dental Director",
    titleEs: "Fundadora y Directora Odontológica",
    degrees: "DDS, University of Florida IEDP | El Bosque University (1996)",
    bio: "Dr. A. Viviana Santos earned her initial dental degree in 1996 from El Bosque University in Bogotá, Colombia, followed by post-graduate specialization in Public Health at the prestigious University El Rosario. In 1999, Dr. Santos relocated to Florida and graduated from the International Educated Dentists Program (IEDP) at the University of Florida College of Dentistry.",
    bioEs: "La Dra. A. Viviana Santos obtuvo su título de odontología en 1996 en la Universidad El Bosque de Bogotá, Colombia, y completó una especialización en Salud Pública en la prestigiosa Universidad El Rosario. En 1999 se trasladó a Florida y se graduó del Programa para Odontólogos Formados en el Extranjero (IEDP) de la Facultad de Odontología de la Universidad de Florida.",
    philosophy: "Practicing for over 25 years in Central Florida, Dr. Santos believes dentistry should be compassionate, gentle, and centered around each patient's individual comfort. Known for putting even the most anxious patients at ease, she takes time to explain every option thoroughly in both English and Spanish.",
    philosophyEs: "Con más de 25 años de ejercicio en Florida Central, la Dra. Santos cree que la odontología debe ser compasiva, delicada y centrada en el bienestar de cada paciente. Destacada por brindar tranquilidad incluso a pacientes nerviosos, explica detalladamente cada opción en inglés y español.",
    memberships: [
      "American Dental Association (ADA)",
      "Florida Dental Association (FDA)",
      "Central District Dental Association (CDDA)",
      "University of Florida Dental Alumni Association"
    ]
  },
  insuranceAccepted: [
    "Delta Dental PPO / Premier",
    "Cigna Dental DPPO",
    "Aetna Dental PPO",
    "MetLife Dental",
    "Guardian DentalGuard",
    "Humana Dental",
    "UnitedHealthcare Dental",
    "Florida Blue (BCBS)",
    "CareCredit Healthcare Financing (0% Interest Plans Available)"
  ],
  amenities: [
    "100% Mercury-Free, Biocompatible Composite Restorations",
    "Ultra Low-Dose Digital Radiography (Up to 90% less radiation)",
    "Intraoral 3D Digital Scanning (No messy impression putty)",
    "Extended Thursday Evening Hours for Busy Schedules",
    "Fluent Bilingual Staff (English & Spanish)",
    "Gentle Touch Protocol for Anxious & Sensitive Patients"
  ]
};

export const SERVICES: ServiceDetail[] = [
  {
    id: "preventive-cleanings",
    name: "Preventive Exams & Cleanings",
    nameEs: "Exámenes Preventivos y Limpiezas",
    category: "general",
    tagline: "Preserving your natural smile through gentle, thorough diagnostic care.",
    taglineEs: "Preservando su sonrisa natural mediante un cuidado diagnóstico delicado y riguroso.",
    description: "Every healthy smile begins with prevention. Our comprehensive examinations combine gentle ultrasonic cleanings, periodontal pocket depth evaluation, oral cancer screenings, and high-definition low-radiation digital x-rays to catch minor issues before they become complex.",
    descriptionEs: "Toda sonrisa sana comienza con la prevención. Nuestros exámenes exhaustivos combinan limpiezas ultrasónicas suaves, evaluación periodontal, despistaje de cáncer oral y radiografías digitales de ultra baja radiación.",
    keyBenefits: [
      "Gentle ultrasonic plaque and tartar removal",
      "Comprehensive periodontal gum tissue evaluation",
      "Ultra-low radiation digital radiography",
      "Personalized at-home preventive guidance"
    ],
    keyBenefitsEs: [
      "Eliminación ultrasónica suave de placa y sarro",
      "Evaluación exhaustiva de encías y soporte periodontal",
      "Radiografías digitales de mínima radiación",
      "Instrucciones preventivas personalizadas"
    ],
    whatToExpect: "A 45–60 minute gentle visit including digital imaging, gum health scoring, polish, and a clear consultation with Dr. Santos.",
    whatToExpectEs: "Una visita relajada de 45 a 60 minutos con diagnóstico digital, revisión de encías, pulido y consulta clara con la Dra. Santos.",
    idealFor: "Patients of all ages due for their 6-month wellness checkup or returning after a gap in dental visits.",
    idealForEs: "Pacientes de todas las edades para su revisión semestral o que retoman su cuidado dental tras un tiempo sin visitar al dentista."
  },
  {
    id: "porcelain-veneers",
    name: "Porcelain Veneers & Smile Makeovers",
    nameEs: "Carillas de Porcelana y Diseño de Sonrisa",
    category: "cosmetic",
    tagline: "Handcrafted, ultra-thin ceramic veneers tailored to your facial harmony.",
    taglineEs: "Carillas cerámicas ultrafinas diseñadas a mano según la armonía de su rostro.",
    description: "Transform chipped, spaced, discolored, or uneven teeth with custom-crafted porcelain veneers. Dr. Santos crafts each smile with meticulous attention to natural translucency, light reflection, and facial symmetry.",
    descriptionEs: "Transforme dientes astillados, espaciados, manchados o irregulares con carillas de porcelana a medida. La Dra. Santos diseña cada sonrisa con atención a la translucidez natural y la simetría facial.",
    keyBenefits: [
      "Stain-resistant high-grade medical porcelain",
      "Conservative tooth preparation preserving natural enamel",
      "Natural luminescence indistinguishable from natural teeth",
      "Long-lasting smile transformation with proper care"
    ],
    keyBenefitsEs: [
      "Porcelana médica de alta gama resistente a manchas",
      "Preparación conservadora que cuida el esmalte dental",
      "Luminiscencia natural idéntica al diente original",
      "Resultados duraderos y de máxima belleza estética"
    ],
    whatToExpect: "Initial aesthetic consultation and digital smile preview, followed by minimal preparation and final artistic bonding.",
    whatToExpectEs: "Consulta estética inicial con simulación digital, preparación mínima y cementado artístico definitivo.",
    idealFor: "Patients with permanent discoloration, chips, gaps, or worn dental enamel seeking a radiant smile.",
    idealForEs: "Pacientes con manchas rebeldes, desgastes, separaciones o esmalte envejecido que desean renovar su sonrisa."
  },
  {
    id: "dental-implants",
    name: "Dental Implants & Tooth Replacement",
    nameEs: "Implantes Dentales y Reemplazo Fijo",
    category: "restorative",
    tagline: "The gold standard for permanent, natural-feeling tooth replacement.",
    taglineEs: "El estándar de oro para reponer dientes perdidos de manera fija y permanente.",
    description: "Dental implants fuse directly with your jawbone via biocompatible titanium or zirconia posts, acting like natural tooth roots. Restored with custom ceramic crowns, they look, chew, and feel identical to natural teeth while preventing jaw bone loss.",
    descriptionEs: "Los implantes dentales se integran al hueso maxilar mediante postes biocompatibles de titanio, actuando como raíces naturales. Con coronas cerámicas hechas a medida, se sienten y funcionan como dientes reales.",
    keyBenefits: [
      "Permanently anchored; no slipping or clicking like loose dentures",
      "Protects adjacent healthy teeth from being shaved for bridges",
      "Maintains facial structure and prevents bone resorption",
      "Restores 100% natural chewing strength"
    ],
    keyBenefitsEs: [
      "Fijación definitiva; sin movimientos molestos como las prótesis removibles",
      "No requiere desgastar dientes vecinos sanos",
      "Conserva la estructura ósea facial y la juventud de la mandíbula",
      "Recupera el 100% de la fuerza de mordida natural"
    ],
    whatToExpect: "3D computerized planning, gentle surgical placement with local numbing, healing period, and custom ceramic restoration.",
    whatToExpectEs: "Planificación digital 3D, colocación guiada con anestesia localizada y colocación de la corona definitiva.",
    idealFor: "Patients missing one tooth, multiple teeth, or seeking full-arch secure implant-supported bridges.",
    idealForEs: "Pacientes con pérdida de una o varias piezas dentales o que buscan una fijación total y definitiva."
  },
  {
    id: "invisalign",
    name: "Invisalign® Clear Aligners",
    nameEs: "Ortodoncia Invisible Invisalign®",
    category: "cosmetic",
    tagline: "Discreet orthodontic alignment without metal brackets or wires.",
    taglineEs: "Alineación dental discreta sin brackets ni alambres metálicos.",
    description: "Straighten crowded teeth, close gaps, and correct bite alignment discreetly. Using a series of virtually invisible, removable medical-grade clear aligners, you can eat your favorite foods and brush normally throughout treatment.",
    descriptionEs: "Corrija apiñamiento, espacios y mordidas de forma discreta. Mediante una serie de alineadores transparentes y removibles de grado médico, puede comer con libertad y cepillarse cómodamente.",
    keyBenefits: [
      "Virtually invisible in social and professional environments",
      "Removable for effortless eating, brushing, and flossing",
      "No metal wires, brackets, or mouth irritation",
      "Predictable 3D digital treatment progression timeline"
    ],
    keyBenefitsEs: [
      "Prácticamente imperceptibles en el entorno laboral y social",
      "Removibles para comer y mantener una higiene perfecta",
      "Sin alambres metálicos ni llagas en la boca",
      "Visualización digital 3D del resultado antes de comenzar"
    ],
    whatToExpect: "Digital 3D intraoral scan, customized aligner delivery, brief check-ins every 6–8 weeks, and beautiful results in months.",
    whatToExpectEs: "Escaneo intraoral digital 3D, entrega de alineadores personalizados y revisiones periódicas cada 6 a 8 semanas.",
    idealFor: "Adults and teens desiring a straighter smile without traditional metal braces.",
    idealForEs: "Adultos y jóvenes que buscan corregir su alineación sin brackets tradicionales."
  },
  {
    id: "mercury-free-fillings",
    name: "Mercury-Free Composite Restorations",
    nameEs: "Empastes Estéticos Libres de Mercurio",
    category: "restorative",
    tagline: "Tooth-colored, bonded composite resin that blends invisibly.",
    taglineEs: "Resina compuesta del color exacto del diente que se fusiona de forma invisible.",
    description: "At Orlando Dental Care, we do not place dark silver amalgam mercury fillings. We exclusively use tooth-colored, biocompatible composite resins that chemically bond to the natural tooth structure, sealing against micro-leakage and restoring tooth strength.",
    descriptionEs: "En Orlando Dental Care no utilizamos amalgamas de plata con mercurio. Empleamos exclusivamente resinas compuestas biocompatibles del tono exacto de su esmalte, sellando la pieza y devolviéndole su resistencia original.",
    keyBenefits: [
      "100% free of elemental mercury and heavy metals",
      "Custom shade-matched to your exact tooth enamel",
      "Bonds directly to tooth structure, requiring less drilling",
      "Thermal expansion identical to natural enamel"
    ],
    keyBenefitsEs: [
      "100% libres de mercurio y metales pesados",
      "Tono seleccionado con precisión para igualar su diente",
      "Adhesión química que preserva mayor cantidad de diente sano",
      "Resistencia térmica idéntica al esmalte dental"
    ],
    whatToExpect: "Gentle single-visit procedure with comfortable anesthesia, gentle cleaning of decay, and immediate light-cured finish.",
    whatToExpectEs: "Procedimiento en una sola cita con anestesia suave, desinfección del área y fotocurado inmediato.",
    idealFor: "New cavities or replacing old, cracked, discolored metal amalgam fillings.",
    idealForEs: "Caries recientes o sustitución de viejos empastes oscuros de amalgama."
  },
  {
    id: "emergency-dentistry",
    name: "Emergency Dental Care",
    nameEs: "Atención Dental de Emergencia",
    category: "emergency",
    tagline: "Prompt relief for toothaches, chipped teeth, and dental trauma.",
    taglineEs: "Alivio rápido para dolor agudo, fracturas dentales y traumatismos.",
    description: "Dental pain and accidents can happen without warning. Dr. Santos prioritizes urgent same-day appointments to diagnose the root cause, eliminate severe discomfort, and protect your natural teeth.",
    descriptionEs: "El dolor dental y los accidentes ocurren sin previo aviso. La Dra. Santos atiende urgencias en el mismo día para calmar el dolor de forma inmediata y salvar las piezas comprometidas.",
    keyBenefits: [
      "Same-day emergency availability during clinic hours",
      "Immediate diagnosis with high-definition digital x-rays",
      "Compassionate, rapid pain relief protocols",
      "Long-term restorative plans to prevent recurrence"
    ],
    keyBenefitsEs: [
      "Citas prioritarias en el mismo día laborable",
      "Diagnóstico instantáneo con radiografía digital",
      "Protocolos dedicados a eliminar el dolor rápidamente",
      "Planes reparadores definitivos para evitar recaídas"
    ],
    whatToExpect: "Immediate priority check-in, focused diagnostic imaging, targeted local relief, and clear explanation of options.",
    whatToExpectEs: "Recepción prioritaria, imagenología focalizada, anestesia y alivio del dolor, junto a un plan claro de reparación.",
    idealFor: "Severe toothaches, broken or dislodged teeth, lost crowns, or acute swelling.",
    idealForEs: "Dolores agudos, dientes partidos o golpeados, coronas caídas o inflamación repentina."
  }
];

export const VERIFIED_REVIEWS = [
  {
    author: "Maria C.",
    location: "Orlando, FL",
    date: "Verified Patient",
    rating: 5,
    text: "Dr. Santos is the kindest and most attentive dentist I have ever had. I have had dental anxiety since childhood, but her gentle approach and bilingual staff made me feel completely relaxed. My fillings look completely natural!",
    textEs: "La Dra. Santos es la dentista más amable y atenta que he conocido. Su trato delicado y la atención en español me hicieron sentir completamente relajada. ¡Mis empastes quedaron preciosos y naturales!",
    service: "General & Restorative Care"
  },
  {
    author: "David R.",
    location: "Curry Ford East",
    date: "Verified Patient",
    rating: 5,
    text: "Outstanding dental practice. The office is spotlessly clean and modern, and having Thursday evening appointments is a lifesaver for my work schedule. Dr. Santos explained my implant process step-by-step with zero sales pressure.",
    textEs: "Una clínica dental excepcional. Las instalaciones son modernas e impecables, y el horario extendido de los jueves por la tarde es perfecto para mi trabajo. Me explicaron el implante con total claridad.",
    service: "Dental Implant Restoration"
  },
  {
    author: "Elena G.",
    location: "Conway / Orlando",
    date: "Verified Patient",
    rating: 5,
    text: "I completed my Invisalign treatment with Dr. Santos, and the results exceeded my expectations! Her team treats you like family from the moment you walk through the door. Highly recommend Orlando Dental Care.",
    textEs: "Completé mi tratamiento de Invisalign con la Dra. Santos y los resultados superaron mis expectativas. El equipo te hace sentir como en casa desde el primer momento. 100% recomendados.",
    service: "Invisalign Clear Aligners"
  }
];

export const FAQS = [
  {
    q: "Do you accept my dental insurance?",
    qEs: "¿Aceptan mi seguro dental?",
    a: "We work with most major PPO dental insurance plans, including Delta Dental, Cigna, MetLife, Aetna, Guardian, Humana, Florida Blue, and UnitedHealthcare. Our team files claims directly on your behalf to maximize your benefits.",
    aEs: "Trabajamos con la mayoría de los seguros PPO, incluyendo Delta Dental, Cigna, MetLife, Aetna, Guardian, Florida Blue y UnitedHealthcare. Gestionamos todas las reclamaciones directamente para maximizar sus beneficios."
  },
  {
    q: "What if I do not have dental insurance?",
    qEs: "¿Qué opciones tengo si no cuento con seguro dental?",
    a: "We believe everyone deserves exceptional dental health. We offer transparent pricing, flexible financing through CareCredit (including 0% interest promo periods), and custom payment schedules for comprehensive care.",
    aEs: "Ofrecemos tarifas claras, financiamiento flexible a través de CareCredit (con opciones al 0% de interés promocional) y planes de pago personalizados para que pueda recibir el tratamiento que necesita."
  },
  {
    q: "Do you speak Spanish at the clinic?",
    qEs: "¿Hablan español en la consulta?",
    a: "Yes! Dr. Viviana Santos is originally from Bogotá, Colombia, and our clinical and front desk team speaks fluent English and Spanish. We are proud to serve Orlando's diverse multicultural community.",
    aEs: "¡Sí, totalmente! La Dra. Viviana Santos es originaria de Bogotá, Colombia, y tanto ella como nuestro equipo de recepción y asistentes hablan español e inglés con total fluidez."
  },
  {
    q: "How do you help patients who experience dental anxiety?",
    qEs: "¿Cómo ayudan a pacientes que sienten miedo o ansiedad dental?",
    a: "Dr. Santos is celebrated for her gentle touch and patient, unhurried chairside manner. We provide warm blankets, explain every step beforehand, use gentle topical numbing gels, and pause whenever you need.",
    aEs: "La Dra. Santos se distingue por su trato paciente y delicado. Explicamos cada paso antes de actuar, usamos anestésicos tópicos indoloros y hacemos todas las pausas que usted necesite."
  },
  {
    q: "Where are you located and is parking available?",
    qEs: "¿Dónde están ubicados y hay estacionamiento?",
    a: "We are conveniently located at 5211 Curry Ford Rd, Suite 1 in Orlando, FL 32812, with ample free front parking directly outside our ground-floor suite.",
    aEs: "Estamos convenientemente ubicados en 5211 Curry Ford Rd, Suite 1 en Orlando, FL 32812, con amplio estacionamiento gratuito frente a nuestra entrada en planta baja."
  }
];
