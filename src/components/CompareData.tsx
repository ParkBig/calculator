import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CSVLink } from "react-csv";
import { IAllData, IData, IForm } from "../types/interface";
import { useCompareStore } from "../store/configureStore";
import useCalculate from "../hooks/useCalculate";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";
import { ReactComponent as Bugger} from "../assets/image/svg/burgerLine.svg";
import { ReactComponent as Reset } from "../assets/image/svg/restart.svg";
import enter from "../assets/image/png/enter.png";
import waste from "../assets/image/png/waste.png";
import csv from "../assets/image/png/csv.png";
import { type } from "os";

const header = [
  { label: "순번", key: "order" },
  { label: "DATA", key: "data" },
  { label: "", key: "space" },
  { label: "SUM", key: "sum" },
  { label: "AVG", key: "avg" },
  { label: "MAX", key: "max" },
  { label: "MIN", key: "min" },
  { label: "MaxMinusAvg", key: "maxMinusAvg" },
  { label: "MaxMinusMin", key: "maxMinusMin" },
  { label: "AvgMinusMin", key: "avgMinusMin" },
];

const CompareData = ({ prop }: { prop: IAllData }) => {
  const [data, setData] = useState<IData[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [csvData, setCsvData] = useState<Object[]>([]);
  const { handleSubmit, register, setValue } = useForm<IForm>();
  const calData = useCalculate(data, prop.id);

  const comparatorList = useCompareStore(state => state.comparatorList);
  const deleteComparator = useCompareStore(state => state.deleteComparator);

  const onSubmit = (formData: IForm) => {
    if (formData[`${prop.id}-data`] <= 0) {
      alert("0보다 큰 실수만 입력 가능합니다");
      return;
    }
    setData(prev => [...prev, {order: data.length+1, data: +formData[`${prop.id}-data`]}]);
    setValue(`${prop.id}-data`, "");
  };
  const modalOpen = () => {
    setIsOpen(prev => !prev);
  };
  const getCsv = () => {
    setCsvData([...data, calData]);
    setIsOpen(prev => !prev);
    if (!data.length) {
      alert("추출할 데이터가 없습니다.");
      return false;
    };
  };
  const resetData = () => {
    setIsOpen(prev => !prev);
    if (window.confirm("초기화 하시겠습니까?")) {
      setData([]);
    }
  }
  const deleteTheData = () => {
    if (comparatorList.length === 1) return;
    if (window.confirm("삭제하시겠습니까?")) {
      deleteComparator(prop.id);  
    };
    setIsOpen(prev => !prev);
  };
  return (
    <WrapVictoryDiv variants={motionVariants} initial="initial" animate="visible" exit="leaving" counts={comparatorList.length}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Options>
          <BuggerBtn variants={motionVariants} whileHover={{scale: 1.3}} animate={isOpen ? "openOption" : "closeOption"} onClick={modalOpen} $isOpen={isOpen}/>
          <Modal>
            <UpperModalBtn variants={motionVariants} initial={{scaleY: 0}} animate={isOpen ? "showModal" : "closeModal"}>
              <ModalBtn>
                <ResetBtn onClick={resetData} />
              </ModalBtn>
              <ModalBtn>
                <CsvLinkStyle onClick={getCsv} data={csvData} headers={header} filename={"my-data.csv"}>
                  <Img src={csv} />
                </CsvLinkStyle>
              </ModalBtn>
              <ModalBtn>
                <Img src={waste} onClick={deleteTheData}/>
              </ModalBtn>
            </UpperModalBtn>
          </Modal>
        </Options>
        <Input type="number" {...register(`${prop.id}-data`, { required: true })} placeholder="Put Positive Number to calculation" />
        <Btn>
          <EnterImg src={enter} />
        </Btn>
      </Form>
      <PieGraph data={data} setData={setData} />
      <BarGraph calData={calData} />
    </WrapVictoryDiv>
  )
}

export default React.memo(CompareData);

const WrapVictoryDiv = styled(motion.div)<{counts: number}>`
  height: 95%;
  width: ${prop => prop.counts > 4 ? "19%" : prop.counts > 3 ? "20%" : prop.counts > 2 ? "25%" : prop.counts > 1 ? "30%" : "30%"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
  background-color:  #dfe6e9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 1800px) {
    font-size: 1.2em;
    width: 382px;
    flex-grow: 0;
    flex-shrink: 0;
  }
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
const Options = styled.div`
  height: 100%;
  width: 11.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
const BuggerBtn = styled(motion(Bugger))<{$isOpen: boolean}>`
  width: 60%;
  height: 60%;
  stroke: black;
`;
const ResetBtn = styled(motion(Reset))`
  height: 70%;
  stroke: black;

  transition: all ease 0.5s;
  :hover {
    transform: rotate(360deg);
  }
`;
const Modal = styled.div`
  width: 100%;
  height: 200%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100%;
  gap: 5%;
  z-index: 999;
`;
const UpperModalBtn = styled(motion.div)`
  height: 100%;
  width: 100%;
  transform-origin: top center;
`;
const ModalBtn = styled.div`
  width: 100%;
  height: 47.5%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    scale: 1.2;
  }
  transition: 0.2s;
`;
const CsvLinkStyle = styled(CSVLink)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  height: 65%;
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

const motionVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween"
    }
  },
  leaving: {
    opacity: 0,
    scale: 0,
  },
  openOption: {
    rotateZ: 90,
    scale: 1.4
  },
  closeOption: {
    rotateZ: 0
  },
  showModal: {
    scaleY: 1,
    scaleX: 1,
    transition: {
      duration: 0.3
    }
  },
  closeModal: {
    scaleY: 0,
    scaleX: 0,
  }
};
