import SettingsSection from "../settingspage/SettingsSection";
import SectionCard from "../settingspage/SectionCard";
import { CloudCheck, KeyRound } from "lucide-react";

function Features() {
  return (
    <div className="px-3">
      <SettingsSection title="Key Features">
        <div className="flex w-full flex-col justify-evenly gap-5 lg:flex-row lg:items-center">
          <SectionCard
            heading="Password Generator"
            description="Create strong, customizable passwords with various security options"
            Icon={KeyRound}
            chevron={false}
          />

          <SectionCard
            heading="Cloud Sync"
            description="Sync your passwords across devices with ease"
            Icon={CloudCheck}
            chevron={false}
          />
        </div>
      </SettingsSection>
    </div>
  );
}

export default Features;
