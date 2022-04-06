import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valuesArray = props.dataPointsValue.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...valuesArray);

  return (
    <div className="chart">
      {props.dataPointsValue.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={maximumValue}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
