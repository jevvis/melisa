'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-pink-600', 'bg-blue-600', 'bg-rose-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-rose-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Pertumbuhan Akun Instagram", en: "Instagram Account Growth" },
    description: { id: "Mengembangkan akun hingga lebih dari 13.900 pengikut dengan fokus kecantikan, perawatan kulit dan rambut, serta gaya hidup.", en: "Grew the account to more than 13,900 followers focusing on beauty, skincare, hair care, and lifestyle." },
    framework: "CONTENT CREATOR INSTAGRAM",
    techStack: ["13.9K+", "Instagram"],
  },
  {
    number: '02',
    title: { id: "Kolaborasi Brand & Endorsement", en: "Brand Collaboration & Endorsement" },
    description: { id: "Endorsement, ulasan produk, dan afiliasi dengan Focallure, TOCOBO, dan Moist Diane.", en: "Endorsements, product reviews, and affiliates with Focallure, TOCOBO, and Moist Diane." },
    framework: "CONTENT CREATOR INSTAGRAM",
    techStack: ["Endorsement", "Affiliate"],
  },
  {
    number: '03',
    title: { id: "Produksi Konten & Reels", en: "Content & Reels Production" },
    description: { id: "Riset tren, penulisan naskah, foto dan video produk, penyuntingan Reels, serta caption.", en: "Trend research, script writing, product photos and videos, Reels editing, and captions." },
    framework: "CONTENT CREATOR INSTAGRAM",
    techStack: ["Reels", "Script"],
  },
  {
    number: '04',
    title: { id: "Optimasi Algoritma & Engagement", en: "Algorithm Optimization & Engagement" },
    description: { id: "Strategi optimasi algoritma, audio tren, dan interaksi audiens untuk jangkauan dan brand awareness.", en: "Algorithm optimization strategy, trending audio, and audience interaction for reach and brand awareness." },
    framework: "CONTENT CREATOR INSTAGRAM",
    techStack: ["Algorithm", "Engagement"],
  },
  {
    number: '05',
    title: { id: "Konten Promosi & Media Informasi QR", en: "Promotional Content & QR Information Media" },
    description: { id: "Konten promosi digital pariwisata dan media informasi interaktif berbasis kode QR.", en: "Digital tourism promotional content and interactive QR code-based information media." },
    framework: "DISPORAPAR PROV. KALIMANTAN BARAT",
    techStack: ["QR Code", "Promotion"],
  },
  {
    number: '06',
    title: { id: "Rekapitulasi Data & Basis Data Promosi", en: "Promotion Data Recap & Database" },
    description: { id: "Rekapitulasi data promosi tahunan dan pengelolaan basis data digital bidang pemasaran.", en: "Annual promotion data recap and management of the marketing division's digital database." },
    framework: "DISPORAPAR PROV. KALIMANTAN BARAT",
    techStack: ["Data", "Marketing"],
  },
  {
    number: '07',
    title: { id: "Penerjemahan Calendar of Events 2024", en: "Calendar of Events 2024 Translation" },
    description: { id: "Penyusunan ulang dan penerjemahan dokumen COE Kalimantan Barat 2024 ke bahasa Inggris.", en: "Restructuring and translating the West Kalimantan 2024 COE document into English." },
    framework: "DISPORAPAR PROV. KALIMANTAN BARAT",
    techStack: ["COE", "Translation"],
  },
  {
    number: '08',
    title: { id: "Webinar Nasional Indonesia dan BRICE", en: "Indonesia and BRICE National Webinar" },
    description: { id: "Desain latar virtual Zoom, materi publikasi, dan dokumentasi untuk lebih dari 150 peserta.", en: "Zoom virtual background design, publication materials, and documentation for more than 150 participants." },
    framework: "KEPANITIAAN FEBRUARI 2025",
    techStack: ["Design", "Documentation"],
  },
  {
    number: '09',
    title: { id: "Seminar Nasional: The Changing of Global Politics", en: "National Seminar: The Changing of Global Politics" },
    description: { id: "Materi publikasi visual, dokumentasi, dan koordinasi logistik untuk lebih dari 300 peserta.", en: "Visual publication materials, documentation, and logistics coordination for more than 300 participants." },
    framework: "KEPANITIAAN OKT — NOV 2024",
    techStack: ["Publication", "Logistics"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'CONTENT & MARKETING PORTFOLIO' : 'PORTOFOLIO KONTEN & PEMASARAN'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Content Creation, Tourism Marketing & Committee Experience' : 'Pengalaman Content Creation, Pemasaran Pariwisata & Kepanitiaan'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of work as an Instagram content creator, a tourism marketing intern, and a committee member of national events.'
              : 'Rekam jejak sebagai content creator Instagram, staf magang pemasaran pariwisata, dan anggota kepanitiaan acara nasional.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
