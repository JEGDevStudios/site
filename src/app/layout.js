import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../bootstrap/css/bootstrap.min.css";
import BootstrapClient from '../components/BootstrapClient';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: {
    default: 'JEG Dev Studios | Desarrollo Web, Apps y Videojuegos',
    template: '%s | JEG Dev Studios',
  },
  description:
    'JEG Dev Studios es una empresa especializada en desarrollo de software, sitios web, aplicaciones móviles y videojuegos. Creamos soluciones digitales personalizadas, innovadoras y enfocadas en hacer crecer tu negocio online.',
  keywords: [
    'JEG Dev Studios',
    'desarrollo web',
    'desarrollo de software',
    'desarrollo de videojuegos',
    'desarrollo de aplicaciones móviles',
    'diseño web',
    'UX/UI',
    'páginas web personalizadas',
    'aplicaciones de escritorio',
    'tiendas online',
    'e-commerce',
    'landing pages',
    'portafolio web',
    'blogs',
    'soluciones digitales',
    'startups de software',
    'empresa de desarrollo de software',
    'crear tu página web',
    'programador freelance',
    'web developer',
    'desarrollador web independiente',
    'tecnología creativa',
    'servicios digitales',
    'presencia online',
    'innovación tecnológica',
  ],
  robots: 'index, follow',
  authors: [{ name: 'JEG Dev Studios', url: 'https://jegdevstudios.com' }],
  applicationName: 'JEG Dev Studios',
  generator: 'Next.js',
  metadataBase: new URL('https://jegdevstudios.com'),
  alternates: {
    canonical: 'https://jegdevstudios.com/',
  },
  openGraph: {
    title: 'JEG Dev Studios | Programación y Desarrollo Web, Apps y Videojuegos',
    description:
      'En JEG Dev Studios transformamos ideas en experiencias digitales inolvidables. Especializados en desarrollo web, videojuegos, aplicaciones móviles y de escritorio, ofrecemos soluciones personalizadas y creativas.',
    url: 'https://jegdevstudios.com/',
    siteName: 'JEG Dev Studios',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://jegdevstudios.com/public/img-SEO/metabackground.webp',
        width: 1200,
        height: 630,
        alt: 'JEG Dev Studios',
      },
    ],
  },
  icons: {
    icon: '/icons-SEO/favicon-32x32.png',
    shortcut: '/public/favicon.ico',
    apple: '/icons-SEO/apple-touch-icon.png',
  },
  verification: {
    google: 'ZuLeN527RLeu6fCEEWEZsRbq3r7SbpqLPCBIFy2CS48',
  },
  other: {
    'geo.region': 'MX',
    'geo.placename': 'Ciudad de México, México',
    'geo.position': '19.4326;-99.1332',
    'format-detection': 'telephone=no',
    language: 'es-MX',
  },
  manifest: '/manifest.json',
}

export const viewport = {
  themeColor: '#000000',
}
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient /> 
      </body>
    </html>
  );
}
