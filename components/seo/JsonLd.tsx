export const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://ic-aitewa-2027.tkmce.ac.in/#website",
        "url": "https://ic-aitewa-2027.tkmce.ac.in",
        "name": "IC-AITEWA 2027 | TKM Conference",
        "alternateName": [
          "TKM Conference",
          "TKM Conference 2027",
          "AITEWA",
          "AITEWA 2027",
          "AITHWA",
          "AITHWA 2027",
          "IC-AITEWA",
          "IC-AITEWA 2027",
          "ICAITEWA",
          "ICAITEWA 2027",
          "TKMCE Conference",
          "TKMCE Conference 2027"
        ],
        "description": "Official website of IC-AITEWA 2027 (TKM Conference / AITEWA / AITHWA) — International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation hosted by TKM College of Engineering, Kollam, Kerala, India.",
        "publisher": {
          "@id": "https://ic-aitewa-2027.tkmce.ac.in/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://ic-aitewa-2027.tkmce.ac.in/#organization",
        "name": "TKM College of Engineering",
        "alternateName": ["TKMCE", "TKM Engineering College Kollam"],
        "url": "https://tkmce.ac.in",
        "logo": "https://ic-aitewa-2027.tkmce.ac.in/logo.png",
        "sameAs": [
          "https://tkmce.ac.in",
          "https://en.wikipedia.org/wiki/TKM_College_of_Engineering"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Karicode",
          "addressLocality": "Kollam",
          "addressRegion": "Kerala",
          "postalCode": "691005",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "EducationEvent",
        "@id": "https://ic-aitewa-2027.tkmce.ac.in/#event",
        "name": "International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation (IC-AITEWA 2027)",
        "alternateName": [
          "TKM Conference",
          "TKM Conference 2027",
          "AITEWA",
          "AITEWA 2027",
          "AITHWA",
          "AITHWA 2027",
          "IC-AITEWA 2027",
          "TKMCE International Conference"
        ],
        "description": "Flagship international conference on Artificial Intelligence, Sustainable Energy, Water Security and Smart Automation organized by TKM College of Engineering, Kollam, Kerala.",
        "url": "https://ic-aitewa-2027.tkmce.ac.in",
        "startDate": "2027-03-18T09:00:00+05:30",
        "endDate": "2027-03-20T17:00:00+05:30",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "TKM College of Engineering (TKMCE)",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Karicode",
            "addressLocality": "Kollam",
            "addressRegion": "Kerala",
            "postalCode": "691005",
            "addressCountry": "IN"
          }
        },
        "organizer": {
          "@id": "https://ic-aitewa-2027.tkmce.ac.in/#organization"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://ic-aitewa-2027.tkmce.ac.in/registration",
          "price": "3500",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-08-01"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ic-aitewa-2027.tkmce.ac.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the TKM Conference (IC-AITEWA 2027 / AITEWA / AITHWA)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "IC-AITEWA 2027 (popularly known as the TKM Conference, AITEWA, or AITHWA) is the International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation, organized by the Department of Mechanical Engineering at TKM College of Engineering (TKMCE), Kollam, Kerala, India."
            }
          },
          {
            "@type": "Question",
            "name": "When and where is the TKM Conference (IC-AITEWA 2027) being held?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The conference takes place from March 18 to March 20, 2027 (with pre-conference workshops on March 17, 2027) at TKM College of Engineering, Karicode, Kollam, Kerala, India."
            }
          },
          {
            "@type": "Question",
            "name": "How can I submit a paper to IC-AITEWA 2027 (AITEWA / AITHWA)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Submissions are accepted via Microsoft CMT through the official conference portal at https://ic-aitewa-2027.tkmce.ac.in/call-for-papers."
            }
          },
          {
            "@type": "Question",
            "name": "What are the technical tracks at the TKM Conference IC-AITEWA 2027?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The five tracks are: 1. Artificial Intelligence and Machine Learning, 2. Sustainable Energy Technologies, 3. Water Resources and Desalination, 4. Intelligent Manufacturing and Automation, and 5. Smart Materials and Advanced Engineering."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
