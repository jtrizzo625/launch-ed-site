import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "College Counseling for Engineering, Design & Business Applicants | Launch Educational Consulting",
    template: "%s | Launch Educational Consulting",
  },
  description: site.description,
  twitter: { card: "summary_large_image" },
  openGraph: {
    title: "Launch Educational Consulting",
    description: "College counseling for high school students who build things.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: "US",
  founder: {
    "@type": "Person",
    name: "James Rizzo",
    jobTitle: "Independent Educational Consultant",
    sameAs: ["https://www.linkedin.com/in/james-rizzo/", "https://essaylaunch.com"],
  },
  address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "California", addressCountry: "US" },
  serviceType: ["College counseling", "College essay coaching", "Financial aid guidance", "Student project coaching"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Lora:ital,wght@1,500&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
