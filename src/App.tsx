import { useState } from "react";
import Sidebar from "./components/Sidebar";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import ConstructionIcon from "@mui/icons-material/Construction";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PublicIcon from "@mui/icons-material/Public";
import AnchorIcon from "@mui/icons-material/Anchor";
import TaskIcon from "@mui/icons-material/Task";
import DownloadIcon from "@mui/icons-material/Download";
import Content from "./components/Content";
import { Card, FormData } from "./types/types";
import CVPreview from "./components/CVPreview";

const App = () => {
  const [activeCard, setActiveCard] = useState<Card>(cards[0]);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  return (
    <>
      <main className="h-screen w-full max-w-[180rem] font-sans flex flex-row justify-center overflow-hidden print:hidden">
        <Sidebar
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          cards={cards}
        />
        <Content
          activeCard={activeCard}
          formData={formData}
          setFormData={setFormData}
        />
      </main>
      <div className="w-full h-full hidden print:block">
        <CVPreview formData={formData} />
      </div>
    </>
  );
};

const cards: Card[] = [
  {
    id: "personal_info",
    title: "Personal Information",
    icon: <PersonIcon />,
  },
  {
    id: "experience",
    title: "Experience",
    icon: <WorkIcon />,
  },
  {
    id: "education",
    title: "Education",
    icon: <SchoolIcon />,
  },
  {
    id: "skills",
    title: "Skills",
    icon: <ConstructionIcon />,
  },
  {
    id: "summary",
    title: "Summary",
    icon: <ChatBubbleOutlineIcon />,
  },
  {
    id: "languages",
    title: "Languages",
    icon: <PublicIcon />,
  },
  {
    id: "hobbies",
    title: "Hobbies",
    icon: <AnchorIcon />,
  },
  {
    id: "cv_clause",
    title: "CV Clause",
    icon: <TaskIcon />,
  },
  {
    id: "preview",
    title: "Preview and download",
    icon: <DownloadIcon />,
  },
];

const initialFormData: FormData = {
  personalInfo: {
    firstName: "John",
    lastName: "Smith",
    role: "Software Engineer",
    address: "New York, US",
    email: "john.smith@post.com",
    github: "https://github.com/johnsmith2222",
    linkedin: "https://linkedin.com/johnsmith2222",
    phone: "+123 456 789",
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      city: "San Francisco",
      startDate: "2024-02",
      endDate: "present",
      description:
        "As a Software Engineer at Facebook, I played a key role in enhancing the platform's performance and scalability.",
    },
    {
      role: "Junior Software Engineer",
      company: "Google",
      city: "New York",
      startDate: "2024-01",
      endDate: "2024-02",
      description:
        "During my tenure as a Junior Software Engineer at Google, I worked on various projects within the Google Search team.",
    },
  ],

  education: [
    {
      degree: "Master's Degree",
      title: "Software Engineering",
      school: "Stanford",
      city: "San Francisco",
      startDate: "2024-01",
      endDate: "2026-01",
    },
    {
      degree: "Bachelor's Degree",
      title: "Computer Science",
      school: "MIT",
      city: "Boston",
      startDate: "2020-01",
      endDate: "2024-01",
    },
  ],
  skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js"],
  summary: "A software engineer with a passion for web development.",
  languages: [
    { language: "English", level: "C2" },
    { language: "Spanish", level: "B2" },
  ],
  hobbies: ["Reading", "Traveling"],
  cvClause:
    "I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the European Parliament's and Council of the European Union Regulation on the Protection of Natural Persons as of 27 April 2016, with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC.",
};

export default App;
