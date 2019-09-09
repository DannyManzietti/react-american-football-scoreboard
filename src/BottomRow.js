import React, {useState} from "react";
import "./App.css";


const BottomRow = () => {
  const [quarter, setQuarter] = useState(0);
  const [down, setDown] = useState(0);
  const [yards,setYards] = useState(0);
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{yards}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
      <section className = "Buttons">
        <div className = "quarterButtons">
          <div className = "quarterButtons_increase" onClick = {() => setQuarter(quarter + 1)}> Quarter
          </div>
          <div className = "quarterButtons_decrease" onClick = {() => setQuarter(0)}>Reset</div>
        </div>
        <div className="downButtons">
          <div className="downButtons_increase" onClick={() => setDown(down + 1)}>Increase Down</div>
          <div className="downButtons_decrease" onClick={() => setDown(down - 1)}>Penalty</div>
          <div className="downButtons_reset" onClick={() => setDown(1)}>First Down</div>
        </div>
      </section>
    </div>
    
  );
};

export default BottomRow;
