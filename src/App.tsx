import { useState } from "react";
import Sidebar from "./components/Sidebar";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import ConstructionIcon from "@mui/icons-material/Construction";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PublicIcon from "@mui/icons-material/Public";
import AnchorIcon from "@mui/icons-material/Anchor";
import Content from "./components/Content";
import { Card } from "./types/types";

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
];

const App = () => {
  const [activeCard, setActiveCard] = useState<Card>(cards[0]);
  return (
    <main className="h-screen w-screen font-sans flex max-w-[192rem]">
      <Sidebar
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        cards={cards}
      />
      <Content activeCard={activeCard} />
    </main>
  );
};

export default App;
