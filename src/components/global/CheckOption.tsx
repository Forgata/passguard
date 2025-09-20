interface CheckOptionProps {
  label: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckOption({ label, name, id, onChange }: CheckOptionProps) {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-4 px-2">
      <div className="option">
        <label htmlFor={id} className="text-lg">
          {label}
        </label>
        <input
          className="w-6 aspect-square scale-90"
          type="checkbox"
          name={name}
          id={id}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default CheckOption;
