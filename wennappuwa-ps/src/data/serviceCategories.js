const categories = [
    {
      name: "Residents",
      subcategories: [
        {
          name: "Environment & Water",
          href: "/environment-water",
          links: [
            { text: "Gully Bowser Service", href: "/gully-bowser" },
            { text: "Aster Collection", href: "/aster-collection" },
            { text: "Tender Notice & Bidding Process", href: "/tender-notice" },
            { text: "Reception And Community Halls", href: "/community-halls" }
          ]
        },
        {
          name: "Education and Recreation",
          href: "/education-recreation",
          links: [
            { text: "School Enrollment", href: "/school-enrollment" },
            { text: "Library Services", href: "/library-services" },
            { text: "Community Sports", href: "/community-sports" },
            { text: "Public Parks", href: "/public-parks" }
          ]
        },
        {
            name: "Animals & Pets",
            href: "/animals-pets",
            links: [
              { text: "School Enrollment", href: "/school-enrollment" },
              { text: "Library Services", href: "/library-services" },
              { text: "Community Sports", href: "/community-sports" },
              { text: "Public Parks", href: "/public-parks" }
            ]
          },
          {
            name: "Funeral Services",
            href: "/funeral-services",
            links: [
              { text: "School Enrollment", href: "/school-enrollment" },
              { text: "Library Services", href: "/library-services" },
              { text: "Community Sports", href: "/community-sports" },
              { text: "Public Parks", href: "/public-parks" }
            ]
          },
          {
            name: "Health & Wellness",
            href: "/health-wellness",
            links: [
              { text: "School Enrollment", href: "/school-enrollment" },
              { text: "Library Services", href: "/library-services" },
              { text: "Community Sports", href: "/community-sports" },
              { text: "Public Parks", href: "/public-parks" }
            ]
          },
        // Add more subcategories for "Residents" if needed
      ]
    },
    {
      name: "Business",
      subcategories: [
        {
          name: "Tenders and Contact",
          links: [
            { text: "Tender Notices", href: "/tender-notices" },
            { text: "Contact Information", href: "/contact-info" }
          ]
        },
        {
          name: "Tests",
          links: [
            { text: "Test Details", href: "/test-details" }
          ]
        },
        {
          name: "Reservations, Renting, Leasing",
          links: [
            { text: "Reservation Process", href: "/reservation-process" },
            { text: "Leasing Agreements", href: "/leasing-agreements" }
          ]
        },
        // Add more subcategories for "Business" if needed
      ]
    },
    // Add more main categories (like Menu 01, Menu 02, etc.)
  ];
  
  export default categories;
  