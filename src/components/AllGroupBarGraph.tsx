import React from "react";
import styled from "styled-components";
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis } from "victory";
import { IAllData } from "../types/interface";

const AllGroupBarGraph = ({ comparatorList }: {comparatorList: IAllData[]}) => {
  return (
    <UpperVictoryGroupBar>
      <VictoryChart width={700} height={300}>
        <VictoryGroup offset={30}>
          {/* {comparatorList.map((prop) => */}
            {/* <VictoryBar
              // key={prop.id}
              animate={{
                animationWhitelist: ["label", "data"],
                duration: 300
              }}
              labels={({ datum }) => (datum.y).toFixed(2)}
              style={{
                labels: { fontSize: 20, fill: "#181D31" },
                data: { fill: "#678983" }
              }}
              data={[
                {x: "합", y: comparatorList[0].sum},
                {x: "평균", y: comparatorList[0].avg},
                {x: "최대", y: comparatorList[0].max},
                {x: "최소", y: comparatorList[0].min},
              ]}
            /> */}
          {/* )} */}
        </VictoryGroup>
        <VictoryAxis 
          label="전체 값 비교"
        />
      </VictoryChart>
    </UpperVictoryGroupBar>
  )
}

export default React.memo(AllGroupBarGraph);

const UpperVictoryGroupBar = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
