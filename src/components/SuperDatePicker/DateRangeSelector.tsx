import DatePicker from "react-datepicker";
import styles from "./DateRangeSelector.module.css"
import "react-datepicker/dist/react-datepicker.css";
import { DateRange } from "../../types/index.ts";

type Props = {
  range: DateRange;
  onChange: (range: DateRange) => void;
};


function DateRangeSelector({ range, onChange }: Props) {

  return (
    <div className={styles['date-wrapper']}>
    <DatePicker/>


    </div>
  )
}

export default  DateRangeSelector;