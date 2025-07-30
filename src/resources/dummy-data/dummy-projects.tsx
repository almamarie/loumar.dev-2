import { ProjectType } from "@/resources/types/projects";
export const DUMMY_PROJECTS: ProjectType[] = [
  {
    title: "Personal Website",
    description: `Guess what my first project is, This website. I built this site with Next.js with inspiration from Brittany Chiang's website`,
    technologies: ["Next.js", "Typescript", "Firebase", "Vercel"],
    githubLink: "https://marieloumar-website.vercel.app/",
    url: "https://marieloumar-website.vercel.app/",
    image: "/marieloumar-website.png",
    type: "frontend",
  },

  {
    title: "OLA Parish Website",
    description:
      "An ongoing project that I am proud of. I am building this website for a parish to manage over 700 parishioners.",
    technologies: ["Next.js", "Nest.js", "Postgres", "Prisma", "Typescript"],
    githubLink: "",
    url: "https://olaparishbolga.org/",
    image: "/ola-parish.png",
    type: "fullstack",
  },

  {
    title: "Ourshea",
    description:
      "This is a fullstack application for a company that produces and exports shea butter. This website handles communication ",
    technologies: ["React.js", "Nodejs", "SQL", "Sequelize", "Nestjs"],
    githubLink: "",
    url: "https://github.com/almamarie/nodejs-react-todo.git",
    image: "/ourshea.png",
    type: "fullstack",
  },
];

