interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="w-full h-16 col-span-2 bg-secondary flex flex-start items-center px-12 border-b border-b-primary">
      <h1 className="text-primary font-semibold text-[22px]">{title}</h1>
    </div>
  );
};

export default Header;
