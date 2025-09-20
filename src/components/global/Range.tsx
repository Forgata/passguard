interface RangeProps {
  layout?: string;
  title: string;
  minValue: number;
  maxValue: number;
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;
}

function Range({ title, minValue, maxValue, range, setRange }: RangeProps) {
  return (
    <div className={`flex w-full flex-col items-start justify-center gap-2`}>
      <label
        htmlFor="inputRange"
        className="flex w-full justify-between text-lg"
      >
        <span>{title}:</span>{" "}
        <span className="font-semibold">{range} Characters</span>
      </label>
      <input
        className="w-full"
        type="range"
        name="range"
        id="inputRange"
        value={range}
        min={minValue}
        max={maxValue}
        onChange={(e) => setRange(Number(e.target.value))}
      />
    </div>
  );
}

export default Range;
