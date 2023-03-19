import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Calender from "./components/Calender";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [months, setMonths] = useState([]);
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetchMonthsAndDays();
  }, []);

  const fetchMonthsAndDays = async () => {
    await axios.get(`http://localhost:3001/api/v1/calendar/month-day-list`).then(({ data }) => {
      setMonths(data.months);
      setDays(data.days);
    });
  };

  return (
    <div className="App">
      <div className="container text-center">
        <Calender months={months} days={days}/>
      </div>
    </div>
  );
}

export default App;
