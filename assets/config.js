/* Public business settings. Never put API keys here. */
const GNS_CONFIG = {
  businessName: 'GNS Event Rentals',
  logoImage: '/assets/images/gns-logo.png',
  siteUrl: '', // Your final HTTPS domain, without a trailing slash.
  address: { streetAddress: '2500 Vantage Dr', addressLocality: 'Woodbridge', addressRegion: 'VA', postalCode: '22191', addressCountry: 'US' },
  email: '', // Client's real quote inbox; enables an email-draft fallback.
  phone: '',
  instagramUrl: '',
  googleAnalyticsId: '', // G-XXXXXXXXXX; loads only with visitor consent.
  searchConsoleVerification: '',
  rentalPeriod: '24-hour rental',
  primaryArea: 'Washington, DC / Northern Virginia',
  secondaryArea: 'Dallas–Fort Worth, Texas'
};
if (typeof module !== 'undefined') module.exports = GNS_CONFIG;
if (typeof window !== 'undefined') window.GNS_CONFIG = GNS_CONFIG;
