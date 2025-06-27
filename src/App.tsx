import SuperDatePicker	 from "./components/SuperDatePicker/SuperDatePicker";
import styles from "./App.module.css"
function App() {

  return (
    <div className={styles.wrapper}>
      <p>Hi, it's Super Date Picker</p>
       <SuperDatePicker/>
    </div>
  )
}

export default App;
