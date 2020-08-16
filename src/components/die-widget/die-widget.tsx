import React, { useState } from "react";
import styled from "styled-components";

const dieFaces = 20;
const min = 1;



export default function DieWidget(){
    const [currentValue, setCurrentValue] = useState(0);
    const newDieValue = ()=>setCurrentValue(Math.floor(Math.random() * dieFaces) + min)
return (<StyledContainer>
        
        <DieStyledButton  onClick={newDieValue} >
            Roll: {dieFaces}
        </DieStyledButton>
    <p>{currentValue}</p>
    
    </StyledContainer>)
    
}

const StyledContainer = styled.div`
    background-color: blue;
`
const DieStyledButton = styled.button`
    background-color: green;
    width: 3rem;
    height: fit-content;
`