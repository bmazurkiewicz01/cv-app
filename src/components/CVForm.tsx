import { FormData, Card } from "../types/types";
import PersonalIcon from "../assets/personal.svg?react";
import ExperienceIcon from "../assets/experience.svg?react";
import SummaryIcon from "../assets/summary.svg?react";
import EducationIcon from "../assets/education.svg?react";
import SkillsIcon from "../assets/skills.svg?react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { JSX, useState } from "react";

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
  onChange: (
    section: string,
    keyValue: string,
    value: any,
    index: number
  ) => void;
  section: string;
  keyValue: string;
  height?: string;
  index?: number;
  className?: string;
  children?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  section,
  keyValue,
  index = 0,
  className = "",
  children,
}) => {
  return (
    <div
      className={`w-full text-tertiary-900 ${className} flex gap-2 items-center`}
    >
      <div className="w-full">
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          id={id}
          name={name}
          className="border outline-0 border-tertiary-150 focus:border-tertiary-600 focus-visible:border-tertiary-600 active:border-tertiary-600 hover:border-tertiary-600 p-4 rounded-md w-full text-lg"
          onChange={(e) => onChange(section, keyValue, e.target.value, index)}
          value={value}
        />
      </div>
      {children && <div className="w-[20%] h-full">{children}</div>}
    </div>
  );
};

const InputFieldWithBtn: React.FC<{
  className?: string;
  id: string;
  label: string;
  name: string;
  value: string;
  onClick: () => void;
}> = ({ className, id, label, name, value, onClick }) => {
  return (
    <div className={`w-full text-tertiary-900 ${className}`}>
      <label htmlFor={id}>{label}</label>
      <div className="w-full flex gap-4">
        <input
          type="text"
          id={id}
          name={name}
          className="border outline-0 border-tertiary-150 focus:border-tertiary-600 focus-visible:border-tertiary-600 active:border-tertiary-600 hover:border-tertiary-600 p-4 rounded-md w-full text-lg"
          defaultValue={value}
        />
        <AddButton className="h-16" onClick={onClick} hideText />
      </div>
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
  index = 0,
  height = "200px",
  className = "",
}) => {
  return (
    <div className={`w-full text-tertiary-900 ${className}`}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        className={`border outline-0 border-tertiary-150 focus:border-tertiary-600 focus-visible:border-tertiary-600 active:border-tertiary-600 hover:border-tertiary-600 p-4 rounded-md w-full text-lg`}
        onChange={(e) => onChange(section, keyValue, e.target.value, index)}
        value={value}
        style={{ height }}
      />
    </div>
  );
};

