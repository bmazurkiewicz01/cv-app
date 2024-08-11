import Header from "./Header";
import { Card, FormData } from "../types/types";
import CVPreview from "./CVPreview";
import CVForm from "./CVForm";

interface ContentProps {
  activeCard: Card;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  targetRef: React.RefObject<HTMLDivElement>;
}

const Content: React.FC<ContentProps> = ({
  activeCard,
  formData,
  setFormData,
  targetRef,
}) => {
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-auto-1fr">
      <Header title={activeCard.title} />
      <CVForm
        activeCard={activeCard}
        formData={formData}
        setFormData={setFormData}
      />
      <CVPreview formData={formData} targetRef={targetRef} />
    </div>
  );
};

export default Content;
