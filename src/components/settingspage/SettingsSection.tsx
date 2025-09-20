interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
}

function SettingsSection({ title, children }: SettingsSectionProps) {
  return (
    <div className="mt-5">
      <h1 className="py-2 text-2xl font-bold">{title}</h1>
      <div className="flex w-full flex-col items-start gap-3 py-4">
        {children}
      </div>
    </div>
  );
}

export default SettingsSection;
