import type { Language } from '../lib/i18n';

export interface Translation {
  // Navigation
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    book: string;
  };
  
  // Hero Section
  hero: {
    rotating_headings: string[];
    description: string;
    cta: string;
  };
  
  // Welcome Section
  welcome: {
    title: string;
    subtitle: string;
    description: string;
  };
  
  // Services
  services: {
    title: string;
    subtitle: string;
    view_all: string;
    learn_more: string;
    all_services: string;
  };

  // Service Categories
  service_categories: {
    beauty_massage: string;
    therapeutic_massage: string;
    beauty_therapy: string;
    regular_beauty: string;
  };
  
  // About
  about: {
    title: string;
    subtitle: string;
    description: string;
    experience: string;
    professional: string;
    relaxing: string;
  };
  
  // Contact
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    book_now: string;
  };
  
  // Footer
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
    imprint: string;
  };
  
  // SEO
  seo: {
    home_title: string;
    home_description: string;
    home_keywords: string;
    services_title: string;
    services_description: string;
  };
}

export const translations: Record<Language, Translation> = {
  de: {
    nav: {
      home: 'Startseite',
      services: 'Leistungen',
      about: 'Über uns',
      contact: 'Kontakt',
      book: 'Termin buchen'
    },
    hero: {
      rotating_headings: [
        'Entspannung für Körper und Seele',
        'Professionelle Massage-Behandlungen',
        'Ihr Weg zum Wohlbefinden',
        'Ruhe und Harmonie erleben'
      ],
      description: 'Willkommen bei Seelenruhe - Ihrem Ort der Entspannung und des Wohlbefindens',
      cta: 'Jetzt Termin buchen'
    },
    welcome: {
      title: 'Willkommen bei Seelenruhe',
      subtitle: 'Ihr Massage-Studio in Berlin',
      description: 'Bei Seelenruhe bieten wir Ihnen professionelle Massage- und Wellness-Behandlungen in einer entspannten und harmonischen Atmosphäre. Unser erfahrenes Team sorgt dafür, dass Sie sich rundum wohlfühlen und neue Energie tanken können.'
    },
    services: {
      title: 'Unsere Leistungen',
      subtitle: 'Professionelle Massage- und Wellness-Behandlungen',
      view_all: 'Alle Leistungen ansehen',
      learn_more: 'Mehr erfahren',
      all_services: 'Alle Behandlungen'
    },
    service_categories: {
      beauty_massage: 'Schönheitsmassage',
      therapeutic_massage: 'Therapeutische Massage',
      beauty_therapy: 'Schönheitstherapie',
      regular_beauty: 'Reguläre Schönheitspflege'
    },
    about: {
      title: 'Über Seelenruhe',
      subtitle: 'Ihr Partner für Entspannung und Wohlbefinden',
      description: 'Seit vielen Jahren bieten wir unseren Kunden professionelle Massage- und Wellness-Behandlungen an. Unser Team besteht aus erfahrenen und zertifizierten Therapeuten, die mit Leidenschaft und Hingabe für Ihr Wohlbefinden sorgen.',
      experience: 'Jahre Erfahrung',
      professional: 'Professionelle Therapeuten',
      relaxing: 'Entspannte Atmosphäre'
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Wir freuen uns auf Ihren Besuch',
      address: 'Musterstraße 123, 12345 Berlin',
      phone: '+49 30 12345678',
      email: 'info@seelenruhe.com',
      hours: 'Mo-Fr: 9:00-20:00 Uhr, Sa: 10:00-18:00 Uhr',
      book_now: 'Jetzt buchen'
    },
    footer: {
      copyright: '© 2024 Seelenruhe Massage Studio. Alle Rechte vorbehalten.',
      privacy: 'Datenschutz',
      terms: 'AGB',
      imprint: 'Impressum'
    },
    seo: {
      home_title: 'Seelenruhe Massage Studio - Entspannung und Wohlbefinden in Berlin',
      home_description: 'Professionelle Massage- und Wellness-Behandlungen in Berlin. Entspannung für Körper und Seele in unserem modernen Studio. Buchen Sie jetzt Ihren Termin!',
      home_keywords: 'Massage Berlin, Wellness Berlin, Entspannung, Massage Studio, Wohlbefinden, Therapie',
      services_title: 'Unsere Leistungen - Seelenruhe Massage Studio Berlin',
      services_description: 'Entdecken Sie unsere vielfältigen Massage- und Wellness-Behandlungen: Klassische Massage, Wellness-Behandlungen, Therapie-Massage und mehr.'
    }
  },
  
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      book: 'Book Appointment'
    },
    hero: {
      rotating_headings: [
        'Relaxation for Body and Soul',
        'Professional Massage Treatments',
        'Your Path to Wellbeing',
        'Experience Peace and Harmony'
      ],
      description: 'Welcome to Seelenruhe - Your place of relaxation and wellbeing',
      cta: 'Book Now'
    },
    welcome: {
      title: 'Welcome to Seelenruhe',
      subtitle: 'Your Massage Studio in Berlin',
      description: 'At Seelenruhe, we offer professional massage and wellness treatments in a relaxed and harmonious atmosphere. Our experienced team ensures that you feel completely comfortable and can recharge your energy.'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Professional massage and wellness treatments',
      view_all: 'View All Services',
      learn_more: 'Learn More',
      all_services: 'All Treatments'
    },
    service_categories: {
      beauty_massage: 'Beauty Massage',
      therapeutic_massage: 'Therapeutic Massage',
      beauty_therapy: 'Beauty Therapy',
      regular_beauty: 'Regular Beauty'
    },
    about: {
      title: 'About Seelenruhe',
      subtitle: 'Your Partner for Relaxation and Wellbeing',
      description: 'For many years, we have been providing our clients with professional massage and wellness treatments. Our team consists of experienced and certified therapists who work with passion and dedication for your wellbeing.',
      experience: 'Years of Experience',
      professional: 'Professional Therapists',
      relaxing: 'Relaxing Atmosphere'
    },
    contact: {
      title: 'Contact',
      subtitle: 'We look forward to your visit',
      address: 'Sample Street 123, 12345 Berlin',
      phone: '+49 30 12345678',
      email: 'info@seelenruhe.com',
      hours: 'Mon-Fri: 9:00-20:00, Sat: 10:00-18:00',
      book_now: 'Book Now'
    },
    footer: {
      copyright: '© 2024 Seelenruhe Massage Studio. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      imprint: 'Imprint'
    },
    seo: {
      home_title: 'Seelenruhe Massage Studio - Relaxation and Wellbeing in Berlin',
      home_description: 'Professional massage and wellness treatments in Berlin. Relaxation for body and soul in our modern studio. Book your appointment now!',
      home_keywords: 'Massage Berlin, Wellness Berlin, Relaxation, Massage Studio, Wellbeing, Therapy',
      services_title: 'Our Services - Seelenruhe Massage Studio Berlin',
      services_description: 'Discover our diverse massage and wellness treatments: Classic Massage, Wellness Treatments, Therapy Massage and more.'
    }
  },
  
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'من نحن',
      contact: 'اتصل بنا',
      book: 'احجز موعد'
    },
    hero: {
      rotating_headings: [
        'الاسترخاء للجسم والروح',
        'علاجات مساج احترافية',
        'طريقك إلى العافية',
        'اختبر السلام والانسجام'
      ],
      description: 'مرحباً بكم في سيلينروه - مكانكم للاسترخاء والعافية',
      cta: 'احجز الآن'
    },
    welcome: {
      title: 'مرحباً بكم في سيلينروه',
      subtitle: 'استوديو المساج الخاص بك في برلين',
      description: 'في سيلينروه، نقدم لكم علاجات مساج واسترخاء احترافية في جو مريح ومتناغم. فريقنا ذو الخبرة يضمن أن تشعروا بالراحة التامة وأن تستعيدوا طاقتكم.'
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'علاجات مساج واسترخاء احترافية',
      view_all: 'عرض جميع الخدمات',
      learn_more: 'اعرف المزيد',
      all_services: 'جميع العلاجات'
    },
    service_categories: {
      beauty_massage: 'مساج تجميل',
      therapeutic_massage: 'مساج علاجي',
      beauty_therapy: 'تجميل علاجي',
      regular_beauty: 'تجميل عادي'
    },
    about: {
      title: 'عن سيلينروه',
      subtitle: 'شريكك في الاسترخاء والعافية',
      description: 'منذ سنوات عديدة، نقدم لعملائنا علاجات مساج واسترخاء احترافية. فريقنا يتكون من معالجين ذوي خبرة ومعتمدين يعملون بشغف وتفانٍ من أجل عافيتكم.',
      experience: 'سنوات من الخبرة',
      professional: 'معالجون محترفون',
      relaxing: 'جو مريح'
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'نتطلع لزيارتكم',
      address: 'شارع المثال 123، 12345 برلين',
      phone: '+49 30 12345678',
      email: 'info@seelenruhe.com',
      hours: 'الإثنين-الجمعة: 9:00-20:00، السبت: 10:00-18:00',
      book_now: 'احجز الآن'
    },
    footer: {
      copyright: '© 2024 استوديو سيلينروه للمساج. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      imprint: 'بيانات الناشر'
    },
    seo: {
      home_title: 'استوديو سيلينروه للمساج - الاسترخاء والعافية في برلين',
      home_description: 'علاجات مساج واسترخاء احترافية في برلين. الاسترخاء للجسم والروح في استوديونا الحديث. احجز موعدك الآن!',
      home_keywords: 'مساج برلين، عافية برلين، استرخاء، استوديو مساج، رفاهية، علاج',
      services_title: 'خدماتنا - استوديو سيلينروه للمساج برلين',
      services_description: 'اكتشف علاجات المساج والاسترخاء المتنوعة لدينا: المساج الكلاسيكي، علاجات العافية، المساج العلاجي والمزيد.'
    }
  },
  
  tr: {
    nav: {
      home: 'Ana Sayfa',
      services: 'Hizmetler',
      about: 'Hakkımızda',
      contact: 'İletişim',
      book: 'Randevu Al'
    },
    hero: {
      rotating_headings: [
        'Vücut ve Ruh için Rahatlama',
        'Profesyonel Masaj Tedavileri',
        'Sağlığa Giden Yolunuz',
        'Huzur ve Uyumu Yaşayın'
      ],
      description: 'Seelenruhe\'ye hoş geldiniz - Rahatlama ve sağlık mekanınız',
      cta: 'Şimdi Rezervasyon Yapın'
    },
    welcome: {
      title: 'Seelenruhe\'ye Hoş Geldiniz',
      subtitle: 'Berlin\'deki Masaj Stüdyonuz',
      description: 'Seelenruhe\'de rahat ve uyumlu bir atmosferde profesyonel masaj ve wellness tedavileri sunuyoruz. Deneyimli ekibimiz kendinizi tamamen rahat hissetmenizi ve enerjinizi yenilemenizi sağlar.'
    },
    services: {
      title: 'Hizmetlerimiz',
      subtitle: 'Profesyonel masaj ve wellness tedavileri',
      view_all: 'Tüm Hizmetleri Görüntüle',
      learn_more: 'Daha Fazla Bilgi',
      all_services: 'Tüm Tedaviler'
    },
    service_categories: {
      beauty_massage: 'Güzellik Masajı',
      therapeutic_massage: 'Terapötik Masaj',
      beauty_therapy: 'Güzellik Terapisi',
      regular_beauty: 'Düzenli Güzellik'
    },
    about: {
      title: 'Seelenruhe Hakkında',
      subtitle: 'Rahatlama ve Sağlık İçin Ortağınız',
      description: 'Uzun yıllardır müşterilerimize profesyonel masaj ve wellness tedavileri sunuyoruz. Ekibimiz, refahınız için tutkuyla ve özveriyle çalışan deneyimli ve sertifikalı terapistlerden oluşmaktadır.',
      experience: 'Yıllık Deneyim',
      professional: 'Profesyonel Terapistler',
      relaxing: 'Rahatlatıcı Atmosfer'
    },
    contact: {
      title: 'İletişim',
      subtitle: 'Ziyaretinizi dört gözle bekliyoruz',
      address: 'Örnek Sokak 123, 12345 Berlin',
      phone: '+49 30 12345678',
      email: 'info@seelenruhe.com',
      hours: 'Pzt-Cum: 9:00-20:00, Cmt: 10:00-18:00',
      book_now: 'Şimdi Rezervasyon Yapın'
    },
    footer: {
      copyright: '© 2024 Seelenruhe Masaj Stüdyosu. Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
      terms: 'Hizmet Şartları',
      imprint: 'Künye'
    },
    seo: {
      home_title: 'Seelenruhe Masaj Stüdyosu - Berlin\'de Rahatlama ve Sağlık',
      home_description: 'Berlin\'de profesyonel masaj ve wellness tedavileri. Modern stüdyomuzda vücut ve ruh için rahatlama. Şimdi randevunuzu alın!',
      home_keywords: 'Berlin Masaj, Berlin Wellness, Rahatlama, Masaj Stüdyosu, Sağlık, Terapi',
      services_title: 'Hizmetlerimiz - Seelenruhe Masaj Stüdyosu Berlin',
      services_description: 'Çeşitli masaj ve wellness tedavilerimizi keşfedin: Klasik Masaj, Wellness Tedavileri, Terapi Masajı ve daha fazlası.'
    }
  }
};

export function getTranslation(lang: Language): Translation {
  return translations[lang] || translations.de;
}
