import Header from "./Header";
import { Card, FormData } from "../types/types";
import CVPreview from "./CVPreview";
import CVForm from "./CVForm";

interface ContentProps {
  activeCard: Card;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const Content: React.FC<ContentProps> = ({
  activeCard,
  formData,
  setFormData,
}) => {
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-auto-1fr">
      <Header title={activeCard.title} />
      <CVForm
        activeCard={activeCard}
        formData={formData}
        setFormData={setFormData}
      />
      <CVPreview formData={formData} />
    </div>
  );
};

export default Content;
