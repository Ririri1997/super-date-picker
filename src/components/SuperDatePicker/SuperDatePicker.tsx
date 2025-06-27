import styles from './SuperDatePicker.module.css';
import { useEffect, useState } from "react";
import DateRangeSelector from "./DateRangeSelector";
import type { DateRange } from "../../types";
import PresetsDropdown from "./PresetsDropdown";
import RefreshControl from "./RefreshControl";

function SuperDatePicker() {
  const [range, setRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });
  useEffect(() => {
    console.log(range);
  });
  const handleRefresh = () => {
    console.log("Refresh function", range);
  };

  return (
    <div className={styles.wrapper}>
      <PresetsDropdown onPresetSelect={setRange} />
      <DateRangeSelector
        range={range}
        onChange={(newRange) => setRange(newRange)}
      />
      <RefreshControl onRefresh={handleRefresh} />
    </div>
  );
}

export default SuperDatePicker;
