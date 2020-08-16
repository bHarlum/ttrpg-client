import React from "react";
import styled from "styled-components";
import Die from "../die-widget/die";

const dieFaces = [20, 12, 10, 8, 6, 4];



export default function DieWidget(){

return (
    <StyledContainer>
        <DieSelector>
            <option value="" hidden> Type of Dice</option>
            <option>20</option>


        </DieSelector>


        {dieFaces.map((dieType, index)=> {
            return <Die key={index} max={dieType} />
        })}
    </StyledContainer>
)
    
}

const StyledContainer = styled.div`
    background-color: silver;
    width: 100%;
`

const DieSelector = styled.select`
   width: 35%;
  /* height: 35px; */
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

    option {
        color: black;
        display: flex;
        white-space: pre;
        min-height: 15px;
        padding: 0px 2px 1px;
    }
`