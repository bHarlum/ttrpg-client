import React, { useState } from "react";
import styled from "styled-components";


const InventoryItems = (inventorySlots: number, items: string[]) => {
  for(let i = 0; i < inventorySlots; i++) {

  }
}

export default function InventoryWidget() {
  const [inventorySlots, setInventorySlots] = useState(10);

return (
  <Container>
      {inventorySlots.map(() => {
        return <InventoryItemContainer />
    } 
  }
  </Container>)
}

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const InventoryItemContainer = styled.div`
  background: rgba(255, 0, 0, 0.2);
`;