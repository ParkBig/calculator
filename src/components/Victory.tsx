import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { VictoryPie } from "victory-pie";
import { compareStore } from "../store/configureStore";
import { IAllData, IData, IForm } from "../__interface__/interface";
import DataAnalysis from "./DataAnalysis";
import useCalculate from "./functions/useCalculate";
import { ReactComponent as Bugger} from "./img/svg/burgerLine.svg"
import enter from "./img/png/enter.png"
import waste from "./img/png/waste.png"

const Victory = ({ prop }: { prop: IAllData }) => {
  const [data, setData] = useState<IData[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { handleSubmit, register, setValue } = useForm<IForm>();

  const count = compareStore(state => state.count);
  const del = compareStore(state => state.del);

  const onSubmit = (formData: IForm) => {
    setData(prev => [...prev, {x: data.length+1, y: +formData[`${prop.id}-data`]}]);
    setValue(`${prop.id}-data`, "");
  }
  const modalOpen = () => {
    setIsOpen(prev => !prev);
  }
  const deleteData = () => {
    if (count === 1) return;
    del(prop.id as number);
  }
  
  const calData = useCalculate(data, prop.id as number);

  // console.log(data)
  return (
    <UpperVictoryDiv counts={count}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DeleteDiv>
          <Bugger onClick={modalOpen} width="60%" height="60%" stroke="black"/>
          <Modal>
            {isOpen ?
              <>
                <ModalBtnDiv onClick={deleteData}>
                  <Img src={waste} />
                </ModalBtnDiv>
              </>
              :
              null
            }
          </Modal>
        </DeleteDiv>
        <Input {...register(`${prop.id}-data`, {required: true})} placeholder="Put Positive Number to calculation" />
        <Btn>
          <EnterImg src={enter} />
        </Btn>
      </Form>
      <VictoryDiv>
        <VictoryPie
          data={data.length ? data : [{ x: "Insert Data", y: 100 }]}
          innerRadius={35}
          style={{ labels: { fill: "red", fontSize: 20, fontWeight: "bold" } }}
          labels={({ datum }) => (datum.x === "Insert Data") ? "Insert Data" : datum.y}
          labelRadius={({ innerRadius }) => innerRadius as number + 30}
          events={[{
            target: "data",
            eventHandlers: {
              onClick: () => {
                return [
                  {
                    target: "data",
                    mutation: ({data: victoryData, index: victoryIndex}) => {
                      setData(prev => prev.filter(prop => prop.x !== victoryData[victoryIndex].x));
                    }
                  }
                ]
              }
            }
          }]}
        />
      </VictoryDiv>
      <DataAnalysisDiv>
        <DataAnalysis calData={calData} />
      </DataAnalysisDiv>
    </UpperVictoryDiv>
  )
}

export default React.memo(Victory);

const UpperVictoryDiv = styled.div<{counts: number}>`
  height: 95%;
  width: ${prop => prop.counts > 4 ? "19%" : prop.counts > 3 ? "20%" : prop.counts > 2 ? "25%" : prop.counts > 1 ? "30%" : "30%"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
  background-color:  #dfe6e9;
`;
const Form = styled.form`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  gap: 2%;
`;
const DeleteDiv = styled.div`
  height: 100%;
  width: 11.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
const Modal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100%;

  z-index: 9999;
`;
const ModalBtnDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  height: 70%;
`;
const EnterImg = styled.img`
  height: 100%;
  max-width: 100%;
  cursor: pointer;
`;
const Input = styled.input`
  height: 100%;
  width: 70%;
  border-radius: 10px;
`;
const Btn = styled.button`
  height: 100%;
  width: 11.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
`;
const VictoryDiv = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DataAnalysisDiv = styled.div`
  width: 100%;
  height: 37%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
