import {
  CircleQuestionMark,
  CloudCheck,
  HardDriveDownload,
  HardDriveUpload,
  Headset,
  Info,
} from "lucide-react";
import SectionCard from "../components/settingspage/SectionCard";
import SettingsSection from "../components/settingspage/SettingsSection";
import { useEffect, useState } from "react";

function Settings() {
  const [version, setVersion] = useState("");
  async function getVersion() {
    try {
      const response = await fetch("../../package.json");
      const data = await response.json();
      setVersion(data.version);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getVersion();
  }, []);

  return (
    <div className="mx-auto px-4 pb-3 md:w-3xl lg:w-4xl">
      {/* <Datamgnt />
      <Preferences /> */}

      <SettingsSection title="Data Management">
        <SectionCard
          heading="Export Data"
          description="Export your passwords"
          Icon={HardDriveDownload}
        />
        <SectionCard
          heading="Import Data"
          description="Import from other sources"
          Icon={HardDriveUpload}
        />
        <SectionCard
          heading="Backup and Sunc"
          description="last synced: never"
          Icon={CloudCheck}
        />
      </SettingsSection>

      <SettingsSection title="Support & About">
        <SectionCard
          heading="Help Center"
          description="FAQs and tutorials"
          Icon={CircleQuestionMark}
        />
        <SectionCard
          heading="contact support"
          description="Get help from our team"
          Icon={Headset}
        />
        <SectionCard
          heading="about PassGuard"
          description={`Version: ${version}`}
          Icon={Info}
          chevron={false}
          link={true}
          url="/about"
        />
      </SettingsSection>
    </div>
  );
}

export default Settings;
