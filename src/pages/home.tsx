import React from "react";
import GridLayout from 'react-grid-layout';
import styled from "styled-components"
import { useRecoilValue } from "recoil";
import { layoutState } from "../atoms";
import DieWidget from "../components/die-widget/die-widget";

export default function HomePage() {

  // const layout = [
  //   {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
  //   {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
  //   {i: 'c', x: 4, y: 0, w: 4, h: 4},
  //   {i: 'alex-component', x: 4, y: 0, w: 4, h: 4}
  // ];

  const layout = useRecoilValue(layoutState);

  return (
    <StyledGridContainer>
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <TestContainer key="a">a</TestContainer>
        <TestContainer key="b">b</TestContainer>
        <TestContainer key="c">c</TestContainer>
        <WidgetContainer key="alex-component" ><DieWidget /></WidgetContainer>
      </GridLayout>
    </StyledGridContainer>
  )
}

const TestContainer = styled.div`
  background-color: tomato;
`;


const WidgetContainer = styled.div`
  background-color: blue;
`;

const StyledGridContainer = styled.div`
height: 100vh;
background-size: 40px 40px;
  background-image:
    linear-gradient(to right, grey 1px, transparent 1px),
    linear-gradient(to bottom, grey 1px, transparent 1px);
`;
