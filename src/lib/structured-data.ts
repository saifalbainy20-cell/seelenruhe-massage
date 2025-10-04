export interface OrganizationData {
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    telephone: string;
    email: string;
    contactType: string;
  };
}

export interface ServiceData {
  name: string;
  description: string;
  provider: string;
  serviceType: string;
  areaServed: string;
  url: string;
}

export function generateOrganizationSchema(data: OrganizationData) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'HealthAndBeautyBusiness'],
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: data.contactPoint.telephone,
      email: data.contactPoint.email,
      contactType: data.contactPoint.contactType
    },
    openingHours: [
      'Mo-Fr 09:00-18:00',
      'Sa 09:00-16:00'
    ],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card',
    hasMap: 'https://maps.google.com/?q=' + encodeURIComponent(data.address.streetAddress + ', ' + data.address.addressLocality),
    sameAs: [
      data.url
    ]
  };
}

export function generateServiceSchema(data: ServiceData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    provider: {
      '@type': 'Organization',
      name: data.provider
    },
    serviceType: data.serviceType,
    areaServed: data.areaServed,
    url: data.url
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
