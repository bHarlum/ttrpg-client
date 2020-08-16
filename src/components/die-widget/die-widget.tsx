import React from "react";
import styled from "styled-components";
import Die from "../die-widget/die";

const dieFaces = [20, 12, 10, 8, 6, 4];



export default function DieWidget(){

return (
    <StyledContainer>

        {dieFaces.map((dieType, index)=> {
            return <Die key={index} max={dieType} />
        })}
    </StyledContainer>
)
    
}

const StyledContainer = styled.div`
    background-color: tomato;
    width: 100%;
`