export const OTHER_PROJECTS: ProjectType[] = [
  {
    title: "Todo App",
    description:
      "This projects allows users to create and manage their accounts and to create and manage todos. The project's APIs are well documented",
    technologies: ["React.js", "Nodejs", "SQL", "Sequelize"],
    githubLink: "https://github.com/almamarie/nodejs-react-todo.git",
    url: "https://github.com/almamarie/nodejs-react-todo.git",
    image: "/react-todo-app.png",
    type: "fullstack",
  },

  {
    title: "Shoppingify",
    description: `A web application that helps you keep track of your shopping list.`,
    technologies: ["Next.js", "Typescript", "Firebase", "vercel"],
    githubLink: "https://github.com/almamarie/shoppingify-frontend",
    url: "https://shoppingify-frontend-jet.vercel.app/",
    image: "/shoppingify.png",
    type: "fullstack",
  },
  {
    title: "Node.js starter template",
    description:
      "A node.js starter template that includes authentication, authorization, file server set up to upload and store files, proper documentation, and and API setup with routing",
    technologies: ["node.js", "vercel.com", "cloudinary", "REST APIs"],
    githubLink: "https://github.com/almamarie/nodejs-starter-template.git",
    url: "https://github.com/almamarie/nodejs-starter-template.git",
    image: "",
    type: "backend",
  },
  {
    title: "Countries Website",
    description:
      "A website to view all countries and their details including flags. The website leverages the countries API from https://restcountries.com/",
    technologies: ["React.js", "vercel.com", "REST APIs"],
    githubLink: "https://github.com/almamarie/rest-countries-api.git",
    url: "https://rest-countries-api-khaki-nine.vercel.app/",
    image: "/rest-countries-api.jpg",
    type: "fullstack",
  },

  {
    title: "Bookmark Landing Page",
    description:
      "Bookmark landing page. A challenge from frontendmentor.io. Responsive website that includes SEO",
    technologies: ["React.js", "CSS modules", "vercel.com"],
    githubLink: "https://github.com/almamarie/bookmark-landing-page.git",
    url: "https://bookmark-landing-page-rho-gilt.vercel.app/",
    image: "/bookmark-landing-page.png",
    type: "frontend",
  },
  {
    title: "Cat Wiki",
    description: `Another challenge from devchallenges.io. Catwiki is a Wikipedia of cat breeds. You can see the most searced cat breeds, see details including pictures of a particular cat breed`,
    technologies: ["Next.js/React.js", "Typescript", "Firebase", "vercel"],
    githubLink: "https://github.com/almamarie/cat-wiki",
    url: "https://catwiki-gilt.vercel.app/",
    image: "/catwiki.png",
    type: "fullstack",
  },

  {
    title: "Space Tourism website",
    description: `A website that gives a tour of space. The application was built with HTML, CSS and Vanilla javascript. A challenge from devchallenges.io.`,
    technologies: ["HTML", "CSS", "Vanilla Javascript"],
    githubLink:
      "https://github.com/almamarie/HTML-CSS-Space-tourism-website-Frontend-Masters.git",
    url: "https://github.com/almamarie/HTML-CSS-Space-tourism-website-Frontend-Masters.git",
    image: "",
    type: "frontend",
  },

  {
    title: "Image uploader app",
    description: `An application that accepts and uploads images`,
    technologies: ["Python", "Flask", "React"],
    githubLink: "https://github.com/almamarie/react-image-uploader-backend.git",
    url: "https://github.com/almamarie/react-image-uploader-backend.git",
    image: "",
    type: "fullstack",
  },

  {
    title: "Omnifood",
    description: `A food application site built with HTML, CSS and vanilla javascript while taking Jonas Schmedmann's course`,
    technologies: ["HTML", "CSS", "Vanilla Javascript"],
    githubLink: "https://github.com/almamarie/omnifood",
    url: "https://github.com/almamarie/omnifood",
    image: "",
    type: "frontend",
  },

  {
    title: "Coffee Shop",
    description: `A full stack coffee application built during the udacity fullstack nanodegree. The app uses Auth0 to manage security. I build the backend`,
    technologies: ["Python", "Typescript", "Flask", "Auth0"],
    githubLink: "https://github.com/almamarie/coffee-shop",
    url: "https://github.com/almamarie/coffee-shop",
    image: "",
    type: "fullstack",
  },

  {
    title: "Fyyur",
    description: `A full stack musical venue and artist booking site that facilitates the discovery and bookings of shows between local performing artists and venues`,
    technologies: ["Python", "Flask", "SQLAlchemy"],
    githubLink: "https://github.com/almamarie/fyyur.git",
    url: "https://github.com/almamarie/fyyur.git",
    image: "",
    type: "fullstack",
  },

  {
    title: "Trivia API",
    description:
      "A full stack trivia game that manages a team and allows them to hold trivia games on a regular basis",
    technologies: ["Python", "Flask", "REACT"],
    githubLink: "https://github.com/almamarie/trivia-api",
    url: "https://github.com/almamarie/trivia-api",
    image: "",
    type: "fullstack",
  },

  {
    title: "YTS clone",
    description: `A clone of the YTS movie download site`,
    technologies: ["React.js", "CSS modules"],
    githubLink: "https://github.com/almamarie/yts-clone",
    url: "https://github.com/almamarie/yts-clone",
    image: "",
    type: "frontend",
  },

  {
    title: "React Accordion",
    description: `an accordion component built in react`,
    technologies: ["React.js", "CSS modules"],
    githubLink: "https://github.com/almamarie/react-accordion",
    url: "https://github.com/almamarie/react-accordion",
    image: "",
    type: "frontend",
  },
  {
    title: "React Carousel",
    description: `an carousel component built in react`,
    technologies: ["React.js", "CSS modules"],
    githubLink: "https://github.com/almamarie/carousel-react",
    url: "https://github.com/almamarie/carousel-react",
    image: "",
    type: "frontend",
  },

  {
    title: "React Video player",
    description: `an video player component built in react`,
    technologies: ["React.js", "CSS modules"],
    githubLink: "https://github.com/almamarie/video-player",
    url: "https://github.com/almamarie/video-player",
    image: "",
    type: "frontend",
  },

  {
    title: "Product review site",
    description: `A product review site built with HTML and CSS`,
    technologies: ["HTML", "CSS"],
    githubLink:
      "https://github.com/almamarie/HTML-CSS-frontend-mentor-product-review-site.git",
    url: "https://github.com/almamarie/HTML-CSS-frontend-mentor-product-review-site.git",
    image: "",
    type: "frontend",
  },
  {
    title: "Expenses chart component",
    description: `A chart component for viewing expenses.`,
    technologies: ["HTML", "CSS"],
    githubLink:
      "https://github.com/almamarie/HTML-CSS-Expenses-chart-component",
    url: "https://github.com/almamarie/HTML-CSS-Expenses-chart-component",
    image: "",
    type: "frontend",
  },

  {
    title: "Severless application",
    description: `A serverless fullstack application`,
    technologies: ["Nodejs", "Typescript", "React"],
    githubLink: "https://github.com/almamarie/udacity-serverless-c4",
    url: "https://github.com/almamarie/udacity-serverless-c4",
    image: "",
    type: "fullstack",
  },
];

export const ALL_PROJECTS: ProjectType[] = [
  ...DUMMY_PROJECTS,
  ...OTHER_PROJECTS,
];
