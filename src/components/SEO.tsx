import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import logo from '../assets/ncgos-logo.png';

const SITE_NAME = 'New Creation Group of Schools';
const SITE_URL = 'https://newcreationschools.org';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  children?: ReactNode;
}

const SEO = ({
  title,
  description = 'New Creation Group of Schools — Providing quality, holistic education from Nursery through Secondary in Calabar, Nigeria. Raising tomorrow\'s leaders with excellence, character, and purpose.',
  canonical,
  ogImage,
  ogType = 'website',
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  
  // Use imported logo as fallback, and ensure it's an absolute URL
  const finalOgImage = ogImage 
    ? (ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`)
    : `${SITE_URL}${logo}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalOgImage} />

      {/* Geo */}
      <meta name="geo.region" content="NG-CR" />
      <meta name="geo.placename" content="Calabar, Cross River State, Nigeria" />
    </Helmet>
  );
};

export default SEO;
