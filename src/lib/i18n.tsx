import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "de" | "ar";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  en: {
    "nav.about": "About",
    "nav.structure": "Structure",
    "nav.ventures": "Ventures",
    "nav.strategy": "Strategy",
    "nav.contact": "Contact",
    "hero.kicker": "Crestay Group · Germany",
    "hero.title": "Building Digital Ventures for the Future",
    "hero.sub":  "Building, acquiring, and scaling digital ventures across technology, media, and AI.",
    "hero.cta1": "Explore Ventures",
    "hero.cta2": "Contact Us",
    "hero.tags1": "Germany Based",
    "hero.tags2": "Technology",
    "hero.tags3": "Media",
    "hero.tags4": "AI",

    "about.kicker": "About Crestay Group",
    "about.title": "Building, acquiring, and growing digital ventures with long-term value.",
    "about.body": "Crestay Group builds, acquires, and scales digital ventures across technology, media, and AI, focusing on sustainable growth and long-term value creation.",
    "about.stat.media": "MEDIA",
    "about.stat.technology": "TECHNOLOGY",
    "about.stat.ai": "AI",

    "vm.vision.t": "Vision",
    "vm.vision.b": "Building a portfolio of digital ventures with sustainable long-term value.",
    "vm.mission.t": "Mission",
    "vm.mission.b": "Building, acquiring, and scaling digital ventures across technology, media, and AI.",


    "values.kicker": "Core Values",
    "values.title": "Principles that guide every venture we build.",
    "v.innovation.t": "Innovation",
    "v.innovation.b": "We pursue bold ideas that create new opportunities and lasting impact.",
    "v.integrity.t": "Integrity",
    "v.integrity.b": "Trust, transparency, and accountability guide every decision we make.",
    "v.excellence.t": "Excellence",
    "v.excellence.b": "We strive for exceptional quality in every product, process, and venture.",
    "v.longterm.t": "Long-Term Thinking",
    "v.longterm.b": "We build with patience, focusing on enduring value rather than short-term gains.",
    "v.sustain.t": "Sustainability",
    "v.sustain.b": "We pursue responsible growth that benefits people, businesses, and society.",


    "struct.kicker": "GROUP STRUCTURE",
    "struct.title": "One Group. Multiple Ventures.",
    "struct.crestay.t": "Crestay",
    "struct.crestay.b": "Digital products, web platforms, and online growth solutions.",


    "ven.kicker": "Ventures",
    "ven.title": "Our Portfolio of Digital Ventures.",
    "ven.status.active": "Active",
    "ven.status.dev": "In Development",
    "ven.visit": "Visit Crestay",


    "ven.services": "Services",
    "ven.crestay.tag": "Digital Products, Web Platforms & AI Solutions",
    "ven.s.web": "Digital Products",
    "ven.s.ecom": "Web Platforms",
    "ven.s.auto": "Business Automation",
    "ven.s.ai": "AI Solutions",
    "ven.upcoming.t": "M.H",
    "ven.upcoming.b": "An upcoming digital platform focused on innovation, automation, and scalable digital experiences.",



    "strat.kicker": "Growth Strategy",
    "strat.title": "A roadmap built for compounding growth.",
    "strat.2026": "Strategic Expansion",
    "strat.2027": "Future Ventures",
    "strat.2028": "Innovation & Growth",
    "strat.future": "Long-Term Vision",


    "why.kicker": "Why Crestay Group",
    "why.title": "Built to scale. Engineered to last.",
    "why.1.t": "Long-Term Vision",
    "why.1.b": "Decisions guided by where the world is heading, not where it is.",
    "why.2.t": "Digital Expertise",
    "why.2.b": "Deep engineering, design, and product capability under one roof.",
    "why.3.t": "Scalable Systems",
    "why.3.b": "Architectures and operations that grow without friction.",
    "why.4.t": "Strong Brand Building",
    "why.4.b": "Building brands that inspire trust and create lasting market presence.",
    "why.5.t": "Sustainable Growth",
    "why.5.b": "Sustainable growth through disciplined execution and long-term value creation.",


    
    "contact.kicker": "Contact",
    "contact.title": "Let's build lasting digital ventures together.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.company": "Company / Organization",
    "contact.message": "Message",
    "contact.send": "Start a Conversation",
    "contact.sent": "Thank you. We'll be in touch shortly.",
    "contact.location": "Germany",
    "contact.follow": "Follow Us",



    "footer.tag": "Crestay Group — One Group. Multiple Ventures. Endless Possibilities.",
    "footer.privacy": "Privacy Policy",
    "footer.imprint": "Legal Notice",
    "footer.quicklinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.follow": "Follow Us",


    "legal.back": "Back to Home",


    "privacy.title": "Privacy Policy",

    "privacy.intro": "Crestay Group is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, and safeguard personal information in accordance with the General Data Protection Regulation (GDPR) and applicable German data protection laws.",

    "privacy.s1.t": "1. Data Collection",
    "privacy.s1.b": "We collect personal information that you voluntarily provide when contacting us through our website. This may include your name, email address, company or organization name, and the content of your message. Basic technical information, such as IP address and browser data, may also be transmitted automatically by your browser when accessing the website.",

    "privacy.s2.t": "2. Contact Forms",
    "privacy.s2.b": "Information submitted through our contact form (name, email address, company or organization, and message content) is processed solely for the purpose of responding to inquiries and providing requested information. Form submissions are handled through Web3Forms. Personal data is not sold or shared with third parties for marketing purposes.",

    "privacy.s3.t": "3. Cookies",
    "privacy.s3.b": "This website does not intentionally use non-essential cookies for advertising or marketing purposes. Essential technical cookies may be used where necessary for website functionality.",

    "privacy.s4.t": "4. Data Processing and Storage",
    "privacy.s4.b": "Personal data is processed only for legitimate business communication purposes and is retained only for as long as necessary to respond to inquiries or comply with applicable legal obligations. Appropriate technical and organizational measures are implemented to protect personal information.",

    "privacy.s5.t": "5. Third-Party Services",
    "privacy.s5.b": "We use Web3Forms to process contact form submissions. By submitting information through the contact form, you acknowledge that your data may be processed by this service solely for the purpose of delivering your inquiry to us.",

    "privacy.s6.t": "6. Your Rights",
    "privacy.s6.b": "Under the GDPR, you have the right to request access to your personal data, request correction or deletion of inaccurate data, restrict processing, object to processing, and request data portability where applicable.",

    "privacy.s7.t": "7. GDPR Compliance",
    "privacy.s7.b": "Personal data is processed in accordance with Regulation (EU) 2016/679 (GDPR) and applicable German data protection legislation.",

    "privacy.s8.t": "8. Contact Information",
    "privacy.s8.b": "For privacy-related inquiries or requests concerning your personal data, please contact: office@crestay.com." ,

      "imprint.title": "Legal Notice (Impressum)",

    "imprint.intro": "Information pursuant to § 5 DDG (German Digital Services Act).",

    "imprint.s1.t": "Company",
    "imprint.s1.b": "Crestay Group – Mohamad Hussam Abosaleh",

    "imprint.s2.t": "Business Address",
    "imprint.s2.b": "Gaußstraße 9\n40235 Düsseldorf\nGermany",

    "imprint.s3.t": "Contact",
    "imprint.s3.b": "Email: office@crestay.com\nWebsite: www.crestaygroup.com",

    "imprint.s4.t": "Responsible for Content",
    "imprint.s4.b": "Mohamad Hussam Abosaleh\nResponsible pursuant to § 18 Abs. 2 MStV.",

    "imprint.s5.t": "VAT Identification Number",
    "imprint.s5.b": "VAT ID pursuant to § 27a German Value Added Tax Act (UStG): DE456209765",

    "imprint.s6.t": "Liability Disclaimer",
    "imprint.s6.b": "Despite careful monitoring of content, we assume no liability for the content of external links. The operators of linked websites are solely responsible for their content.",

    "imprint.s7.t": "Copyright Notice",
    "imprint.s7.b": "All texts, images, graphics, and other content published on this website are protected by copyright law. Any reproduction, modification, distribution, or use beyond the limits permitted by copyright law requires the prior written consent of the rights holder.",

    "imprint.s8.t": "Notice",
    "imprint.s8.b": "No value added tax (VAT) is charged or displayed in accordance with § 19 UStG (German Small Business Regulation)."
  },
  de: {
    "nav.about": "Über uns",
    "nav.structure": "Struktur",
    "nav.ventures": "Beteiligungen",
    "nav.strategy": "Strategie",
    "nav.contact": "Kontakt",
    "hero.kicker": "Crestay Group · Deutschland",
    "hero.title": "Wir bauen digitale Unternehmen der Zukunft.",
    "hero.sub": "Aufbau, Entwicklung und Wachstum digitaler Unternehmen in den Bereichen Technologie, Medien und Künstliche Intelligenz.",
    "hero.cta1": "Beteiligungen entdecken",
    "hero.cta2": "Kontakt aufnehmen",
    "hero.tags1": "Standort Deutschland",
    "hero.tags2": "Technologie",
    "hero.tags3": "Medien",
    "hero.tags4": "KI",


    "about.kicker": "Über Crestay Group",
    "about.title": "Wir bauen, entwickeln und skalieren digitale Unternehmen mit langfristigem Wert.",
    "about.body": "Die Crestay Group baut digitale Unternehmen in den Bereichen Technologie, Medien und Künstliche Intelligenz auf, entwickelt sie weiter und skaliert sie mit Fokus auf nachhaltiges Wachstum und langfristige Wertschöpfung.",
   "about.stat.media": "Medien",
    "about.stat.technology": "Technologie",
    "about.stat.ai": "Künstliche Intelligenz",


    "vm.vision.t": "Vision",
    "vm.vision.b": "Aufbau eines Portfolios digitaler Unternehmen, die nachhaltigen langfristigen Wert schaffen.",
    "vm.mission.t": "Mission",
    "vm.mission.b": "Aufbau, Erwerb und Skalierung digitaler Unternehmen in den Bereichen Technologie, Medien und KI..",
    "values.kicker": "Unsere Werte",
    "values.title": "Die Prinzipien, die jedes Unternehmen prägen, das wir aufbauen.",
    "v.innovation.t": "Innovation",
    "v.innovation.b": "Wir verfolgen mutige Ideen, die neue Chancen und nachhaltigen Mehrwert schaffen.",
    "v.integrity.t": "Integrität",
    "v.integrity.b": "Vertrauen, Transparenz und Verantwortung leiten jede unserer Entscheidungen.",
    "v.excellence.t": "Exzellenz",
    "v.excellence.b": "Wir streben nach höchster Qualität in jedem Produkt, Prozess und Unternehmen.",
    "v.longterm.t": "Langfristiges Denken",
    "v.longterm.b": "Wir konzentrieren uns auf nachhaltigen Value statt auf kurzfristige Gewinne.",
    "v.sustain.t": "Nachhaltigkeit",
    "v.sustain.b": "Wir fördern verantwortungsvolles Wachstum für Menschen, Unternehmen und Gesellschaft.",


    "struct.kicker": "GRUPPENSTRUKTUR",
    "struct.title": "Eine Gruppe. Mehrere Unternehmen.",
    "struct.crestay.t": "Crestay",
    "struct.crestay.b": "Ein digitales Unternehmen mit Fokus auf Webplattformen, Technologie und digitales Wachstum.",


    "ven.kicker": "Beteiligungen",
    "ven.title": "Unser Portfolio digitaler Unternehmen.",
    "ven.status.active": "Aktiv",
    "ven.status.dev": "In Entwicklung",
    "ven.visit": "Crestay besuchen",
    "ven.services": "Leistungen",
    "ven.crestay.tag": "Digitale Produkte, Webplattformen & KI-Lösungen",
    "ven.s.web": "Webentwicklung",
    "ven.s.ecom": "E-Commerce-Lösungen",
    "ven.s.auto": "Geschäftsautomatisierung",
    "ven.s.ai": "KI-Integration",
    "ven.upcoming.t": " M.H ",
    "ven.upcoming.b": "Eine neue digitale Plattform in Entwicklung mit Fokus auf Innovation, Automatisierung und skalierbare digitale Lösungen.",

    "strat.kicker": "Wachstumsstrategie",
    "strat.title": "Eine Roadmap für nachhaltiges Wachstum.",
    "strat.2026": "Strategische Expansion",
    "strat.2027": "Neue Ventures",
    "strat.2028": "Innovation & Wachstum",
    "strat.future": "Langfristige Vision",



    "why.kicker": "Warum Crestay Group",
    "why.title": "Skalierbar gebaut. Langfristig konzipiert.",
    "why.1.t": "Langfristige Vision",
    "why.1.b": "Entscheidungen, die in die Zukunft blicken.",
    "why.2.t": "Digitale Expertise",
    "why.2.b": "Engineering, Design und Produkt unter einem Dach.",
    "why.3.t": "Skalierbare Systeme",
    "why.3.b": "Architekturen, die reibungslos mitwachsen.",
    "why.4.t": "Starkes Markenbauen",
    "why.4.b": "Wir entwickeln Marken, die Vertrauen schaffen und eine nachhaltige Marktpräsenz aufbauen.",
    "why.5.t": "Nachhaltiges Wachstum",
    "why.5.b": "Nachhaltiges Wachstum durch disziplinierte Umsetzung und langfristige Wertschöpfung.",


    "contact.kicker": "Kontakt",
    "contact.title": "Lassen Sie uns gemeinsam nachhaltige digitale Unternehmungen aufbauen.",
    "contact.name": "Name",
    "contact.email": "E-Mail",
    "contact.company": "Unternehmen / Organisation",
    "contact.message": "Nachricht",
    "contact.send": "Ein Gespräch beginnen",
    "contact.sent": "Vielen Dank. Wir melden uns in Kürze.",
    "contact.location": "Deutschland",
    "contact.follow": "Folgen Sie uns",



    "footer.tag": "Crestay Group — Eine Gruppe. Zahlreiche Unternehmungen. Unendliche Möglichkeiten..",
    "footer.privacy": "Datenschutz",
    "footer.imprint": "Impressum",
    "footer.quicklinks": "Schnellzugriff",
    "footer.contact": "Kontakt",
    "footer.follow": "Folgen Sie uns",


    "legal.back": "Zurück zur Startseite",


    "privacy.title": "Datenschutzerklärung",

    "privacy.intro": "Die Crestay Group verpflichtet sich zum Schutz Ihrer personenbezogenen Daten und Ihrer Privatsphäre. Diese Datenschutzerklärung erläutert, wie personenbezogene Daten gemäß der Datenschutz-Grundverordnung (DSGVO) und den geltenden deutschen Datenschutzgesetzen erhoben, verarbeitet und geschützt werden.",

    "privacy.s1.t": "1. Datenerhebung",
    "privacy.s1.b": "Wir erheben personenbezogene Daten, die Sie uns freiwillig übermitteln, wenn Sie mit uns in Kontakt treten. Dazu gehören insbesondere Ihr Name, Ihre E-Mail-Adresse, der Name Ihres Unternehmens oder Ihrer Organisation sowie der Inhalt Ihrer Nachricht. Darüber hinaus können technische Informationen wie IP-Adresse, Browsertyp und Zugriffszeit automatisch durch Ihren Browser übermittelt werden.",

    "privacy.s2.t": "2. Kontaktformulare",
    "privacy.s2.b": "Die über unser Kontaktformular übermittelten Informationen (Name, E-Mail-Adresse, Unternehmen oder Organisation sowie Nachrichteninhalt) werden ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage verarbeitet. Die Übermittlung der Formulardaten erfolgt über den Dienst Web3Forms. Personenbezogene Daten werden nicht zu Marketingzwecken verkauft oder an Dritte weitergegeben.",

    "privacy.s3.t": "3. Cookies",
    "privacy.s3.b": "Diese Website verwendet grundsätzlich keine nicht erforderlichen Cookies für Werbe- oder Marketingzwecke. Technisch notwendige Cookies können eingesetzt werden, soweit dies für die Funktionalität der Website erforderlich ist.",

    "privacy.s4.t": "4. Datenverarbeitung und Speicherung",
    "privacy.s4.b": "Personenbezogene Daten werden ausschließlich für legitime geschäftliche Kommunikationszwecke verarbeitet und nur so lange gespeichert, wie dies zur Bearbeitung Ihrer Anfrage oder zur Erfüllung gesetzlicher Aufbewahrungspflichten erforderlich ist. Geeignete technische und organisatorische Maßnahmen schützen Ihre Daten vor unbefugtem Zugriff.",

    "privacy.s5.t": "5. Dienste Dritter",
    "privacy.s5.b": "Für die Verarbeitung von Kontaktformularen nutzen wir den Dienst Web3Forms. Mit dem Absenden einer Anfrage erklären Sie sich damit einverstanden, dass die eingegebenen Daten zum Zweck der Zustellung Ihrer Nachricht an uns über diesen Dienst verarbeitet werden.",

    "privacy.s6.t": "6. Ihre Rechte",
    "privacy.s6.b": "Gemäß DSGVO haben Sie das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, auf Berichtigung unrichtiger Daten, auf Löschung, auf Einschränkung der Verarbeitung, auf Datenübertragbarkeit sowie auf Widerspruch gegen die Verarbeitung Ihrer Daten, soweit die gesetzlichen Voraussetzungen erfüllt sind.",

    "privacy.s7.t": "7. DSGVO-Konformität",
    "privacy.s7.b": "Die Verarbeitung personenbezogener Daten erfolgt gemäß der Verordnung (EU) 2016/679 (DSGVO) sowie den einschlägigen deutschen Datenschutzvorschriften.",

    "privacy.s8.t": "8. Kontaktinformationen",
    "privacy.s8.b": "Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter: office@crestay.com.",



    "imprint.title": "Impressum",

    "imprint.intro": "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).",

    "imprint.s1.t": "Unternehmen",
    "imprint.s1.b": "Crestay Group – Mohamad Hussam Abosaleh",

    "imprint.s2.t": "Geschäftsadresse",
    "imprint.s2.b": "Gaußstraße 9\n40235 Düsseldorf\nDeutschland",

    "imprint.s3.t": "Kontakt",
    "imprint.s3.b": "E-Mail: office@crestay.com\nWebsite: www.crestaygroup.com",

    "imprint.s4.t": "Verantwortlich für den Inhalt",
    "imprint.s4.b": "Mohamad Hussam Abosaleh\nVerantwortlich gemäß § 18 Abs. 2 MStV.",

    "imprint.s5.t": "Umsatzsteuer-Identifikationsnummer",
    "imprint.s5.b": "USt-IdNr. gemäß § 27a Umsatzsteuergesetz: DE456209765",

    "imprint.s6.t": "Haftungsausschluss",
    "imprint.s6.b": "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",

    "imprint.s7.t": "Urheberrecht",
    "imprint.s7.b": "Die auf dieser Website veröffentlichten Inhalte, Texte, Bilder, Grafiken und sonstigen Werke unterliegen dem Urheberrecht. Jede Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Nutzung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des Rechteinhabers.",

    "imprint.s8.t": "Hinweis",
    "imprint.s8.b": "Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen." 
      },



  ar: {
    "nav.about": "من نحن",
    "nav.structure": "الهيكل",
    "nav.ventures": "المشاريع",
    "nav.strategy": "الاستراتيجية",
    "nav.contact": "تواصل",
    "hero.kicker": "مجموعة كريستاي · ألمانيا",
    "hero.title": "نبني مشاريع رقمية لمستقبل أفضل",
    "hero.sub": "بناء وتطوير وتوسيع المشاريع الرقمية في مجالات التكنولوجيا والإعلام والذكاء الاصطناعي ",
    "hero.cta1": "استكشف المشاريع",
    "hero.cta2": "تواصل معنا",
    "hero.tags1": "مقرها ألمانيا",
    "hero.tags2": "التقنية",
    "hero.tags3": "الإعلام",
    "hero.tags4": "الذكاء الاصطناعي",

    "about.kicker": "عن مجموعة كريستاي",
    "about.title": "مجموعة رقمية تستثمر في التقنية والإعلام والذكاء الاصطناعي لبناء قيمة مستدامة على المدى الطويل.",
    "about.body":  "تقوم مجموعة كريستاي ببناء وتطوير وتوسيع المشاريع الرقمية في مجالات التقنية والإعلام والذكاء الاصطناعي، مع التركيز على النمو المستدام وخلق قيمة طويلة الأمد.",
    "about.stat.media": "الإعلام",
    "about.stat.technology": "التقنية",
    "about.stat.ai": "الذكاء الاصطناعي",


    "vm.vision.t": "الرؤية",
    "vm.vision.b": "بناء محفظة من المشاريع الرقمية التي تحقق قيمة مستدامة على المدى الطويل.",
    "vm.mission.t": "المهمة",
    "vm.mission.b": "إنشاء وتطوير والاستحواذ على المشاريع الرقمية في مجالات التقنية والإعلام والذكاء الاصطناعي.",
    "values.kicker": "قيمنا الجوهرية",
    "values.title": "مبادئ توجّه كل مشروع نبنيه.",
    "v.innovation.t": "الابتكار",
    "v.innovation.b": "نسعى إلى الأفكار الطموحة التي تخلق فرصاً جديدة وأثراً مستداماً.",
    "v.integrity.t": "النزاهة",
    "v.integrity.b": "الثقة والشفافية والمسؤولية هي أساس كل قرار نتخذه.",
    "v.excellence.t": "التميّز",
    "v.excellence.b": "نسعى إلى أعلى معايير الجودة في كل منتج وعمل ومشروع.",
    "v.longterm.t": "التفكير طويل الأمد",
    "v.longterm.b": "نبني بصبر ونركز على القيمة المستدامة بدلاً من المكاسب السريعة.",
    "v.sustain.t": "الاستدامة",
    "v.sustain.b": "نسعى إلى نمو مسؤول يخدم الأفراد والأعمال والمجتمع.",


    "struct.kicker": "هيكل المجموعة",
    "struct.title":" مجموعة واحدة . مشاريع متعددة.",
    "struct.crestay.t": "كريستاي",
    "struct.crestay.b": "مشروع رقمي متخصص في المنصات الإلكترونية والتقنية والنمو الرقمي.",

    "ven.kicker": "استثماراتنا",
    "ven.title": "محفظة مشاريعنا الرقمية",
    "ven.status.active": "نشط",
    "ven.status.dev": "قيد التطوير",
    "ven.visit": "زيارة كريستاي",
    "ven.services": "الخدمات",
    "ven.crestay.tag": "منتجات رقمية، منصات ويب، وحلول الذكاء الاصطناعي",
    "ven.s.web": "تطوير الويب",
    "ven.s.ecom": "حلول التجارة الإلكترونية",
    "ven.s.auto": "أتمتة الأعمال",
    "ven.s.ai": "دمج الذكاء الاصطناعي",
    "ven.upcoming.t ": "قريباً",
    "ven.upcoming.b": "منصة رقمية جديدة قيد التطوير، تركز على الابتكار والأتمتة وتجارب رقمية قابلة للتوسع.",


    "strat.kicker": "استراتيجية النمو",
    "strat.title": "خارطة طريق لنموّ مركّب.",
    "strat.2026": "التوسع الاستراتيجي",
    "strat.2027": "مشاريع جديدة",
    "strat.2028": "الابتكار والنمو",
    "strat.future": "رؤية طويلة الأمد",


    "why.kicker": "لماذا كريستاي",
    "why.title": "مبنية للنمو. مهندسة للبقاء.",
    "why.1.t": "رؤية طويلة الأمد",
    "why.1.b": "قرارات تستشرف المستقبل.",
    "why.2.t": "خبرة رقمية",
    "why.2.b": "هندسة وتصميم ومنتج تحت سقف واحد.",
    "why.3.t": "أنظمة قابلة للتوسع",
    "why.3.b": "بنى تنمو دون احتكاك.",
    "why.4.t": "بناء علامات قوية",
    "why.4.b": "نبني علامات تجارية تلهم الثقة وتحقق حضوراً مستداماً في السوق.",
    "why.5.t": "نمو مستدام",
    "why.5.b": "نمو مستدام من خلال التنفيذ المنضبط وخلق قيمة طويلة الأمد.",



    "contact.kicker": "تواصل",
    "contact.title": "لنبنِ معاً مشاريع رقمية مستدامة للمستقبل.",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.company": "الشركة / المؤسسة",
    "contact.message": "رسالتك",
    "contact.send": "ابدأ محادثة",
    "contact.sent": "شكراً لك. سنتواصل معك قريباً.",
    "contact.location": "ألمانيا",
    "contact.follow": "تابعنا",


    "footer.tag": "كريستاي غروب  — مجموعة واحدة. مشاريع متعددة. احتمالات لا حصر لها..",
    "footer.privacy": "سياسة الخصوصية",
    "footer.imprint": "بيانات قانونية",
    "footer.quicklinks": "روابط سريعة",
    "footer.contact": "تواصل",
    "footer.follow": "تابعنا",


    "legal.back": "العودة إلى الرئيسية",


   "privacy.title": "سياسة الخصوصية",

    "privacy.intro": "تلتزم مجموعة كريستاي بحماية بياناتك الشخصية وخصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع البيانات الشخصية ومعالجتها وحمايتها وفقاً للائحة العامة لحماية البيانات (GDPR) والقوانين الألمانية المعمول بها في مجال حماية البيانات.",

    "privacy.s1.t": "1. جمع البيانات",
    "privacy.s1.b": "نقوم بجمع البيانات الشخصية التي تقدمها لنا طوعاً عند التواصل معنا، بما في ذلك الاسم، وعنوان البريد الإلكتروني، واسم الشركة أو المؤسسة، ومحتوى الرسالة. كما قد يتم جمع بعض المعلومات التقنية تلقائياً من خلال متصفحك مثل عنوان IP ونوع المتصفح ووقت الوصول إلى الموقع.",

    "privacy.s2.t": "2. نماذج الاتصال",
    "privacy.s2.b": "تتم معالجة المعلومات المرسلة عبر نموذج الاتصال، بما في ذلك الاسم والبريد الإلكتروني واسم الشركة أو المؤسسة ومحتوى الرسالة، حصراً لغرض الرد على استفساراتك. يتم إرسال بيانات النموذج عبر خدمة Web3Forms. لا يتم بيع البيانات الشخصية أو مشاركتها مع أطراف ثالثة لأغراض تسويقية.",

    "privacy.s3.t": "3. ملفات تعريف الارتباط (Cookies)",
    "privacy.s3.b": "لا يستخدم هذا الموقع ملفات تعريف ارتباط غير ضرورية لأغراض إعلانية أو تسويقية. قد يتم استخدام ملفات تعريف ارتباط تقنية ضرورية فقط لضمان التشغيل السليم للموقع ووظائفه الأساسية.",

    "privacy.s4.t": "4. معالجة البيانات وتخزينها",
    "privacy.s4.b": "تتم معالجة البيانات الشخصية فقط لأغراض التواصل التجاري المشروعة، ويتم الاحتفاظ بها للفترة اللازمة لمعالجة طلبك أو للامتثال للمتطلبات القانونية. ويتم اتخاذ التدابير التقنية والتنظيمية المناسبة لحماية البيانات من الوصول غير المصرح به.",

    "privacy.s5.t": "5. خدمات الجهات الخارجية",
    "privacy.s5.b": "نستخدم خدمة Web3Forms لمعالجة وإرسال رسائل نماذج الاتصال. وبإرسال النموذج فإنك توافق على معالجة البيانات المدخلة لغرض إيصال رسالتك إلينا عبر هذه الخدمة.",

    "privacy.s6.t": "6. حقوقك",
    "privacy.s6.b": "وفقاً للائحة العامة لحماية البيانات (GDPR)، يحق لك طلب الوصول إلى بياناتك الشخصية، وتصحيح البيانات غير الدقيقة، وحذف البيانات، وتقييد معالجتها، ونقلها، والاعتراض على معالجتها متى توفرت الشروط القانونية لذلك.",

    "privacy.s7.t": "7. الامتثال للائحة GDPR",
    "privacy.s7.b": "تتم جميع عمليات معالجة البيانات الشخصية وفقاً للائحة (EU) 2016/679 (GDPR) وأحكام قوانين حماية البيانات الألمانية ذات الصلة.",

    "privacy.s8.t": "8. معلومات الاتصال",
    "privacy.s8.b": "للاستفسارات المتعلقة بحماية البيانات أو لممارسة حقوقك القانونية، يرجى التواصل معنا عبر البريد الإلكتروني: office@crestay.com.",

   "imprint.title": "البيانات القانونية (Impressum)",

    "imprint.intro": "معلومات قانونية وفقاً للمادة 5 من قانون الخدمات الرقمية الألماني (DDG).",

    "imprint.s1.t": "الشركة",
    "imprint.s1.b": "Crestay Group – Mohamad Hussam Abosaleh",

    "imprint.s2.t": "عنوان العمل",
    "imprint.s2.b": "Gaußstraße 9\n40235 Düsseldorf\nألمانيا",

    "imprint.s3.t": "التواصل",
    "imprint.s3.b": "البريد الإلكتروني: office@crestay.com\nالموقع الإلكتروني: www.crestaygroup.com",

    "imprint.s4.t": "المسؤول عن المحتوى",
    "imprint.s4.b": "Mohamad Hussam Abosaleh\nالمسؤول عن المحتوى وفقاً للمادة 18 الفقرة 2 من معاهدة الإعلام الألمانية (MStV).",

    "imprint.s5.t": "رقم ضريبة القيمة المضافة",
    "imprint.s5.b": "رقم التعريف الضريبي لضريبة القيمة المضافة (USt-IdNr.) وفقاً للمادة 27a من قانون ضريبة القيمة المضافة الألماني: DE456209765",

    "imprint.s6.t": "إخلاء المسؤولية",
    "imprint.s6.b": "رغم المراجعة الدقيقة للمحتوى، لا نتحمل أي مسؤولية عن محتوى الروابط الخارجية. تقع المسؤولية الكاملة عن محتوى الصفحات المرتبطة على مشغليها وأصحابها.",

    "imprint.s7.t": "حقوق النشر",
    "imprint.s7.b": "جميع النصوص والصور والرسومات والمحتويات الأخرى المنشورة على هذا الموقع محمية بموجب قوانين حقوق النشر. ولا يجوز نسخها أو تعديلها أو توزيعها أو استخدامها بأي شكل خارج الحدود التي يسمح بها القانون إلا بعد الحصول على موافقة خطية مسبقة من صاحب الحقوق.",

    "imprint.s8.t": "ملاحظة",
    "imprint.s8.b": "لا يتم إظهار أو احتساب ضريبة القيمة المضافة وفقاً لأحكام المادة 19 من قانون ضريبة القيمة المضافة الألماني (UStG)."
      },
    };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string; dir: "ltr" | "rtl" };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
 const [lang, setLangState] = useState<Lang>(() => {
  if (typeof window === "undefined") return "en";
  return (localStorage.getItem("lang") as Lang) || "en";
});

const setLang = (l: Lang) => {
  localStorage.setItem("lang", l);
  setLangState(l);
};

const dir = lang === "ar" ? "rtl" : "ltr";
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
  }, [lang, dir]);

  const t = (k: string) => translations[lang][k] ?? translations.en[k] ?? k;
  return <I18nCtx.Provider value={{ lang, setLang, t, dir }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be inside I18nProvider");
  return ctx;
}
