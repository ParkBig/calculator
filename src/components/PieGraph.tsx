import React, { useState } from "react";
import { VictoryPie } from "victory";
import { IData } from "../types/interface";
import styled from "styled-components";

const PieGraph = ({ data, setData }: { data: IData[], setData: React.Dispatch<React.SetStateAction<IData[]>> }) => {
  const [nowHover, setNowHover] = useState<number | null>(null);

  return (
    <UpperVictoryPie title="클릭시 삭제">
      <VictoryPie
        data={data.length ? data : [{ order: "데이터를 입력해보세요", data: 100 }]}
        x="order"
        y="data"
        padAngle={3}
        style={{ labels: { fill: "black", fontSize: 20, fontWeight: "bold" } }}
        labels={({ datum }) => (datum.order === "데이터를 입력해보세요") ? "데이터를 입력해보세요" : datum.data}
        innerRadius={({index}) => index === nowHover ? 70 : 55 }
        radius={({ index }) => index === nowHover ? 145 : 130 }
        labelRadius={({ index }) => index === nowHover ? 155 : 140 }
        animate={{
          animationWhitelist: ["radius", "labelRadius", "innerRadius"],
          duration: 300,
        }}
        events={[{
          target: "data",
          eventHandlers: {
            onMouseOver: () => {
              return [
                {
                  target: "data",
                  mutation: ({ index: victoryIndex }) => {
                    setNowHover(victoryIndex);
                  }
                },
                {
                  target: "labels",
                  mutation: () => {
                    return { style: { fontSize: 30, fontWeight: "bold", fill: "#40407a" }}
                  }
                },
              ]
            },
            onMouseLeave: () => { 
              setNowHover(null);
              return [
                {
                  target: "labels",
                  mutation: () => {
                    return { style: { fontSize: 20, fontWeight: "bold", fill: "black" }}
                  }
                }
              ]
            },
            onClick: () => {
              setNowHover(null);
              return [
                {
                  target: "labels",
                  mutation: () => {
                    return { style: { fontSize: 20, fontWeight: "bold", fill: "black" }}
                  }
                },
                {
                target: "data",
                mutation: ({ data: victoryData, index: victoryIndex }) => {
                  setTimeout(() =>{setData(prev => prev.filter(prop => prop.order !== victoryData[victoryIndex].order));}, 300)
                }
               }
              ]
            }
          }
        }]}
      />
    </UpperVictoryPie>
  )
}

export default React.memo(PieGraph);

const UpperVictoryPie = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
