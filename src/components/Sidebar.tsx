import { Card } from "../types/types";

interface SidebarProps {
  activeCard: Card;
  setActiveCard: (card: Card) => void;
  cards: Card[];
}

const Sidebar: React.FC<SidebarProps> = ({
  activeCard,
  setActiveCard,
  cards,
}) => {
  return (
    <div className="w-80 min-h-screen bg-primary h-full">
      <div className="py-10 text-center">
        <h1 className="text-focus text-2xl">CV App</h1>
      </div>
      <div className="w-full h-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-full relative transition-all duration-250 ease-in-out delay-0 ${
              index < cards.length - 1
                ? "before:content-[''] before:absolute before:bottom-0 before:left-[34px] before:top-[57px] before:h-[44%] before:w-[0.2rem] before:bg-tertiary-700 before:z-20"
                : ""
            } ${
              activeCard.id === card.id
                ? "bg-tertiary-800 text-white"
                : "cursor-pointer "
            }`}
            onClick={() => setActiveCard(card)}
          >
            <div
              className={`flex items-center p-4 transition-all duration-250 ease-in-out delay-0 ${
                activeCard.id === card.id
                  ? "text-white"
                  : "text-tertiary hover:text-white "
              }`}
            >
              <div
                className={`${
                  activeCard.id === card.id ? "bg-blue-box" : "bg-tertiary-700"
                } p-2 transition-all duration-250 ease-in-out delay-0`}
              >
                {card.icon}
              </div>
              <p className="ml-2 mt-1 text-[14px] transition-all duration-250 ease-in-out delay-0">
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
