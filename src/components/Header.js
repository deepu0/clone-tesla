import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/carSlice/car.js";
import { useSelector } from "react-redux";
export default function Header() {
  const [open, setOpen] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a>
        <img src="images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, id) => (
            <a href="#" key={id}>
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">SHOP</a>
        <a href="#">TESLa Account</a>
        <CustomMenu onClick={() => setOpen(true)}></CustomMenu>
      </RightMenu>
      <BurgerNav show={open}>
        <CloseWrapper>
          <CustomClose onClick={() => setOpen(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, id) => (
            <li key={id}>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li href="#">
          <a>Commercial Energy</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
