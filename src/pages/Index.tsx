import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Bonn | Friseur Azad</title>
        <meta
          name="description"
          content="Besuchen Sie Friseur Azad in Bonn für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Ihr Experte für modernes Grooming. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bonn, Friseur Azad"
        />
        <link rel="canonical" href="https://friseur-azad.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Friseur Azad | Premium Barbershop Bonn" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Bonn."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://friseur-azad.de" />
        <meta property="og:image" content="https://friseur-azad.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Friseur Azad | Premium Barbershop Bonn" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege bei Friseur Azad in Bonn."
        />
        <meta name="twitter:image" content="https://friseur-azad.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Friseur Azad",
            "image": "https://friseur-azad.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Maxstraße 51",
              "addressLocality": "Bonn",
              "postalCode": "53111",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.7374",
              "longitude": "7.0982"
            },
            "url": "https://friseur-azad.de",
            "telephone": "+49 176 34965403",
            "openingHours": "Mo-Sa 09:00-20:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/friseurazad",
              "https://www.instagram.com/friseurazad"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

