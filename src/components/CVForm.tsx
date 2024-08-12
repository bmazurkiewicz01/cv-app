import { FormData, Card } from "../types/types";
import PersonalIcon from "../assets/personal.svg?react";
import ExperienceIcon from "../assets/experience.svg?react";
import SummaryIcon from "../assets/summary.svg?react";

interface CVFormProps {
  activeCard: Card;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (section: string, keyValue: string, value: any) => void;
  section: string;
  keyValue: string;
  height?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  section,
  keyValue,
  className = "",
}) => {
  return (
    <div className={`w-full text-tertiary-900 ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={name}
        className="border outline-0 border-tertiary-150 focus:border-tertiary-600 focus-visible:border-tertiary-600 active:border-tertiary-600 hover:border-tertiary-600 p-4 rounded-md w-full text-lg"
        onChange={(e) => onChange(section, keyValue, e.target.value)}
        value={value}
      />
    </div>
  );
};

const TextAreaField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  section,
  keyValue,
  height = "200px",
  className = "",
}) => {
  return (
    <div className={`w-full text-tertiary-900 ${className}`}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        className={`min-h-[${height}] border outline-0 border-tertiary-150 focus:border-tertiary-600 focus-visible:border-tertiary-600 active:border-tertiary-600 hover:border-tertiary-600 p-4 rounded-md w-full text-lg`}
        onChange={(e) => onChange(section, keyValue, e.target.value)}
        value={value}
      />
    </div>
  );
};

const UserHelper: React.FC<{
  title: string;
  description: string;
  icon: JSX.Element;
}> = ({ title, description, icon }) => {
  return (
    <div className="flex items-center space-x-4 p-4 mb-6 bg-box">
      <div className="flex items-center justify-center rounded-full">
        {icon}
      </div>
      <div>
        <h1 className="text-primary font-semibold text-[20px]">{title}</h1>
        <p className="text-primary">{description}</p>
      </div>
    </div>
  );
};

const CVForm: React.FC<CVFormProps> = ({
  activeCard,
  formData,
  setFormData,
}) => {
  const handleChange = (
    section: string,
    key: string,
    value: any,
    index?: number
  ) => {
    setFormData((prevData) => {
      const newData = { ...prevData };
      if (section === "experience" || section === "education") {
        newData[section][index!][key] = value;
      } else {
        newData[section as keyof FormData][key] = value;
      }
      return newData;
    });
  };

  const renderForm = () => {
    switch (activeCard.id) {
      case "personal_info":
        return (
          <>
            <UserHelper
              title="Start with Personal Information"
              description="Begin by entering your basic personal details. You can update and expand your profile information later."
              icon={<PersonalIcon className={"w-[110px] h-[110px]"} />}
            />
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="First Name"
                id="first_name"
                name="first_name"
                value={formData.personalInfo.firstName}
                onChange={handleChange}
                section="personalInfo"
                keyValue="firstName"
              />
              <InputField
                label="Last Name"
                id="last_name"
                name="last_name"
                value={formData.personalInfo.lastName}
                onChange={handleChange}
                section="personalInfo"
                keyValue="lastName"
              />
              <InputField
                label="Role"
                id="role"
                name="role"
                value={formData.personalInfo.role}
                onChange={handleChange}
                section="personalInfo"
                keyValue="role"
                className="col-span-2"
              />
              <TextAreaField
                label="Address"
                id="address"
                name="address"
                value={formData.personalInfo.address}
                onChange={handleChange}
                section="personalInfo"
                keyValue="address"
                height="auto"
                className="col-span-2"
              />
              <InputField
                label="E-mail"
                id="email"
                name="email"
                value={formData.personalInfo.email}
                onChange={handleChange}
                section="personalInfo"
                keyValue="email"
              />
              <InputField
                label="Github"
                id="github"
                name="github"
                value={formData.personalInfo.github}
                onChange={handleChange}
                section="personalInfo"
                keyValue="github"
              />
              <InputField
                label="LinkedIn"
                id="linkedin"
                name="linkedin"
                value={formData.personalInfo.linkedin}
                onChange={handleChange}
                section="personalInfo"
                keyValue="linkedin"
                className="col-span-2"
              />
              <InputField
                label="Phone"
                id="phone"
                name="phone"
                value={formData.personalInfo.phone}
                onChange={handleChange}
                section="personalInfo"
                keyValue="phone"
              />
            </div>
          </>
        );
      case "experience":
        return (
          <>
            <UserHelper
              title="Your Work Experience"
              description="Add your work experience in reverse chronological order. You can add more than one experience."
              icon={<ExperienceIcon className={"w-[110px] h-[110px]"} />}
            />
          </>
        );
      case "summary":
        return (
          <>
            <UserHelper
              title="Write a Summary"
              description="Write a short summary about yourself. This will be the first thing recruiters will read."
              icon={<SummaryIcon className={"w-[110px] h-[110px]"} />}
            />
            <TextAreaField
              label="Summary"
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              section="summary"
              keyValue="summary"
              className="col-span-2"
            />
          </>
        );
      default:
        return <div>In work</div>;
    }
  };

  return <div className="py-8 px-12 overflow-y-auto">{renderForm()}</div>;
};

export default CVForm;
