export interface InstitutionContact {
  phone: string
  phoneRaw: string
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
  href: string
  description?: string
  children?: { label: string; href: string; description?: string }[]
}

export interface QuickLink {
  label: string
  href: string
  badge?: string
}

export interface LeadSubmission {
  fullName: string
  phone: string
  careerId: string
  modality: string
}
