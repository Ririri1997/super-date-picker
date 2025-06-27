import { useState } from "react";
import DateRangeSelector from "./DateRangeSelector";
import type { DateRange } from "../../types";

function SuperDatePicker() {
  const [range, setRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <DateRangeSelector
      range={range}
      onChange={(newRange) => setRange(newRange)}
    />
  );
}

export default SuperDatePicker;
