import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const perdonalInfo = {
  name: "Bijeta Sah",
  role: "Frontend Developer",
  bio: "Hi, I’m Bijeta Sah — a Frontend Developer passionate about creating clean, user-friendly interfaces. I work mainly with React, Next.js, and Tailwind CSS, and I enjoy building projects that blend good design with smooth interactions. I love exploring new UI ideas and constantly pushing myself to improve with every project.Outside of coding, I love watching anime.",
  location: "India",
};

export const projects = [1, 2, 3, 4, 5];

export const socialLinks = [
  {
    name: "Github",
    icon: FaGithub,
    link: "https://www.github.com/BijetaSah",
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/bijeta-sah",
    color: "hover:text-blue-400",
  },
  {
    name: "EMail",
    icon: MdEmail,
    link: "bijetasah30@gmail.com",
    color: "hover:text-sky-400",
  },
];

export const experiences = [
  {
    title: "Froneend Developer Intern",
    company: "CollegePur",
    period: "Aug 2025 - Nov 2025",
    description:
      "Worked on real-world frontend features using React and Next.js, improving UI consistency, component structure, and overall user experience. Collaborated with the team, learned modern development practices, and contributed to building responsive and user-friendly interfaces.",
    color: "violet",
  },
];

export const skills = [
  {
    category: "Frontend",
    skills: [
      "Javascript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Tools",
    skills: ["Git", "VS Code", "Figma"],
  },
];

export const certificates = [
  "Complete Javascript Course by Udemy",
  "Ultimate React Course by Udemy",
];

export const animatedBlobs = [
  {
    className:
      "top-[-10%] left-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 opacity-40 blur-[180px]",
    animate: {
      x: [0, 150, -100, 0],
      y: [0, -80, 60, 0],
      scale: [1, 1.2, 0.9, 1],
      rotate: [0, 90, 180, 360],
    },
    duration: 20,
  },
  {
    className:
      "bottom-[-15%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-tl from-cyan-500 via-blue-500 to-indigo-600 opacity-50 blur-[160px]",
    animate: {
      x: [0, -140, 100, 0],
      y: [0, 90, -70, 0],
      scale: [1, 0.85, 1.15, 1],
      rotate: [360, 270, 180, 0],
    },
    duration: 25,
  },
  {
    className:
      "top-[10%] left-[80%] -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 opacity-35 blur-[200px]",
    animate: {
      x: [0, 80, -120, 0],
      y: [0, -60, 80, 0],
      scale: [1, 1.1, 0.95, 1],
      rotate: [0, -90, -180, -360],
    },
    duration: 22,
  },
  {
    className:
      "top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500 via-teal-500 to-cyan-600 opacity-30 blur-[190px]",
    animate: {
      x: [0, -70, 110, 0],
      y: [0, 100, -50, 0],
      scale: [1, 0.9, 1.2, 1],
      rotate: [0, 120, 240, 360],
    },
    duration: 18,
  },
  {
    className:
      "bottom-[30%] left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-500 via-yellow-500 to-lime-500 opacity-25 blur-[210px]",
    animate: {
      x: [0, 130, -90, 0],
      y: [0, -70, 90, 0],
      scale: [1, 1.15, 0.88, 1],
      rotate: [0, -120, -240, -360],
    },
    duration: 28,
  },
];
