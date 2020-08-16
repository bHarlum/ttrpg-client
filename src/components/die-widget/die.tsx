import React, { useState } from "react";
import styled from "styled-components";
type OwnProps = {max: number};
const min = 1;


export default function Die({max}: OwnProps){
    const [currentValue, setCurrentValue] = useState([1]);
    const newDieValue = () => setCurrentValue([Math.floor(Math.random() * max) + min, ...currentValue])
    console.log("rendering", max)
    const [current, ...rest] = currentValue;
    return(
        <DieRowContainer>
            <StyledInnerContainer>
                <StyledDie onClick={() => {
                    console.log("FIRE");
                    newDieValue()}} >
                    Roll Die: {max}
                </StyledDie>
            

                <p>{current}</p>

            </StyledInnerContainer>

            <StyledDiceHistory> Roll History:{rest + ''}</StyledDiceHistory>

        </DieRowContainer>
    )
}

const DieRowContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    width: inherit;
`
const StyledInnerContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledDie = styled.button`
    background-color: green;
    height: 2rem;
`

const StyledDiceHistory = styled.div`
    width: inherit;
    text-align: left;
`
