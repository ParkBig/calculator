import React from "react";
import styled from "styled-components";
import { IAllData } from "../types/interface";
import { VictoryChart, VictoryBar, VictoryAxis } from "victory";

const BarGraph = ({calData}: {calData: IAllData}) => {
  return (
    <UpperVictoryChart>
      <VictoryChart width={700} domainPadding={10}>
        <VictoryBar 
          animate={{
            animationWhitelist: ["data", "label"],
            duration: 300
          }}
          labels={({ datum }) => (datum.y).toFixed(2)}
          style={{
            labels: {fontSize: 20, fill: "#181D31"},
            data: {fill: "#678983"}
          }}
          data={[
            {x:"합", y:calData.sum},
            {x:"평균", y:calData.avg},
            {x:"최대", y:calData.max},
            {x:"최소", y:calData.min},
            {x:"최대-최소", y:calData.maxMinusMin},
            {x:"최대-평균", y:calData.maxMinusAvg},
            {x:"평균-최소", y:calData.avgMinusMin},
          ]}
        />
        <VictoryAxis
          style={{
            axis: {stroke: "#678983"},
            tickLabels: {fontSize: 16, fontWeight: 700}
          }}
        />
      </VictoryChart>
    </UpperVictoryChart>
  )
}

export default React.memo(BarGraph);

const UpperVictoryChart = styled.div`
  width: 100%;
  height: 37%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
