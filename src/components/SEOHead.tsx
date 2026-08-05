import React, { useEffect } from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export const SEOHead: React.FC = () => {
  const { name, title, socials } = portfolioConfig.personal;
  const pageTitle = `${name} | ${title}`;
  const description = `Portfolio of ${name} showcasing Full-Stack Development projects, AI projects, Data Structures & Algorithms, and software engineering skills.`;

  useEffect(() => {
    // Update title
    document.title = pageTitle;

    // Update meta tags dynamically
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Add JSON-LD Structured Data Schema for Person
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": name,
      "jobTitle": title,
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      },
      "sameAs": [
        socials.github,
        socials.linkedin,
        socials.leetcode
      ]
    };

    let scriptTag = document.getElementById('json-ld-person');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-person';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLd);

  }, [pageTitle, description, name, title, socials]);

  return (
    <>
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/avatar.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/avatar.jpg" />
    </>
  );
};
