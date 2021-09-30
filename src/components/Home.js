import React from "react";
import styled from "styled-components";
import Section from "./Section.js";

export default function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custome order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Solar  Roofs"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Solar for New Roofs"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Accesories"
        //description="Produce Clean Energy From Your Roof"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
        // rightBtnText="Existing inventory"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
