interface CustomiseProps {
  handleCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Customise({ handleCheck }: CustomiseProps) {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-4 px-2 lg:w-xl">
      <div className="option">
        <label htmlFor="includeUppercase" className="text-lg">
          Uppercase Letters <span className="font-medium">(A - Z)</span>
        </label>
        <input
          className="aspect-square w-6 scale-90"
          type="checkbox"
          name="includeUppercase"
          id="includeUppercase"
          onChange={handleCheck}
        />
      </div>

      <div className="option">
        <label htmlFor="includeLowercase" className="text-lg">
          Lowercase Letters <span className="font-medium">(a - z)</span>
        </label>
        <input
          className="aspect-square w-6 scale-90"
          type="checkbox"
          name="includeLowercase"
          id="includeLowercase"
          onChange={handleCheck}
        />
      </div>

      <div className="option">
        <label htmlFor="includeSymbols" className="text-lg">
          Symbols <span className="font-medium">(!@#$%^&*)</span>
        </label>
        <input
          className="aspect-square w-6 scale-90"
          type="checkbox"
          name="includeSymbols"
          id="includeSymbols"
          onChange={handleCheck}
        />
      </div>

      <div className="option">
        <label htmlFor="includeNumbers" className="text-lg">
          Numbers <span className="font-medium">(0 - 9)</span>
        </label>
        <input
          className="aspect-square w-6 scale-90"
          type="checkbox"
          name="includeNumbers"
          id="includeNumbers"
          onChange={handleCheck}
        />
      </div>
    </div>
  );
}

export default Customise;
