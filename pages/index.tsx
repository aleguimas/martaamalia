import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Marta Amália Estética Integrativa",
    "description": "Especializada em estética integrativa, oferecemos tratamentos personalizados para cuidar da sua beleza e bem-estar com profissionalismo e carinho.",
    "url": "https://www.martaamaliaestetica.com.br",
    "telephone": "+5581984636483",
    "email": "contato@martaamaliaestetica.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Bela Vista, 152",
      "addressLocality": "Recife",
      "addressRegion": "PE",
      "postalCode": "52051-310",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-8.0476",
      "longitude": "-34.8770"
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-16:00"
    ],
    "priceRange": "$$",
    "currenciesAccepted": "BRL",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "areaServed": "Recife",
    "serviceType": [
      "Drenagem Linfática",
      "Terapias Manuais",
      "Pós-cirúrgicos",
      "Rejuvenescimento",
      "Design de Sobrancelhas",
      "Depilação",
      "Limpeza de Pele",
      "Tratamento de Acne",
      "Massagem Relaxante"
    ],
    "image": "https://www.martaamaliaestetica.com.br/images/marta-amalia.jpg",
    "logo": "https://www.martaamaliaestetica.com.br/images/logo.png",
    "sameAs": [
      "https://instagram.com/martaamaliaestetica/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  }

  return (
    <>
      <Head>
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
        
        {/* Meta Tags Básicas */}
        <title>Marta Amália Estética Integrativa - Tratamentos Personalizados em Recife-PE</title>
        <meta name="description" content="Especializada em estética integrativa, oferecemos tratamentos personalizados para cuidar da sua beleza e bem-estar. Drenagem linfática, terapias manuais, design de sobrancelhas e mais em Recife-PE." />
        <meta name="keywords" content="estética, tratamento de pele, drenagem linfática, terapias manuais, design de sobrancelhas, depilação, limpeza de pele, tratamento de acne, massagem relaxante, Recife, Pernambuco, Casa Amarela" />
        <meta name="author" content="Marta Amália" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="pt-BR" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Meta Tags para Redes Sociais - Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Marta Amália Estética Integrativa - Tratamentos Personalizados" />
        <meta property="og:description" content="Especializada em estética integrativa, oferecemos tratamentos personalizados para cuidar da sua beleza e bem-estar com profissionalismo e carinho." />
        <meta property="og:url" content="https://www.martaamaliaestetica.com.br" />
        <meta property="og:site_name" content="Marta Amália Estética Integrativa" />
        <meta property="og:image" content="https://www.martaamaliaestetica.com.br/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Meta Tags para Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marta Amália Estética Integrativa - Tratamentos Personalizados" />
        <meta name="twitter:description" content="Especializada em estética integrativa, oferecemos tratamentos personalizados para cuidar da sua beleza e bem-estar." />
        <meta name="twitter:image" content="https://www.martaamaliaestetica.com.br/images/twitter-image.jpg" />
        
        {/* Meta Tags para WhatsApp */}
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Marta Amália Estética Integrativa - Profissional de estética" />
        
        {/* Meta Tags de Localização */}
        <meta name="geo.region" content="BR-PE" />
        <meta name="geo.placename" content="Recife" />
        <meta name="geo.position" content="-8.0476;-34.8770" />
        <meta name="ICBM" content="-8.0476, -34.8770" />
        
        {/* Meta Tags para Negócio Local */}
        <meta name="business:contact_data:street_address" content="Rua Bela Vista, 152" />
        <meta name="business:contact_data:locality" content="Recife" />
        <meta name="business:contact_data:region" content="PE" />
        <meta name="business:contact_data:postal_code" content="52051-310" />
        <meta name="business:contact_data:country_name" content="Brasil" />
        <meta name="business:contact_data:phone_number" content="+5581984636483" />
        <meta name="business:contact_data:email" content="contato@martaamaliaestetica.com.br" />
        
        {/* Meta Tags de Performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        
                 {/* Favicon */}
         <link rel="icon" type="image/png" href="/favicon.png" />
         <link rel="apple-touch-icon" href="/favicon.png" />
         <link rel="shortcut icon" href="/favicon.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.martaamaliaestetica.com.br" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main>
        <Header />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
