import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        projects: "Projects",
        about: "About",
        contact: "Contact"
      },
      hero: {
        name: "Ignat Nikolayev",
        subtitle: "Digital Craft & Engineering"
      },
      intro: {
        text1: "Crafting digital experiences that merge ",
        highlight1: "stunning aesthetics",
        text2: " with ",
        highlight2: "robust engineering",
        text3: ". Explore a curated selection of my recent work."
      },
      footer: {
        title: "Let's Work Together",
        email: "Email",
        github: "GitHub",
        telegram: "Telegram",
        linkedin: "LinkedIn"
      },
      projects: {
        visit: "Visit Live Site",
        role: "Role",
        type: "Type",
        audience: "Audience",
        industry: "Industry",
        stack: "Stack"
      },
      ksk: {
        title: "KSK Farmos",
        subtitle: "Elderly Care Services",
        desc: "A complete digital transformation for a German elderly care provider with over 13 years of history. The project involved a full redesign to establish a modern visual identity, improve lead generation, and streamline employee recruitment through an advanced digital platform.",
        role_val: "Designer & Dev",
        type_val: "B2B & B2C Platform",
        industry_val: "Elderly Care",
        stack_val: "HTML, CSS, JS, i18n",
        acc1_title: "The Challenge",
        acc1_content: "The company operated with an outdated website that suffered from poor user experience and difficult navigation. It failed to effectively attract new clients or recruit employees, necessitating a complete overhaul to build a strong, trustworthy online presence.",
        acc2_title: "Key Features",
        acc2_content: "The new platform includes an Administrative Dashboard for HR to manage the recruitment workflow (accept/reject candidates), a custom AI Assistant trained on company data to answer queries in 10 languages, and seamless multilingual support.",
        acc3_title: "Technical Architecture",
        acc3_content: "Built using a robust stack featuring HTML/CSS/JS on the frontend, powered by Supabase for database operations, the OpenAI API for the intelligent assistant, and EmailJS for automated notifications."
      },
      beauty: {
        title: "Beauty Glanz",
        subtitle: "Premium Beauty Salon",
        desc: "A high-end, elegant single-page booking system and administrative platform designed from scratch for a beauty salon in Germany, establishing their first professional online presence to acquire customers and manage appointments.",
        role_val: "Designer & Dev",
        audience_val: "Beauty Customers",
        industry_val: "Beauty Salon",
        stack_val: "HTML, CSS, JS, i18n",
        acc1_title: "Project Background",
        acc1_content: "As a business previously without a website, the primary goal was to create an elegant, trustworthy, and accessible digital platform. The design focuses on a soft visual style and modern presentation to reflect the premium nature of the salon.",
        acc2_title: "Booking & Administration",
        acc2_content: "Features a comprehensive online booking system with automated email notifications and calendar management. An intuitive administrative dashboard empowers the salon owner to easily manage appointments, edit content, and oversee operations.",
        acc3_title: "Technical Stack",
        acc3_content: "Developed using HTML, CSS, and JavaScript for a highly responsive frontend, seamlessly integrated with Supabase for robust database management and EmailJS for reliable customer communications."
      },
      matcha: {
        title: "Matcha Matcha",
        subtitle: "Specialty Cafe Concept",
        desc: "A vibrant, independent concept project created for an existing food and beverage brand in Germany. The platform is designed to showcase strong branding, modern aesthetics, and highly interactive visual experiences.",
        role_val: "Designer & Dev",
        type_val: "Concept Project",
        industry_val: "Food & Beverage",
        stack_val: "React, Three.js, i18n",
        acc1_title: "Design & Vision",
        acc1_content: "Built entirely from scratch with a mobile-first approach, the project focuses on presenting the brand identity and menu through a striking, highly interactive visual experience that demonstrates cutting-edge web design capabilities.",
        acc2_title: "Interactive Features",
        acc2_content: "The single-page architecture incorporates custom visual experiences and interactive animations to engage users, providing a seamless flow through the brand story, product information, and menu variations.",
        acc3_title: "Advanced Technologies",
        acc3_content: "The frontend leverages React and Vite, enriched with sophisticated animations powered by GSAP and React Spring. Custom 3D elements are seamlessly integrated using React Three Fiber and Three.js, alongside an i18n localization system."
      }
    }
  },
  de: {
    translation: {
      header: {
        projects: "Projekte",
        about: "Über mich",
        contact: "Kontakt"
      },
      hero: {
        name: "Ignat Nikolayev",
        subtitle: "Digitale Handwerkskunst & Entwicklung"
      },
      intro: {
        text1: "Schaffung digitaler Erlebnisse, die ",
        highlight1: "beeindruckende Ästhetik",
        text2: " mit ",
        highlight2: "robuster Technik",
        text3: " verbinden. Entdecken Sie eine Auswahl meiner aktuellen Arbeiten."
      },
      footer: {
        title: "Lassen Sie uns zusammenarbeiten",
        email: "E-Mail",
        github: "GitHub",
        telegram: "Telegram",
        linkedin: "LinkedIn"
      },
      projects: {
        visit: "Zur Live-Website",
        role: "Rolle",
        type: "Typ",
        audience: "Zielgruppe",
        industry: "Branche",
        stack: "Technologien"
      },
      ksk: {
        title: "KSK Farmos",
        subtitle: "Altenpflegedienste",
        desc: "Eine komplette digitale Transformation für einen deutschen Altenpflegedienst mit über 13-jähriger Geschichte. Das Projekt umfasste ein vollständiges Redesign zur Etablierung einer modernen visuellen Identität, zur Verbesserung der Lead-Generierung und zur Optimierung der Mitarbeitergewinnung durch eine fortschrittliche digitale Plattform.",
        role_val: "Designer & Entwickler",
        type_val: "B2B & B2C Plattform",
        industry_val: "Altenpflege",
        stack_val: "HTML, CSS, JS, i18n",
        acc1_title: "Die Herausforderung",
        acc1_content: "Das Unternehmen nutzte eine veraltete Website mit schlechter Benutzererfahrung und schwieriger Navigation. Es gelang nicht, effektiv neue Kunden oder Mitarbeiter zu gewinnen, weshalb eine komplette Überarbeitung erforderlich war, um eine starke, vertrauenswürdige Online-Präsenz aufzubauen.",
        acc2_title: "Hauptmerkmale",
        acc2_content: "Die neue Plattform umfasst ein Administrations-Dashboard für die Personalabteilung zur Verwaltung des Rekrutierungsprozesses (Bewerber annehmen/ablehnen), einen auf Unternehmensdaten trainierten benutzerdefinierten KI-Assistenten zur Beantwortung von Anfragen in 10 Sprachen sowie nahtlose mehrsprachige Unterstützung.",
        acc3_title: "Technische Architektur",
        acc3_content: "Erstellt mit einem robusten Stack aus HTML/CSS/JS im Frontend, unterstützt von Supabase für Datenbankoperationen, der OpenAI API für den intelligenten Assistenten und EmailJS für automatisierte Benachrichtigungen."
      },
      beauty: {
        title: "Beauty Glanz",
        subtitle: "Premium-Schönheitssalon",
        desc: "Ein hochwertiges, elegantes Single-Page-Buchungssystem und eine administrative Plattform, die von Grund auf für einen Schönheitssalon in Deutschland entwickelt wurden, um deren erste professionelle Online-Präsenz zur Kundengewinnung und Terminverwaltung zu etablieren.",
        role_val: "Designer & Entwickler",
        audience_val: "Salon-Kunden",
        industry_val: "Schönheitssalon",
        stack_val: "HTML, CSS, JS, i18n",
        acc1_title: "Projekthintergrund",
        acc1_content: "Da das Unternehmen zuvor keine Website hatte, bestand das Hauptziel darin, eine elegante, vertrauenswürdige und zugängliche digitale Plattform zu schaffen. Das Design konzentriert sich auf einen weichen visuellen Stil und eine moderne Präsentation, um den Premium-Charakter des Salons widerzuspiegeln.",
        acc2_title: "Buchung & Verwaltung",
        acc2_content: "Verfügt über ein umfassendes Online-Buchungssystem mit automatisierten E-Mail-Benachrichtigungen und Kalenderverwaltung. Ein intuitives Administrations-Dashboard ermöglicht es dem Salonbesitzer, Termine einfach zu verwalten, Inhalte zu bearbeiten und Abläufe zu überwachen.",
        acc3_title: "Technologien",
        acc3_content: "Entwickelt mit HTML, CSS und JavaScript für ein hochgradig reaktionsschnelles Frontend, nahtlos integriert mit Supabase für eine robuste Datenbankverwaltung und EmailJS für zuverlässige Kundenkommunikation."
      },
      matcha: {
        title: "Matcha Matcha",
        subtitle: "Spezialitäten-Café Konzept",
        desc: "Ein lebendiges, eigenständiges Konzeptprojekt für eine bestehende Gastronomiemarke in Deutschland. Die Plattform soll ein starkes Branding, moderne Ästhetik und hochgradig interaktive visuelle Erlebnisse präsentieren.",
        role_val: "Designer & Entwickler",
        type_val: "Konzeptprojekt",
        industry_val: "Gastronomie",
        stack_val: "React, Three.js, i18n",
        acc1_title: "Design & Vision",
        acc1_content: "Komplett von Grund auf mit einem Mobile-First-Ansatz entwickelt, konzentriert sich das Projekt darauf, die Markenidentität und das Menü durch ein auffälliges, hochgradig interaktives visuelles Erlebnis zu präsentieren, das modernste Webdesign-Fähigkeiten demonstriert.",
        acc2_title: "Interaktive Funktionen",
        acc2_content: "Die Single-Page-Architektur beinhaltet benutzerdefinierte visuelle Erlebnisse und interaktive Animationen, um Benutzer zu fesseln und einen nahtlosen Fluss durch die Markengeschichte, Produktinformationen und Menüvariationen zu bieten.",
        acc3_title: "Moderne Technologien",
        acc3_content: "Das Frontend nutzt React und Vite, angereichert mit anspruchsvollen Animationen, die von GSAP und React Spring angetrieben werden. Benutzerdefinierte 3D-Elemente sind nahtlos mit React Three Fiber und Three.js integriert, ergänzt durch ein i18n-Lokalisierungssystem."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
