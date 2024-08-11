import React from "react";
import { FormData } from "../types/types";

interface CVPreviewProps {
  formData: FormData;
  targetRef: React.RefObject<HTMLDivElement>;
}

const PersonalInfo: React.FC<{ formData: FormData }> = ({ formData }) => (
  <div className="w-full">
    <h3 className="border-b border-b-secondary text-cv-heading text-lg font-bold mb-2">
      Personal Info
    </h3>
    <div className="flex flex-col gap-2">
      <ContactItem
        label="Email"
        value={formData.personalInfo.email}
        link={`mailto:${formData.personalInfo.email}`}
      />
      <ContactItem
        label="Phone"
        value={formData.personalInfo.phone}
        link={`tel:${formData.personalInfo.phone}`}
      />
      <ContactItem label="Address" value={formData.personalInfo.address} />
      <ContactItem
        label="LinkedIn"
        value={formData.personalInfo.linkedin}
        link={formData.personalInfo.linkedin}
      />
      <ContactItem
        label="GitHub"
        value={formData.personalInfo.github}
        link={formData.personalInfo.github}
      />
    </div>
  </div>
);

const ContactItem: React.FC<{
  label: string;
  value: string;
  link?: string;
}> = ({ label, value, link }) => (
  <div>
    <p className="text-black font-bold text-[12px]">{label}</p>
    {link ? (
      <a href={link} className="text-clean-gray text-[12px]">
        {value}
      </a>
    ) : (
      <p className="text-clean-gray text-[12px]">{value}</p>
    )}
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="w-full mt-3">
    <h3 className="border-b border-b-secondary text-cv-heading text-lg font-bold mb-2">
      {title}
    </h3>
    <div className="flex flex-col gap-2">{children}</div>
  </div>
);

const ExperienceItem: React.FC<{
  startDate: string;
  endDate: string;
  title: string;
  subtitle: string;
  description?: string;
}> = ({ startDate, endDate, title, subtitle, description }) => (
  <div className="flex flex-row gap-4">
    <div className="w-1/5">
      <p className="text-clean-gray text-[12px]">
        {startDate} - {endDate}
      </p>
    </div>
    <div className="w-4/5 flex flex-col gap-2">
      <p className="text-clean-gray font-bold text-[16px]">{title}</p>
      <p className="text-clean-gray text-[14px] italic">{subtitle}</p>
      {description && (
        <p className="text-clean-gray text-[12px]">{description}</p>
      )}
    </div>
  </div>
);

const CVPreview: React.FC<CVPreviewProps> = ({ formData, targetRef }) => (
  <div
    className="w-full h-full pt-8 pl-8 pr-8 bg-box font-arimo overflow-x-hidden"
    id="cv-preview"
    ref={targetRef}
  >
    <div className="w-full h-full shadow-xl flex flex-col">
      <div className="w-full bg-cv-header p-6">
        <h2 className="text-white text-3xl font-bold">
          {formData.personalInfo.firstName} {formData.personalInfo.lastName}
        </h2>
        <p className="text-white text-base">{formData.personalInfo.role}</p>
      </div>

      <div className="bg-white shadow-xl flex h-full gap-2 w-full">
        <div className="flex-grow h-full basis-0 p-6">
          <div className="w-full text-clean-gray">
            <p>{formData.summary}</p>
          </div>

          <Section title="Work History">
            {formData.experience.map((exp, index) => (
              <ExperienceItem
                key={index}
                startDate={exp.startDate}
                endDate={exp.endDate}
                title={exp.role}
                subtitle={`${exp.company}, ${exp.city}`}
                description={exp.description}
              />
            ))}
          </Section>

          <Section title="Education">
            {formData.education.map((edu, index) => (
              <ExperienceItem
                key={index}
                startDate={edu.startDate}
                endDate={edu.endDate}
                title={`${edu.degree}, ${edu.title}`}
                subtitle={`${edu.school}, ${edu.city}`}
              />
            ))}
          </Section>

          <div className="mt-4">
            <p className="text-clean-gray text-[8px]">{formData.cvClause}</p>
          </div>
        </div>

        <div className="w-1/3 h-full bg-cv-sidebar p-6 break-words">
          <PersonalInfo formData={formData} />

          <Section title="Skills">
            {formData.skills.map((skill, index) => (
              <p key={index} className="text-clean-gray text-[12px]">
                {skill}
              </p>
            ))}
          </Section>

          <Section title="Languages">
            {formData.languages.map((lang, index) => (
              <p key={index} className="text-clean-gray text-[12px]">
                {lang.language} - {lang.level}
              </p>
            ))}
          </Section>

          <Section title="Interest">
            {formData.hobbies.map((hobby, index) => (
              <p key={index} className="text-clean-gray text-[12px]">
                {hobby}
              </p>
            ))}
          </Section>
        </div>
      </div>
    </div>
  </div>
);

export default CVPreview;
