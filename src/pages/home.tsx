import React, { useEffect } from "react";
import GridLayout from 'react-grid-layout';
import styled from "styled-components"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { layoutState, Layout } from "../atoms";
import InventoryWidget from "../components/inventory-widget/inventory-widget";

export default function HomePage() {
  const layout = useRecoilValue(layoutState);
  const setLayout = useSetRecoilState(layoutState);

  const addLayout = (newLayoutItem: Layout) => {
    setLayout((oldLayouts: Layout[]) => [
      ...oldLayouts,
      newLayoutItem,
    ])
  }

  useEffect(() => {
    setTimeout(() => {addLayout({i: "potato", x: 2, y: 2, h: 5, w: 4});}, 5000)
  }, [])

  return (
    <StyledGridContainer>
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <TestContainer key="a">a</TestContainer>
        <TestContainer key="b">b</TestContainer>
        <TestContainer key="inventory-container"><InventoryWidget/></TestContainer>
        <TestContainer key="potato">POTATO</TestContainer>
        <MyComponent key="alex-component" >HI IM ALEX</MyComponent>
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
