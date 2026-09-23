export interface InstitutionContact {
  phone: string
  phoneRaw: string
  whatsapp?: string
  whatsappDisplay?: string
  address: string
  city: string
  region: string
  email: string
  schedule: string
  facebookUrl: string
  mineduCode: string
  licensingResolution: string
}

export interface InstitutionValues {
  mission: string
  vision2031: string
  motto: string
}

export interface CareerModule {
  number: number
  title: string
  description: string
}

export interface Career {
  id: string
  name: string
  code: string
  tagline: string
  description: string
  overview: string
  degreeAwarded: string
  duration: string
  semesters: number
  modality: "Presencial" | "Semipresencial"
  schedule: string
  icon: string
  image: string
  artImage?: string
  schedulePdf?: string
  color: string
  modules: CareerModule[]
  jobOpportunities: string[]
  requirements: string[]
}

export interface AdmissionStep {
  step: string
  title: string
  description: string
  icon: string
  badge?: string
}

export interface AdmissionModality {
  title: string
  description: string
  targetAudience: string
}

export interface NewsItem {
  id: string
  title: string
  excerpt: string
  date: string
  category: "Admisión" | "Institucional" | "Académico" | "Evento"
  image: string
  readTime: string
  pdfUrl?: string
}

export interface AuthorityItem {
  name: string
  role: string
  email?: string
  phone?: string
}

export interface TeacherItem {
  name: string
  programId: string
  programName: string
  courses: string[]
  academicPeriod: string
  cvUrl?: string
}

export interface CampusLocation {
  name: string
  tag: string
  address: string
  description: string
  features: string[]
}

export interface PartnerPlatform {
  name: string
  url: string
  logo: string
  description: string
}

export interface OfficialStateLink {
  name: string
  fullName: string
  description: string
  url: string
  tag: string
  logo: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  program: string
  quote: string
  avatar: string
  year?: string
}

export interface NavItem {
  label: string
  shortLabel?: string
  href: string
  description?: string
  children?: { label: string; href: string; description?: string }[]
}

export interface QuickLink {
  label: string
  href: string
  badge?: string
}

export interface FooterLink {
  label: string
  href: string
  logo?: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface LeadSubmission {
  fullName: string
  phone: string
  careerId: string
  modality: string
}
