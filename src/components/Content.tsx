import Header from "./Header";
import { Card } from "../types/types";

interface ContentProps {
  activeCard: Card;
}

const Content: React.FC<ContentProps> = ({ activeCard }) => {
  return <Header title={activeCard.title} />;
};

export default Content;
