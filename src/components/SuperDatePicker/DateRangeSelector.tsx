import DatePicker from "react-datepicker";
import styles from "./DateRangeSelector.module.css";
import "react-datepicker/dist/react-datepicker.css";
import type { DateRange } from "../../types/index.ts";

type Props = {
  range: DateRange;
  onChange: (range: DateRange) => void;
};

function DateRangeSelector({ range, onChange }: Props) {
  const handleFromChange = (date: Date | null) => {
    if (date) {
      console.log(date);
      onChange({ ...range, from: date });
    }
  };

  const handleToChange = (date: Date | null) => {
    if (date) {
      console.log(date);
      onChange({ ...range, to: date });
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["input"]}>
      <label htmlFor="from">From</label>
      <DatePicker
        selected={range.from}
        onChange={handleFromChange}
        showTimeSelect
        dateFormat="Pp"
        id="from"
      />
      </div>
      <div className={styles["input"]}>
      <label htmlFor="to">To</label>
      <DatePicker
        selected={range.to}
        onChange={handleToChange}
        showTimeSelect
        dateFormat="Pp"
        id="to"
      />
      </div>
    </div>
  );
}

export default DateRangeSelector;
