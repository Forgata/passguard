import React from "react";
import SettingsSection from "../settingspage/SettingsSection";
import SectionCard from "../settingspage/SectionCard";
import { Copyright, File, Mail, Scale, type LucideProps } from "lucide-react";

interface LegalSupport {
  title: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

function Support() {
  const legalSupport: LegalSupport[] = [
    {
      title: "Privacy Policy",
      icon: File,
    },
    {
      title: "Terms of Service",
      icon: Scale,
    },
    {
      title: "Licences",
      icon: Copyright,
    },
    {
      title: "Contact Us",
      icon: Mail,
    },
  ];

  return (
    <div className="px-3">
      <SettingsSection title="Legal & SUpport">
        <div className="flex w-full flex-col justify-evenly gap-5 lg:flex-row lg:items-center">
          {legalSupport.map((section) => (
            <SectionCard
              key={section.title}
              heading={section.title}
              Icon={section.icon}
              description={""}
              link={true}
            />
          ))}
        </div>
      </SettingsSection>
    </div>
  );
}

export default Support;
