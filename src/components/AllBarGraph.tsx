import React from "react";
import styled from "styled-components";
import { VictoryChart, VictoryBar, VictoryAxis } from "victory";
import { IAllCalData } from "../types/interface";

const colorList = ["#3ae374", "#c56cf0", "#67e6dc", "#ffb8b8", "#17c0eb", "#7158e2", "#ff9f1a"]

const AllBarGraph = ({ allCalData }: {allCalData: IAllCalData}) => {
  return (
    <Wrap>
      <AllDataAnalText>
        Compare All Values
      </AllDataAnalText>
      <UpperVictoryHorizonBar>
        <VictoryChart width={700} height={300} padding={40}>
          <VictoryBar
            animate={{
              animationWhitelist: ["data"],
              duration: 300
            }}
            labels={({ datum }) => (datum.y).toFixed(2)}
            style={{
              labels: {fontSize: 20, fill: "#181D31"},
              data: {fill: ({index}) =>  colorList[index as number]}
            }}
            data={[
              {x:"합", y:allCalData.allSum[0]},
              {x:"평균", y:allCalData.allAvg[0]},
              {x:"최대", y:allCalData.allMax[0]},
              {x:"최소", y:allCalData.allMin[0]},
              {x:"최대-평균", y:allCalData.allMaxMinusAvg},
              {x:"최대-최소", y:allCalData.allMaxMinusMin},
              {x:"평균-최소", y:allCalData.allAvgMinusMin},
            ]}
          />
          <VictoryAxis
            style={{
              axis: {stroke: "transparent"},
              tickLabels: {fontSize: 16, fontWeight: 700}
            }}
          />
        </VictoryChart>
      </UpperVictoryHorizonBar>
    </Wrap>
  )
}

export default React.memo(AllBarGraph);

const Wrap = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AllDataAnalText = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100%;
  font-weight: 700;
`;
const UpperVictoryHorizonBar = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
