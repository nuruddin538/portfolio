import bazardorImg from "../assets/projects/bazardor.svg";
import devstackImg from "../assets/projects/devstack.svg";
import fitlogImg from "../assets/projects/fitlog.svg";
import plantImg from "../assets/projects/plantdiscovery.svg";
import bplImg from "../assets/projects/bpldream.svg";

const projects = [
  {
    id: 1,
    title: "BazarDor — Bangla Grocery Price Tracker",
    image: bazardorImg,
    category: "Full-Stack Next.js Application",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "REST APIs"
    ],
    description:
      "A Bangla-focused grocery price tracking application that helps users explore the daily prices of essential products and compare market prices with market-based grocery price information, authentication, and Bangla-friendly displays.",
    live: "https://bazardor-json.vercel.app/",
    github: "https://github.com/nuruddin538/bazar-dor",
    challenges: [
      "Building a responsive product discovery interface with Bangla-friendly price and unit displays",
      "Structuring product categories and detailed product pages with market-based grocery price information",
      "Implementing secure authentication workflows and protected-route functionality using Better Auth",
      "Architecting reusable UI components with clean Next.js App Router patterns"
    ],
    future: [
      "Crowdsourced daily market price reporting by verified local vendors",
      "Real-time price trend fluctuation charts using Chart.js",
      "Offline caching and PWA functionality for quick market lookups"
    ],
  },
  {
    id: 2,
    title: "DevStack — Technology Stack Builder",
    image: devstackImg,
    category: "Frontend Web Application",
    technologies: [
      "React.js",
      "TypeScript",
      "Vite",
      "CSS3",
      "React Toastify"
    ],
    description:
      "An interactive web application that allows users to explore web development technologies and build personalized technology stacks with real-time stack management and interactive technology cards.",
    live: "https://dev-stack-dc2uoo5os-md-nur-uddins-projects.vercel.app/",
    github: "https://github.com/nuruddin538/DevStack",
    challenges: [
      "Enforcing strict TypeScript-based data structures across diverse technology categories",
      "Designing responsive interactive technology cards with multi-selection and stack composition",
      "Managing dynamic stack state and seamless user feedback with toast notifications"
    ],
    future: [
      "Exporting personalized stack configurations as markdown or JSON architecture templates",
      "Community sharing and upvoting for popular tech combinations",
      "AI-driven stack recommendation based on project complexity and team size"
    ],
  },
  {
    id: 3,
    title: "Fit-Log — Fitness Tracking Application",
    image: fitlogImg,
    category: "Health & Fitness Web App",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Context API"
    ],
    description:
      "A fitness-focused web application built to practice interactive interfaces, activity logging, and modern frontend state management with clean, responsive dashboards.",
    live: "https://fit-log-ten-sooty.vercel.app/",
    github: "https://github.com/nuruddin538/fit-log",
    challenges: [
      "Managing multi-routine workout logs and active session counters using React Context API",
      "Creating mobile-first responsive gym dashboards using modern Tailwind CSS layouts",
      "Validating numeric workout inputs and volume calculations with TypeScript"
    ],
    future: [
      "Local storage and IndexedDB offline persistence for workouts without network coverage",
      "Interactive weekly volume graphs and personal record (PR) badges",
      "Custom routine builder with built-in rest interval audio cues"
    ],
  },
  {
    id: 4,
    title: "Plant Discovery Application",
    image: plantImg,
    category: "REST API Web Application",
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "REST APIs",
      "CSS3"
    ],
    description:
      "A React-based application for exploring plant information and browsing categories using external API data, with rich botanical details, responsive cards, and search filtering.",
    live: "https://adorable-starship-b29618.netlify.app/",
    github: "https://github.com/nuruddin538",
    challenges: [
      "Asynchronous REST API data fetching with robust loading and error state management",
      "Category-based browsing and dynamic query filtering across plant species",
      "Building clean, reusable UI components with responsive CSS layouts"
    ],
    future: [
      "Plant care reminder calendar with watering and sunlight notifications",
      "Image recognition integration for instant plant species identification",
      "User plant diary for tracking growth milestones"
    ],
  },
  {
    id: 5,
    title: "BPL Dream — Cricket Player Application",
    image: bplImg,
    category: "Sports & Entertainment Web App",
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "CSS3",
      "JSON"
    ],
    description:
      "A cricket-themed web application featuring Bangladesh Premier League player profiles, fixtures, and organized tournament navigation rendered from structured JSON data.",
    live: "https://adorable-starship-b29618.netlify.app/",
    github: "https://github.com/nuruddin538",
    challenges: [
      "Structured JSON data rendering across home, fixtures, players, and schedule sections",
      "Component-based UI development with responsive mobile navigation",
      "Team roster filtering and individual player stat comparisons"
    ],
    future: [
      "Live match score API integration with real-time ball-by-ball updates",
      "Interactive fantasy dream team builder with point calculation rules",
      "Match schedule export to Google Calendar"
    ],
  },
];

export default projects;
