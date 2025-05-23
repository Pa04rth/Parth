import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Parth Sohaney",
  initials: "PS",
  url: "https://dillion.io",
  location: "Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Developer specialised in Backend and System Design .I am also passionate about WEB3 and Cybersecurity domain",
  summary:
    "Hi, I’m Parth Sohaney — a backend-focused software developer passionate about building impactful tech. I’m currently pursuing Electronics Engineering at [K.N.I.T.](https://knit.ac.in/en) and have hands-on experience in web development, system design, and DevOps.I've built websites for local businesses and contributed extensively to [OWASP](https://owasp.org/), leading to my selection in Google Summer of Code. I love exploring new technologies and actively contribute to open source in my free time.Let’s connect and build something great together!",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "Rust",
    "Solana",
    "Ethereum",
    "Javascript",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "parthsohaney04@gmail.com",
    tel: "+917392049577",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Pa04rth",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/parthsohaney/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ParthSohaney04",
        icon: Icons.x,

        navbar: true,
      },
      Hashnode: {
        name: "Hashnode",
        url: "https://parth04underthehood.hashnode.dev/",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Hindustan Aeronautics Limited",
      href: "https://hal-india.co.in/ASERDC%20Korwa/M__324",
      badges: [],
      location: "In-Person",
      title: "Summer Intern",
      logoUrl: "/hal.png",
      start: "June 2025",
      end: "July 2025",
      description:
        "Project title - Optimizing OpenCRE: AI-Driven Gap Analysis, Frontend Enhancement and Graph Debugging for scalability",
    },
    {
      company: "Google Summer of Code 2025",
      href: "https://owasp.org/www-project-owtf/",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor at OWASP-OpenCRE Project",
      logoUrl: "/gsoc.png",
      start: "May 2025",
      end: "Sep 2025",
      description:
        "Project title - Optimizing OpenCRE: AI-Driven Gap Analysis, Frontend Enhancement and Graph Debugging for scalability",
    },
    {
      company: "OWTF  Project ",
      href: "https://owasp.org/www-project-owtf/",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/owtf.png",
      start: "Jan 2025",
      end: "May 2025",
      description:
        "My 15+ contributions include - creating and adding a new packge.json file for resolving installtion errors , building the latest OWTF website with updated documentation etc.",
    },
    {
      company: "OpenCRE Project ",
      href: "https://opencre.org/",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/opencre.jpeg",
      start: "Jan 2025",
      end: "May 2025",
      description:
        "My 20+ contributions include - adding the login and resource selection facility , reupdating the installation document and resolving various high end issues.",
    },
    {
      company: "Google Developer Group ",
      href: "https://gdg.community.dev/gdg-on-campus-kamla-nehru-institute-of-technology-sultanpur-india/",
      badges: [],
      location: "In-person",
      title: "Web2 & Web3 Lead",
      logoUrl: "/atomic.png",
      start: "Sep 2024",
      end: "May 2025",
      description:
        "Guided and mentored students in Web2 and Web3 development.I also helped them with their projects and hackathon submissions.",
    },
  ],
  education: [
    {
      school: "Kamla Nehru Institute of Technology",
      href: "https://knit.ac.in/en",
      degree: "Bechelor of Technology in Electronics and Communication",
      logoUrl: "/knit.jpeg",
      start: "2022",
      end: "2026",
    },

    {
      school: "Sheer Wood College",
      href: "https://www.sheerwoodjhs.com/",
      degree: "Senior Secondary",
      logoUrl: "/swc.jpeg",
      start: "2008",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "HackTU",
      dates: "February 8th - 9th, 2025",
      location: "Thapar Institute of Engineering and Technology , Patiala",
      description:
        "Developed Infilend , which acts as a bridge between Loan seeker and government .It also helps government to monitor on Loan Providers and seekers. ",
      image: "/hacktu.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Pa04rth/InfiLend1",
        },
        {
          title: "LinkedIn",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/parthsohaney_our-presentation-activity-7226233417040814080-aMCu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9eYx8BLoipa-ZVx1LMbDSFaB2QxSa6hho",
        },
      ],
    },
    {
      title: "Smart India Hackathon College ",
      dates: "August 23rd - 30th, 2024",
      location: "Kamla Nehru Institute of Technology , Sultanpur",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image: "/sih.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Drive",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1LDLt0mAtP2eb-Vna2A91jirnqhClTnhk/view?usp=sharing",
        },
      ],
    },
  ],
} as const;
