import React, { useEffect } from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export const SEOHead: React.FC = () => {
  const { name, title, socials } = portfolioConfig.personal;
  const canonicalUrl = 'https://aayankhan-portfolio.vercel.app/';
  const pageTitle = `${name} | ${title}`;
  const description = `Portfolio of ${name}, a Java and Spring Boot Developer specializing in backend engineering, scalable REST APIs, relational databases, and secure system architectures.`;
  const imageUrl = `${canonicalUrl}images/avatar.jpg`;

  useEffect(() => {
    // Synchronize document title
    document.title = pageTitle;

    // Helper to update or create meta tags in <head>
    const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update Meta Description
    setMetaTag('meta[name="description"]', 'name', 'description', description);

    // Update Open Graph tags in <head>
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', imageUrl);

    // Update Twitter tags in <head>
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);

    // Ensure single canonical URL in <head>
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Synchronize Schema.org JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfilePage",
          "@id": `${canonicalUrl}#webpage`,
          "url": canonicalUrl,
          "name": pageTitle,
          "description": description,
          "isPartOf": {
            "@type": "WebSite",
            "@id": `${canonicalUrl}#website`,
            "url": canonicalUrl,
            "name": `${name} Portfolio`
          },
          "mainEntity": {
            "@id": `${canonicalUrl}#aayan-khan`
          }
        },
        {
          "@type": "Person",
          "@id": `${canonicalUrl}#aayan-khan`,
          "name": name,
          "givenName": "Aayan",
          "familyName": "Khan",
          "url": canonicalUrl,
          "jobTitle": title,
          "description": "Backend-focused developer building secure, scalable applications with Java, Spring Boot, REST APIs, databases, and modern frontend technologies.",
          "image": imageUrl,
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Nitte Meenakshi Institute of Technology",
            "alternateName": "NMIT"
          },
          "sameAs": [
            socials.github,
            socials.linkedin,
            socials.leetcode
          ],
          "knowsAbout": [
            "Java",
            "Spring Boot",
            "Spring Security",
            "REST APIs",
            "Spring Data JPA",
            "Hibernate",
            "MySQL",
            "PostgreSQL",
            "JUnit",
            "Docker",
            "Data Structures & Algorithms"
          ]
        }
      ]
    };

    let scriptTag = document.getElementById('json-ld-person');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-person';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [pageTitle, description, name, title, socials, canonicalUrl, imageUrl]);

  return null;
};
