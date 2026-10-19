/**
 * Permanent verified image assets for Orlando Dental Care
 * Bundled directly via Vite asset imports so they are bundled into dist/assets/
 * and copied to /public/images/ so they never disappear on Vercel or any production host.
 */
import heroClinicImg from '../assets/images/hero_dental_clinic_1792415590823.jpg';
import drSantosImg from '../assets/images/dentist_dr_santos_1792415591327.jpg';
import cosmeticSmileImg from '../assets/images/cosmetic_smile_care_1792415592041.jpg';
import dentalImplantTechImg from '../assets/images/dental_implant_tech_1792415593717.jpg';
import invisalignAlignerImg from '../assets/images/invisalign_aligner_1792415593172.jpg';

export const ASSETS = {
  heroClinic: heroClinicImg || '/images/hero_dental_clinic.jpg',
  drSantos: drSantosImg || '/images/dentist_dr_santos.jpg',
  cosmeticSmile: cosmeticSmileImg || '/images/cosmetic_smile_care.jpg',
  dentalImplantTech: dentalImplantTechImg || '/images/dental_implant_tech.jpg',
  invisalignAligner: invisalignAlignerImg || '/images/invisalign_aligner.jpg'
};

export const PUBLIC_FALLBACKS = {
  heroClinic: '/images/hero_dental_clinic.jpg',
  drSantos: '/images/dentist_dr_santos.jpg',
  cosmeticSmile: '/images/cosmetic_smile_care.jpg',
  dentalImplantTech: '/images/dental_implant_tech.jpg',
  invisalignAligner: '/images/invisalign_aligner.jpg'
};
