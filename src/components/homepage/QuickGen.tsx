import { Copy, RefreshCcw } from "lucide-react";
import { useState } from "react";
import { quickPassword } from "../../utils/quickPasswordGen";
import Range from "../global/Range";

function QuickGen() {
  const [range, setRange] = useState<number>(6);
  const [quickPasswordValue, setQuickPasswordValue] = useState<string>("");

  const handleClick = (range: number) => {
    const password: string = quickPassword(range);
    setQuickPasswordValue(password);
  };

  return (
    <div className="bg-white flex flex-col p-4 my-3 items-center justify-center rounded-md w-full md:w-3xl lg:w-4xl mx-auto">
      <div className="w-full flex flex-col items-start justify-center gap-3">
        <h1 className="text-xl font-bold py-3">Quick Generate</h1>

        {quickPasswordValue && (
          <div className="w-full font-semibold flex items-center justify-between gap-5">
            <div className="quick-password bg-gray-100 w-full flex-1 h-10 flex items-center justify-start pl-4 rounded-sm">
              {quickPasswordValue}
            </div>

            <div className="flex items-center justify-center gap-2">
              <Copy className="cursor-pointer" />
              <RefreshCcw
                onClick={() => handleClick(range)}
                className="cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* range */}
        <Range
          layout="mobile"
          title="Length"
          minValue={6}
          maxValue={10}
          range={range}
          setRange={setRange}
        />
      </div>
      <button
        type="button"
        onClick={() => handleClick(range)}
        className="bg-black text-white text-lg font-bold w-full mt-5 py-3 cursor-pointer rounded-md"
      >
        Quick Password
      </button>
    </div>
  );
}

export default QuickGen;
