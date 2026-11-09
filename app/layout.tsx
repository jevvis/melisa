import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})


export const metadata: Metadata = {
  title: 'Melisa | Portofolio Content Creator & Digital Marketing',
  description: 'Content Creator | Media Sosial dan Pemasaran Digital — Lulusan S1 Hubungan Internasional Universitas Tanjungpura (Cum Laude)',
  keywords: ['Melisa', 'Content Creator', 'Social Media', 'Digital Marketing', 'Hubungan Internasional', 'Universitas Tanjungpura', 'Jakarta Selatan'],
  openGraph: {
    title: 'Melisa | Portofolio Content Creator & Digital Marketing',
    description: 'Content Creator | Media Sosial dan Pemasaran Digital',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
                try {
                  // Intro tampil di setiap muat ulang (F5/Ctrl+R) dan kunjungan baru; dilewati hanya bila datang dari halaman lain di situs ini
                  var nav = performance.getEntriesByType('navigation')[0];
                  var type = nav ? nav.type : 'navigate';
                  var internal = !!document.referrer && new URL(document.referrer).origin === location.origin;
                  if (type !== 'reload' && internal) {
                    document.documentElement.classList.add('intro-done', 'hero-go');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