const InputBox: React.FC<{
  children: React.ReactNode;
  title: string;
  role: string;
  startDate: string;
  endDate: string;
  deleteExperience: () => void;
}> = ({ children, title, role, startDate, endDate, deleteExperience }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleDelete = () => {
    setOpen(false);
    deleteExperience();
  };

  return (
    <>
      <div className="w-full border border-input-box p-6">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex flex-row gap-2 items-center">
              <h3 className="text-tertiary-900 text-xl font-semibold">
                {title}
              </h3>
              {open && (
                <div
                  className="bg-tertiary-20 transition-all hover:bg-tertiary-40 cursor-pointer p-1"
                  onClick={handleDelete}
                >
                  <DeleteIcon className="text-tertiary-700" />
                </div>
              )}
            </div>
            <div
              className={`transition-transform duration-300 cursor-pointer ${
                open ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setOpen(!open)}
            >
              <KeyboardArrowUpIcon fontSize="large" />
            </div>
          </div>
          {!open && (
            <p className="text-input-box text-lg">
              {role}, {startDate} - {endDate}
            </p>
          )}
          {open && children}
        </div>
      </div>
    </>
  );
};

const LanguageBox: React.FC<{
  children: React.ReactNode;
  title: string;
  handleDelete: () => void;
}> = ({ children, title, handleDelete }) => {
  return (
    <div className="w-full border border-input-box p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-row gap-2 items-center justify-between">
            <h3 className="text-tertiary-900 text-xl font-semibold">{title}</h3>
            <div
              className="bg-tertiary-20 transition-all hover:bg-tertiary-40 cursor-pointer p-1"
              onClick={handleDelete}
            >
              <DeleteIcon className="text-tertiary-700" />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

const AddButton: React.FC<{
  onClick: () => void;
  hideText?: boolean;
  text?: string;
  className?: string;
}> = ({ onClick, hideText = false, text = "", className = "" }) => {
  return (
    <div
      className={`flex rounded-lg items-center border border-tertiary-700 hover:bg-tertiary-10 hover:border-tertiary-800 cursor-pointer px-3 py-1 ${className}`}
      onClick={onClick}
    >
      <AddIcon className="text-tertiary-700" fontSize="large" />
      {!hideText && <span className="text-tertiary-700">{text}</span>}
    </div>
  );
};

const LanguageLevels: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border outline-0 border-tertiary-150 focus:border-tertiary-600 focus-visible:border-tertiary-600 active:border-tertiary-600 hover:border-tertiary-600 p-4 rounded-md w-full text-lg"
    >
      {levels.map((level, index) => (
        <option key={index} value={level}>
          {level}
        </option>
      ))}
    </select>
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
      if (
        section === "experience" ||
        section === "education" ||
        section === "languages"
      ) {
        newData[section][index][key] = value;
      } else if (section === "skills" || section === "hobbies") {
        newData[section][index] = value;
      } else if (section === "cvClause" || section === "summary") {
        newData[key] = value;
      } else {
        newData[section as keyof FormData][key] = value;
      }
      return newData;
    });
  };

  const addExperience = () => {
    formData.experience.push({
      company: "New Company",
      role: "New Role",
      city: "City",
      startDate: "2024-01",
      endDate: "present",
      description: "New Description",
    });
    setFormData({ ...formData });
  };

  const addEducation = () => {
    formData.education.push({
      degree: "New Degree",
      title: "New Title",
      school: "School",
      city: "City",
      startDate: "2024-01",
      endDate: "present",
    });
    setFormData({ ...formData });
  };

  const deleteSkill = (index: number) => {
    formData.skills.splice(parseInt(index), 1);
    setFormData({ ...formData });
  };

  const deleteHobby = (index: number) => {
    formData.hobbies.splice(parseInt(index), 1);
    setFormData({ ...formData });
  };

  const deleteLanguage = (index: number) => {
    formData.languages.splice(parseInt(index), 1);
    setFormData({ ...formData });
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
          <div className="flex flex-col">
            <UserHelper
              title="Your Work Experience"
              description="Add your work experience in reverse chronological order. You can add more than one experience."
              icon={<ExperienceIcon className={"w-[110px] h-[110px]"} />}
            />
            <div className="flex flex-col gap-6">
              {formData.experience.map((exp, index) => (
                <InputBox
                  title={exp.company}
                  role={exp.role}
                  startDate={exp.startDate}
                  endDate={exp.endDate}
                  key={index}
                  deleteExperience={() => {
                    formData.experience.splice(index, 1);
                    setFormData({ ...formData });
                  }}
                >
                  <div className="grid grid-cols-2 gap-4 w-full h-full">
                    <InputField
                      label="Role"
                      id="role"
                      name="role"
                      value={exp.role}
                      onChange={handleChange}
                      section="experience"
                      keyValue="role"
                      className="col-span-2"
                      index={index}
                    />
                    <InputField
                      label="Company"
                      id="company"
                      name="company"
                      value={exp.company}
                      onChange={handleChange}
                      section="experience"
                      keyValue="company"
                      index={index}
                      className="col-span-2"
                    />
                    <InputField
                      label="City"
                      id="city"
                      name="city"
                      value={exp.city}
                      onChange={handleChange}
                      section="experience"
                      keyValue="city"
                      index={index}
                      className="col-span-2"
                    />
                    <InputField
                      label="Start Date"
                      id="start_date"
                      name="start_date"
                      value={exp.startDate}
                      onChange={handleChange}
                      section="experience"
                      keyValue="startDate"
                      index={index}
                    />
                    <InputField
                      label="End Date"
                      id="end_date"
                      name="end_date"
                      value={exp.endDate}
                      onChange={handleChange}
                      section="experience"
                      keyValue="endDate"
                      index={index}
                    />
                    <TextAreaField
                      label="Description"
                      id="description"
                      name="description"
                      value={exp.description}
                      onChange={handleChange}
                      section="experience"
                      keyValue="description"
                      index={index}
                      className="col-span-2"
                      height="300px"
                    />
                  </div>
                </InputBox>
              ))}
              <AddButton
                onClick={addExperience}
                text="Add Experience"
                className="ml-auto"
              />
            </div>
          </div>
        );
      case "education":
        return (
          <div className="flex flex-col">
            <UserHelper
              title="Your Education"
              description="Add your education in reverse chronological order. You can add more than one education."
              icon={<EducationIcon className={"w-[110px] h-[110px]"} />}
            />
            <div className="flex flex-col gap-6">
              {formData.education.map((edu, index) => (
                <InputBox
                  title={edu.school}
                  role={edu.degree}
                  startDate={edu.startDate}
                  endDate={edu.endDate}
                  key={index}
                  deleteExperience={() => {
                    formData.education.splice(index, 1);
                    setFormData({ ...formData });
                  }}
                >
                  <div className="grid grid-cols-2 gap-4 w-full h-full">
                    <InputField
                      label="Degree"
                      id="degree"
                      name="degree"
                      value={edu.degree}
                      onChange={handleChange}
                      section="education"
                      keyValue="degree"
                      className="col-span-2"
                      index={index}
                    />
                    <InputField
                      label="Title"
                      id="title"
                      name="title"
                      value={edu.title}
                      onChange={handleChange}
                      section="education"
                      keyValue="title"
                      index={index}
                      className="col-span-2"
                    />
                    <InputField
                      label="School"
                      id="school"
                      name="school"
                      value={edu.school}
                      onChange={handleChange}
                      section="education"
                      keyValue="school"
                      index={index}
                      className="col-span-2"
                    />
                    <InputField
                      label="City"
                      id="city"
                      name="city"
                      value={edu.city}
                      onChange={handleChange}
                      section="education"
                      keyValue="city"
                      index={index}
                      className="col-span-2"
                    />
                    <InputField
                      label="Start Date"
                      id="start_date"
                      name="start_date"
                      value={edu.startDate}
                      onChange={handleChange}
                      section="education"
                      keyValue="startDate"
                      index={index}
                    />
                    <InputField
                      label="End Date"
                      id="end_date"
                      name="end_date"
                      value={edu.endDate}
                      onChange={handleChange}
                      section="education"
                      keyValue="endDate"
                      index={index}
                    />
                  </div>
                </InputBox>
              ))}
              <AddButton
                onClick={addEducation}
                text="Add Education"
                className="ml-auto"
              />
            </div>
          </div>
        );
      case "skills":
        return (
          <>
            <UserHelper
              title="Your Skills"
              description="Add your skills one by one. You can add as many skills as you want."
              icon={<SkillsIcon className={"w-[110px] h-[110px]"} />}
            />
            <div className="flex gap-4">
              <InputFieldWithBtn
                id="skill-input"
                label="Enter skill"
                name="skill-input"
                value="Web Development"
                onClick={() => {
                  const input = document.getElementById(
                    "skill-input"
                  ) as HTMLInputElement;
                  formData.skills.push(input.value);
                  setFormData({ ...formData });
                }}
              />
            </div>
            <div className="flex flex-col gap-4 pt-10">
              {formData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="w-full flex justify-center items-center gap-4 p-2 bg-tertiary-20 rounded-lg"
                >
                  <InputField
                    label=""
                    id="skill"
                    name="skill"
                    value={skill}
                    onChange={handleChange}
                    section="skills"
                    keyValue="skill"
                    index={index}
                  />
                  <div
                    className="bg-tertiary-20 transition-all hover:bg-tertiary-40 cursor-pointer mr-4"
                    onClick={() => deleteSkill(index)}
                  >
                    <DeleteIcon className="text-tertiary-700" />
                  </div>
                </div>
              ))}
            </div>
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
      case "languages":
        return (
          <>
            <div className="flex flex-col gap-4">
              {formData.languages.map((item, index) => (
                <LanguageBox
                  title={item.language}
                  handleDelete={() => deleteLanguage(index)}
                  key={index}
                >
                  <InputField
                    label=""
                    id={item.language}
                    name="language"
                    value={item.language}
                    onChange={handleChange}
                    section="languages"
                    keyValue="language"
                    index={index}
                  >
                    <LanguageLevels
                      value={item.level}
                      onChange={(value) => {
                        formData.languages[index].level = value;
                        setFormData({ ...formData });
                      }}
                    />
                  </InputField>
                </LanguageBox>
              ))}
              <AddButton
                onClick={() => {
                  formData.languages.push({
                    language: "New Language",
                    level: "A1",
                  });
                  setFormData({ ...formData });
                }}
                text="Add Language"
                className="ml-auto"
              />
            </div>
          </>
        );
      case "hobbies":
        return (
          <>
            <UserHelper
              title="Your Hobbies"
              description="Add your hobbies one by one. You can add as many hobbies as you want."
              icon={<SkillsIcon className={"w-[110px] h-[110px]"} />}
            />
            <div className="flex gap-4">
              <InputFieldWithBtn
                id="hobby-input"
                label="Enter hobby"
                name="hobby-input"
                value="Cycling"
                onClick={() => {
                  const input = document.getElementById(
                    "hobby-input"
                  ) as HTMLInputElement;
                  formData.hobbies.push(input.value);
                  setFormData({ ...formData });
                }}
              />
            </div>
            <div className="flex flex-col gap-4 pt-10">
              {formData.hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="w-full flex justify-center items-center gap-4 p-2 bg-tertiary-20 rounded-lg"
                >
                  <InputField
                    label=""
                    id="hobby"
                    name="hobby"
                    value={hobby}
                    onChange={handleChange}
                    section="hobbies"
                    keyValue="hobby"
                    index={index}
                  />
                  <div
                    className="bg-tertiary-20 transition-all hover:bg-tertiary-40 cursor-pointer mr-4"
                    onClick={() => deleteHobby(index)}
                  >
                    <DeleteIcon className="text-tertiary-700" />
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case "cv_clause":
        return (
          <TextAreaField
            label="CV Clause"
            id="cvClause"
            name="cvClause"
            value={formData.cvClause}
            onChange={handleChange}
            section="cvClause"
            keyValue="cvClause"
            className="col-span-2"
          />
        );
      default:
        return <div>In work</div>;
    }
  };

  return <div className="py-8 px-12 overflow-y-auto">{renderForm()}</div>;
};

export default CVForm;
