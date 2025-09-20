import SectionCard from "../settingspage/SectionCard";
import SettingsSection from "../settingspage/SettingsSection";
import { Atom } from "lucide-react";

const deps: string[] = [
  "React",
  "TypeScript",
  "TailwindCSS",
  "Lucide-React",
  "Date-Fns",
  "Nanoid",
];

function Techs() {
  return (
    <div className="px-3">
      <SettingsSection title="Core Dependencies">
        {deps.map((dep, index) => (
          <SectionCard
            key={index}
            heading={dep}
            description=""
            Icon={Atom}
            chevron={false}
          />
        ))}
      </SettingsSection>
    </div>
  );
}

export default Techs;
