import { React } from "react";
import { Container, FeatureButton, FeatureWrapper } from "../NavBar/NavBar.js";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Container>
      <FeatureWrapper>
        <NavLink exact to="/">
          <FeatureButton> Home </FeatureButton>
        </NavLink>

        <NavLink exact to="/Contact">
          <FeatureButton> Contacts </FeatureButton>
        </NavLink>

        <NavLink exact to="/Projects">
          <FeatureButton> Projects </FeatureButton>
        </NavLink>
      </FeatureWrapper>
    </Container>
  );
}
