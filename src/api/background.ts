const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Obour Institute",
        degree: "",
        detail: "Bachelor's Degree in computer and information systems",
        year: "2020-2025 (expected)",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Amyal Smart",
        role: "Frontend Web Developer",
        url: "https://amyalsmart.com/",
        desc: `- Designed and developed modern applications using Vite.js, Next.js, and TypeScript.
- Built responsive landing pages, dashboards, and storage systems for shop products.
- Implemented real-time tracking systems to monitor delivery locations.`,
        year: "02/2024 - Present",
        location: "Saudi Arabia",
      },
      {
        id: 2,
        title: "MassFluence",
        role: "Frontend Web Developer",
        url: "https://www.mass-fluence.com/",
        desc: `- Specialized in developing web applications, corporate dashboards, and interactive charts.
- Created responsive Learning Management Systems (LMS) tailored to client needs.
- Ensured high performance and scalability of web applications.`,
        year: "10/2023 - 03/2024",
        location: "Lebanon",
      },
      {
        id: 3,
        title: "Trugraph",
        role: "Frontend Web Developer",
        url: "N/A",
        desc: `
        - Engineered web applications using Vite.js, Next.js, and TypeScript.
        - Enhanced user experiences by integrating modern UI frameworks.`,
        year: "09/2020 - 02/2021",
        location: "Egypt",
      },
      {
        id: 3,
        title: "SmartiveMedia .INC",
        role: "Frontend Web Developer",
        url: "https://elmarketing.digital/",
        desc: `
        - Built real estate and e-commerce applications using Next.js, Material-UI, and Ant Design.
        - Developed Shopify-based platforms with Nextjs, Typescript and Tailwind CSS.
        - Delivered responsive and user-friendly interfaces for diverse applications`,
        year: "01/2022 - 12/2022",
        location: "Saudi Arabia",
      },
    ],
  },
];

export function fetchBackgroundData() {
  return background;
}
